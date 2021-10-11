var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var compare = require('./server/utils/compare');

var config = require('./server/config/config');
var log4js = require('./server/config/log4js-config').log4js;
var logger = require('./server/config/log4js-config').logger;
var app = express();
/**
 * 开发环境所需
 */
if(true /*process.env.NODE_ENV=== 'development'*/){
  var webpack=require('webpack');
  var webpackDevMiddleware=require('webpack-dev-middleware');
  var webpackHotMiddleware=require('webpack-hot-middleware');
  var webpackConfig=require('./client/build/webpack.dev.conf.js');
  var compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler))

}

// view engine setup
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view cache', false);
app.use(log4js.connectLogger(logger, {
  level: 'info',
  format: ':method :url :status'
}));
app.use(favicon(path.join(__dirname, 'server/public', 'static/images/favicon.ico')));
app.use(bodyParser.json({limit:"10mb"}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true,parameterLimit:50000}));
app.use(cookieParser());
app.use('/leading-end',express.static(path.join(__dirname, 'server/public')));
var RedisStore = require('connect-redis')(session);
var client = require('./server/services/redis');
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.session_secret,
  name: config.session_secret,
  store: new RedisStore({
    client: client,
    ttl: 36000
  }),
  cookie: {
    httpOnly: true,
    path: '/',
    maxAge: 3600000 * 24,
    secure: false
  }
}));

//init routes
app.use('/leading-end', require('./server/routes/index'));
app.use('/api', require("./server/routes/api"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const server =app.listen(process.env.PORT || config.port)

console.log('Server is listening on '+server.address().port)
module.exports = app;
