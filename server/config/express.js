/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var session = require('express-session');
var cors  = require('cors');
var httpProxy = require('http-proxy');
var config = require('./environment');

module.exports = function(app) {
  var env = app.get('env');

  app.use(cors());

  app.set('views', config.root + '/server/views');
  app.set('view engine', 'ejs');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(session({
    secret: 'keyboard cat'
  }));

  if ('production' === env) {
    app.use(express.static(path.join(config.root, 'public')));
    app.use(morgan('prod'));
  }

  if ('development' === env || 'test' === env) {
    var proxy = httpProxy.createProxyServer();
    app.all('/assets/*', function (req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:9001'
      });
    });

    app.use(morgan('dev'));
    app.disable('etag');
    app.use(errorHandler()); // Error handler - has to be last
    app.set('trust proxy', true);
  }

};
