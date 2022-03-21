'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb+srv://nodeDemo1:OsDPQOgZgw2tqDYh@nodedemo1.duqew.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false,
      },
    },
  },
};
