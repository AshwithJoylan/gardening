'use strict';

const mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
  coords: {
    latitude: Number,
    longitude: Number,
  },
});

module.exports = mongoose.model('Person', PersonSchema);
