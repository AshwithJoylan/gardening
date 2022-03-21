'use strict';

const mongoose = require('mongoose');
var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  rdv: { type: mongoose.Schema.Types.ObjectId, ref: 'Rdv', required: false },
});

module.exports = mongoose.model('Thing', ThingSchema);
