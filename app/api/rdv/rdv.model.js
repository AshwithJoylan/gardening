'use strict';

const mongoose = require('mongoose');

var RdvSchema = new mongoose.Schema({
  coords: {
    latitude: Number,
    longitude: Number,
  },
  address: String,
  thing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thing',
  },
});

module.exports = mongoose.model('Rdv', RdvSchema);
