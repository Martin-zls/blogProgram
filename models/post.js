//var mongodb = require('./db');
var markdown = require('markdown').markdown;
var ObjectID = require('mongodb').ObjectID;
var async = require('async');
var DocFormat = require('../models/docFormat.js')();//格式化输出文档的格式


module.exports = function(mongoose){
    var postSchema = new mongoose.Schema({
        name: String,
        head: String,
        time: {},
        title: String,
        tags: [],
        post: String,
        comments: [],
        reprint_info: {},
        pv: Number
    }, {
        collection: 'posts'
    });

    var postModel = mongoose.model('Post', postSchema);

    function Post(name, head, title, tags, post) {
        this.name = name;
        this.head = head;
        this.title = title;
        this.tags = tags;
        this.post = post;
    }

    //存储一篇文章及其相关信息
    Post.prototype.save = function (callback) {
        var date = new Date();
        //存储各种时间格式，方便以后扩展
        var time = +date;

        //要存入数据库的文档
        var post = {
            name: this.name,
            head: this.head,
            time: time,
            title: this.title,
            tags: this.tags,
            post: this.post,
            comments: [],
            reprint_info: {},
            pv: 0
        };

        var newPost = new postModel(post);

        newPost.save(function(err, post) {
            if (err) {
                return callback(err);
            }
            callback(null,post);
        });

    };


//一次获取十篇文章
    Post.getTen = function (name, page, callback) {
        var query = {};
        if(name){
            query.name = name;
        }

        async.waterfall([
            function(cb){
                postModel.find(query).count(function(err, count) {
                    cb(err, count);
                });
            },
            function(count,cb){
                postModel.find(query).skip((page - 1) * 10).limit(10).sort({time:-1}).exec(function (err,docs) {
                    cb(err, docs, count);
                });
            }
        ],function(err, docs, total){
            var doc = new DocFormat(docs);
            var post = doc.out();
            callback(err, post, total);
        });
    };

//获取一篇文章
    Post.getOne = function (_id, callback) {
        var query = {};

        if(_id){
            query._id = new ObjectID(_id);
        }else{
            callback("_id不能为空！");
        }

        async.waterfall([
            function(cb){
                postModel.find(query).exec(function(err,docs){
                    cb(err,docs[0]);
                });
            },
            function(docs,cb){
                if(docs){
                    //解析 markdown 为 html
                    docs.post = markdown.toHTML(docs.post);
                    if(docs.comments.length){
                        docs.comments.forEach(function (comment) {
                            comment.content = markdown.toHTML(comment.content);
                        });
                    }
                    //转换日期格式
                    var doc = new DocFormat([docs]);
                    var post = doc.out();
                    cb(null,post[0]);
                }
            },
            function(docs,cb){
                postModel.update(query,{$inc: {"pv": 1}},function(err){
                    cb(err,docs);
                })
            }
        ],function(err,docs){
            callback(err, docs);
        });

    };

//返回原始发表的内容（markdown 格式）
    Post.edit = function (_id, callback) {
        var query = {};

        if(_id){
            query._id = new ObjectID(_id);
        }else{
            callback("_id不能为空！");
        }

        postModel.find(query).exec(function(err,docs){
            callback(null,docs[0]);//返回查询的一篇文章（markdown 格式）
        });
    };

// 更新文章
    Post.update = function (_id, doc, callback) {
        if(!_id){
            callback("_id不能为空！");
        }
        if(!doc){
            callback("_id不能为空！");
        }

        postModel.update({
            "_id": new ObjectID(_id)
        },{$set:doc}).exec(function(err){
            callback(err, null);
        });
    };

//删除一篇文章
    Post.remove = function (_id, callback) {
        if(!_id){
            callback("_id不能为空！");
        }
        postModel.remove({
            "_id": new ObjectID(_id)
        },function(err,doc){
            if(err){
                callback(err)
            }
            else{
                //如果有 reprint_from，即该文章是转载来的，先保存下来 reprint_from
                var reprint_from = "";

                if(doc.reprint_info){
                    if (doc.reprint_info.reprint_from) {
                        reprint_from = doc.reprint_info.reprint_from;
                    }
                    if(reprint_from != ""){
                        //更新原文章所在文档的 reprint_to
                        postModel.update({
                            "_id": new ObjectID(reprint_from._id)
                        },{
                            $pull: {
                                "reprint_info.reprint_to": {
                                    "_id": _id
                                }
                            }
                        },function(err){
                            if(err){
                                callback(err);
                            }
                        });
                    }

                    postModel.remove({
                        "_id": new ObjectID(_id)
                    },{
                        w: 1
                    }, function (err) {
                        callback(err, null);
                    })
                }
                else{
                    callback(err, null);
                }
            }
        });
    };

//返回所有文章存档信息
    Post.getArchive = function (callback) {

        postModel.find({},{
            "name": 1,
            "time": 1,
            "title": 1
        }).sort({
            time: -1
        }).exec(function(err, docs){
            callback(err, docs);
        });

    };

//返回所有标签
    Post.getTags = function (callback) {
        postModel.distinct("tags",function(err, docs){
            callback(err, docs);
        });
    };

//返回含有特定标签的所有文章
    Post.getTag = function (tag, callback) {

        postModel.find({
            "tags": tag
        },{
            "name": 1,
            "time": 1,
            "title": 1
        }).sort({
            time: -1
        }).exec(function(err,docs){
            callback(err,docs);
        });

    };

//返回通过标题关键字查询的所有文章信息
    Post.search = function (keyword, callback) {
        var pattern = new RegExp(keyword,"i");

        postModel.find({
            "title": pattern
        },{
            "name": 1,
            "time": 1,
            "title": 1
        }).sort({
            time: -1
        }).exec(function(err,docs){
            callback(err, docs);
        });

    };

//转载一篇文章
//    Post.reprint = function (reprint_from, reprint_to, callback) {
//
//        async.waterfall([
//            function (cb) {
//                mongodb.open(function (err, db) {
//                    cb(err, db);
//                });
//            },
//            function (db, cb) {
//                db.collection("posts", function (err, collection) {
//                    cb(err, collection);
//                });
//            },
//            function (collection, cb) {
//                collection.findOne({
//                    "_id": new ObjectID(reprint_from._id)
//                }, function (err, doc) {
//                    cb(err, collection, doc);
//                });
//            },
//            function (collection, doc, cb) {
//                var date = new Date();
//                var time = {
//                    date: date,
//                    year: date.getFullYear(),
//                    month: date.getFullYear() + "-" + (date.getMonth() + 1),
//                    day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
//                    minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
//                    date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
//                }
//
//                var old_id = doc._id;
//
//                delete doc._id;//注意要删掉原来的 _id
//
//                doc.name = reprint_to.name;
//                doc.head = reprint_to.head;
//                doc.time = time;
//                doc.title = (doc.title.search(/[转载]/) > -1) ? doc.title : "[转载]" + doc.title;
//                doc.comments = [];
//                doc.reprint_info = {"reprint_from": reprint_from};
//                doc.pv = 0;
//
//                //将转载生成的副本修改后存入数据库，并返回存储后的文档
//                collection.insert(doc, {
//                    safe: true
//                }, function (err, post) {
//                    cb(err, collection, old_id, post[0]);
//                });
//            },
//            function (collection, old_id, post, cb) {
//                //更新被转载的原文档的 reprint_info 内的 reprint_to
//                collection.update({
//                    "_id": new ObjectID(old_id)
//                }, {
//                    $push: {
//                        "reprint_info.reprint_to": {
//                            "_id": post._id
//                        }
//                    }
//                }, function (err) {
//                    cb(err, post);
//                });
//            }
//        ], function (err, post) {
//            mongodb.close();
//            callback(err, post);
//        });
//    };

    return Post;
}

