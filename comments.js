// Create web server
// npm install express
// npm install body-parser
// npm install multer
// npm install cookie-parser
// npm install express-session
// npm install mysql
// npm install ejs
// npm install nodemailer
// npm install nodemailer-smtp-transport
// npm install crypto
// npm install connect-flash
// npm install fs
// npm install socket.io
// npm install request
// npm install express-error-handler
// npm install async
// npm install -g nodemon
// npm install -g supervisor
// npm install -g forever
// npm install -g pm2
// npm install -g grunt-cli
// npm install -g gulp
// npm install -g webpack

// 1. 모듈 추출
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mysql = require('mysql');
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var crypto = require('crypto');
var flash = require('connect-flash');
var fs = require('fs');
var socketio = require('socket.io');
var request = require('request');
var errorHandler = require('express-error-handler');
var async = require('async');

// 2. 데이터베이스 연결
var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'Company'
});

// 3. 웹 서버 생성
var app = express();

// 4. 미들웨어 설정
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: 'uploads/'
}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// 5. 라우터 설정
app.get('/', function (request, response) {
    // 변수 선언
    var page = request.param('page');
    if (page == null) {
        page = 1;
    }

    // 데이터베이스 요청
    client.query('SELECT COUNT(*) AS count FROM products', function (error, data) {