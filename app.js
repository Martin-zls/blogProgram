var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//用于保存该博客工程的配置信息，比如数据库的连接信息
var settings = require('./settings');
console.log(settings);
//实现用户的注册和登陆,需要引入 flash 模块来实现页面通知（即成功与错误信息的显示）的功能。
var flash = require('connect-flash');

var fs = require('fs');
var accessLog = fs.createWriteStream('access.log', {flags: 'a'});
var errorLog = fs.createWriteStream('error.log', {flags: 'a'});
var app = express();

// express 也提供了会话中间件，默认情况下是把用户信息存储在内存中，但我们既然已经有了 MongoDB
// 不妨把会话信息存储在数据库中，便于持久维护。为了使用这一功能，我们需要借助 express-session 和 connect-mongo 这两个第三方中间件
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//设置端口号
app.set('port', process.env.PORT || 3000);

// 设置模板路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//使用 flash 功能
app.use(flash());

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(logger('combined', {stream: accessLog}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: settings.cookieSecret,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    url: settings.url
}));

// 设置静态文件目录为public文件夹
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (err, req, res, next) {
    var meta = '[' + new Date() + '] ' + req.url + '\n';
    errorLog.write(meta + err.stack + '\n');
    next();
});

var multer = require('multer');

// 使用express的第三方中间件 multer 实现文件上传功能
app.use(multer({
    dest: './public/images',
    rename: function (fieldname, filename) {
        return filename;
    }
}));

routes(app);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});