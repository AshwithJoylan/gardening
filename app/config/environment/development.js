'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://ashwith:FpEyw90IaDzVPHDp@cluster0.1dvgq.mongodb.net/gardening?retryWrites=true&w=majority',
    uri: 'mongodb://ashwith:FpEyw90IaDzVPHDp@cluster0-shard-00-00.1dvgq.mongodb.net:27017,cluster0-shard-00-01.1dvgq.mongodb.net:27017,cluster0-shard-00-02.1dvgq.mongodb.net:27017/gardening?ssl=true&replicaSet=atlas-11gmi4-shard-0&authSource=admin&retryWrites=true&w=majority',
  },

  // Seed database on startup
  seedDB: true,
};
