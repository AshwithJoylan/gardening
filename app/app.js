/**
 * Main application file
 */

'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const config = require('./config/environment');
const http = require('http');

console.log('config.mongo.uri', config.mongo.uri);
// Connect to MongoDB
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
// if (config.seedDB) {
//   require('./config/seed');
// }

// Setup server
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client',
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(8080, config.ip, function () {
    console.log(
      'Express server listening on %d, in %s mode',
      8080,
      app.get('env')
    );
  });
}

setImmediate(startServer);

// Expose app
// exports = module.exports = app;
