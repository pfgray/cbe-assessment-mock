/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Running cbl-activity-mock in: ' + process.env.NODE_ENV);

var express = require('express');
var path = require('path');
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);

require('./routes')(app);

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Start server
server.listen(9000, function () {
  console.log('Express server listening on %d, in %s mode', 9000, app.get('env'));
});

// Expose app
exports = module.exports = app;
