const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivityUnitSchema = new Schema({
  startingHours: {
    type: Number,
    required: true,
    min: 0,
    max: 23
  },
  startingMinutes: {
    type: Number,
    required: true,
    min: 0,
    max: 59
  },
  endingHours: {
    type: Number,
    required: true,
    min: 0,
    max: 23
  },
  endingMinutes: {
    type: Number,
    required: true,
    min: 0,
    max: 59
  },
  id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'waiting'
  },
  order: {
    type: Number,
    required: true
  }
});

const ActivityUnit = mongoose.model('ActivityUnit', ActivityUnitSchema);

module.exports = ActivityUnit;
