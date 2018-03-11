const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeUnitSchema = new Schema({
  hours: {
    type: Number,
    min: 0,
    max: 24
  },
  minutes: {
    type: Number,
    min: 0,
    max: 59
  },
  id: {
    type: String,
    required: true
  }
});

const TimeUnit = mongoose.model('TimeUnit', TimeUnitSchema);

module.exports = TimeUnit;
