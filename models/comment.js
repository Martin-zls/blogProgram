var crypto = require('crypto');
var ObjectID = require('mongodb').ObjectID;

module.exports = function(mongoose){
    var CommentsSchema = new mongoose.Schema({
        articleid: String,
        user: String,
        time: String,
        content: String
    }, {
        collection: 'comments'
    });

    var commentModel = mongoose.model('Comment', CommentsSchema);

    function Comment(comment) {
        var self = this;
        self.articleid = comment.articleid;
        self.time = comment.time;
        self.userid = comment.userid;
        self.content = comment.content;
    }

    Comment.prototype.save = function (callback) {
        var self = this;

        var comment = {
            articleid: self.articleid,
            userid: self.userid,
            time: self.time,
            content: self.content
        }
        if(!comment.articleid){
            callback("文章id不能为空！");
        }
        if(!comment.userid){
            callback("评论者不能为空！");
        }
        if(!comment.content){
            callback("评论内容不能为空！");
        }

        var newComment = new commentModel(comment);

        newComment.save(function (err, comment) {
            if (err) {
                return callback(err);
            }
            callback(null, comment);
        });
    }

    Comment.getById = function (_id, callback) {
        commentModel.findOne({
            "_id": new ObjectID(_id)
        }, function (err, comment) {
            if (err){
                return callback(err);
            }
            callback(comment);
        });
    };

    return Comment;
}