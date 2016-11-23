//引入 crypto 模块和 user.js 用户模型文件，crypto 是 Node.js 的一个核心模块，我们用它生成散列值来加密密码。
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    formidable = require('formidable'),
    multer = require('multer');

mongoose.connect('mongodb://zheng l s:adminzls@ds059702.mlab.com:59702/zlsblog');
var Comment = require('../models/comment.js')(mongoose);
var User = require('../models/user.js')(mongoose);
var Post = require('../models/post.js')(mongoose);

module.exports = function (app) {
    var AVATAR_UPLOAD_FOLDER = '/public/images/';

    app.get('/', function (req, res) {
        //判断是否是第一页，并把请求的页数转换成 number 类型
        var page = parseInt(req.query.p) || 1;
        //查询并返回第 page 页的 10 篇文章
        Post.getTen(null, page, function (err, posts, total) {
            if (err) {
                posts = [];
            }
            res.render('index', {
                title: '主页',
                posts: posts,
                page: page,
                isFirstPage: (page - 1) == 0,
                isLastPage: ((page - 1) * 10 + posts.length) == total,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    //注册
    app.get('/reg', checkNotLogin);
    app.get('/reg', function (req, res) {
        res.render('reg', {
            title: '注册',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/reg', checkNotLogin);
    app.post('/reg', function (req, res) {
        var name = req.body.name,
            password = req.body.password,
            password_re = req.body['password-repeat'],
            email = req.body.email;
        // 检验用户名不能为空
        if (name == '') {
            req.flash('error', '用户名不能为空');
            return res.redirect('/reg');
        }
        // 验证密码不能为空
        if (password == '') {
            req.flash('error', '密码不能为空！');
            return res.redirect('/reg');
        }
        // 检验邮箱不能为空
        if (email == '') {
            req.flash('error', '邮箱不能为空！');
            return res.redirect('/reg');
        }
        //检验用户两次输入的密码是否一致
        if (password_re != password) {
            req.flash('error', '两次输入的密码不一致!');
            return res.redirect('/reg');//返回注册页
        }

        //生成密码的 md5 值
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        var newUser = new User({
            name: name,
            password: password,
            email: req.body.email
        });
        //检查用户名是否已经存在
        User.get(newUser.name, function (err, user) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            if (user) {
                req.flash('error', '用户已存在!');
                return res.redirect('/reg');//返回注册页
            }
            //如果不存在则新增用户
            newUser.save(function (err, user) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/reg');//注册失败返回主册页
                }
                req.session.user = newUser;//用户信息存入 session
                req.flash('success', '注册成功!');
                res.redirect('/');//注册成功后返回主页
            });
        });
    });

    //登陆
    app.get('/login', checkNotLogin);
    app.get('/login', function (req, res) {
        res.render('login', {
            title: '登录',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            redirect: req.query.redirect
        });
    });

    app.post('/login', checkNotLogin);
    app.post('/login', function (req, res) {
        //生成密码的 md5 值
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex'),
            url = '/';
        //检查用户是否存在
        User.get(req.body.name, function (err, user) {
            if (!user) {
                req.flash('error', '用户不存在!');
                return res.redirect('/login');//用户不存在则跳转到登录页
            }
            //检查密码是否一致
            if (user.password != password) {
                req.flash('error', '密码错误!');
                return res.redirect('/login');//密码错误则跳转到登录页
            }
            // 如果重定向链接地不为空，则跳到相应页面
            if (req.body.redirect) {
                url = req.body.redirect;
            }

            //用户名密码都匹配后，将用户信息存入 session
            req.session.user = user;
            req.flash('success', '登陆成功!');
            res.redirect(url);//登陆成功后跳转到主页
        });
    });

    //发布文章
    app.get('/post', checkLogin);
    app.get('/post', function (req, res) {
        res.render('post', {
            title: '发表',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/post', checkLogin);
    app.post('/post', function (req, res) {
        var currentUser = req.session.user,
            tags = req.body.tags.split('、'),
            post = new Post(currentUser.name, currentUser.head, req.body.title, tags, req.body.post);

        post.save(function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            req.flash('success', '发布成功!');
            res.redirect('/');//发表成功跳转到主页
        });
    });

    app.get('/logout', function (req, res) {
        req.session.user = null;
        req.flash('success', '登出成功!');
        res.redirect('/');//登出成功后跳转到主页
    });

    // 图片上传功能
    app.get('/upload', checkLogin);
    app.get('/upload', function (req, res) {
        res.render('upload', {
            title: '文件上传',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/upload', checkLogin);
    app.post('/upload', function (req, res) {
        req.flash('success', '文件上传成功!');
        res.redirect('/upload');
    });

    app.get('/archive', function (req, res) {
        Post.getArchive(function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('archive', {
                title: '存档',
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/tags', function (req, res) {
        Post.getTags(function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('tags', {
                title: '标签',
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/tags/:tag', function (req, res) {
        Post.getTag(req.params.tag, function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }

            res.render('tag', {
                title: 'TAG:' + req.params.tag,
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/search', function (req, res) {
        Post.search(req.query.keyword, function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('search', {
                title: "SEARCH:" + req.query.keyword,
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/links', function (req, res) {
        res.render('links', {
            title: '友情链接',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.get('/u/:name', function (req, res) {
        var page = parseInt(req.query.p) || 1;
        //检查用户是否存在
        User.get(req.params.name, function (err, user) {
            if (!user) {
                req.flash('error', '用户不存在!');
                return res.redirect('/');
            }
            //查询并返回该用户第 page 页的 10 篇文章
            Post.getTen(user.name, page, function (err, posts, total) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                res.render('user', {
                    title: user.name,
                    posts: posts,
                    page: page,
                    isFirstPage: (page - 1) == 0,
                    isLastPage: ((page - 1) * 10 + posts.length) == total,
                    user: req.session.user,
                    success: req.flash('success').toString(),
                    error: req.flash('error').toString()
                });
            });
        });
    });

    // 浏览文章
    app.get('/p/:_id', function (req, res) {
        Post.getOne(req.params._id, function (err, post) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('article', {
                _id: req.params._id,
                title: post.title,
                post: post,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    //因为是个人的所以去掉转载功能
    //app.get('/reprint/:_id', checkLogin);
    //app.get('/reprint/:_id', function (req, res) {
    //    Post.edit(req.params._id, function (err, post) {
    //        if (err) {
    //            req.flash('error', err);
    //            return res.redirect(back);
    //        }
    //        var currentUser = req.session.user,
    //            reprint_from = {_id: post._id},
    //            reprint_to = {name: currentUser.name, head: currentUser.head};
    //        Post.reprint(reprint_from, reprint_to, function (err, post) {
    //            if (err) {
    //                req.flash('error', err);
    //                return res.redirect('back');
    //            }
    //            req.flash('success', '转载成功!');
    //            var url = encodeURI('/u/' + post.name);
    //            //跳转到转载后的文章页面
    //            res.redirect(url);
    //        });
    //    });
    //});

    //文章评论
    app.post('/u/:_id', function (req, res) {
        var date = +new Date();
        var comment = {
            articleid: req.params._id,
            userid: req.session.user._id,
            time: date,
            content: req.body.content
        };
        var newComment = new Comment(comment);

        if (req.session.user) {

            if (comment.content) {
                newComment.save(function (err) {
                    if (err) {
                        req.flash('error', err);
                        return res.redirect('back');
                    }
                    req.flash('success', '留言成功!');
                    res.redirect('back');
                });
            }
            else {
                req.flash('success', '评论不能为空!');
                res.redirect('back');
            }

        }
        else {
            req.flash('success', '您还没有登录!');
            res.redirect('back');
        }

    });

    // 编辑文章
    app.get('/edit/:_id', checkLogin);
    app.get('/edit/:_id', function (req, res) {
        Post.edit(req.params._id, function (err, post) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            res.render('edit', {
                title: '编辑',
                post: post,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.post('/edit/:_id', checkLogin);
    app.post('/edit/:_id', function (req, res) {

        if(req.body.tags.indexOf("、")){
            var tags = req.body.tags.split('、');
        }else{
            var tags = req.body.tags;
        }

        var doc = {
            post: req.body.post,
            title: req.body.title,
            tags: tags
        }
        Post.update(req.params._id, doc, function (err) {
            var url = encodeURI('/p/' + req.params._id);
            if (err) {
                req.flash('error', err);
                return res.redirect(url);//出错！返回文章页
            }
            req.flash('success', '修改成功!');
            res.redirect(url);//成功！返回文章页
        });
    });

    // 删除文章
    app.get('/remove/:_id', checkLogin);
    app.get('/remove/:_id', function (req, res) {
        Post.remove(req.params._id, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            req.flash('success', '删除成功!');
            res.redirect('/');
        });
    });

    app.use(function (req, res) {
        res.render("404");
    });

    function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            res.redirect('/login');
        }
        next();
    }

    function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            res.redirect('back');
        }
        next();
    }

};