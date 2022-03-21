'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'rendezvous-secret',
  },

  // MongoDB connection options
  mongo: {
    // uri: 'mongodb+srv://ashwith:FpEyw90IaDzVPHDp@cluster0.1dvgq.mongodb.net/gardening?retryWrites=true&w=majority',

    uri: 'mongodb://ashwith:FpEyw90IaDzVPHDp@cluster0-shard-00-00.1dvgq.mongodb.net:27017,cluster0-shard-00-01.1dvgq.mongodb.net:27017,cluster0-shard-00-02.1dvgq.mongodb.net:27017/gardening?ssl=true&replicaSet=atlas-11gmi4-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: {
      db: {
        safe: true,
      },
    },
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || 'id',
    clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback',
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback',
  },

  google: {
    clientID: process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/google/callback',
  },
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require('./' + (process.env.NODE_ENV || 'development') + '.js') || {}
);
