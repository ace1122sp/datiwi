const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivityUnitSchema = new Schema({
  startingHours: {
    type: Number,
    required: true
  },
  startingMinutes: {
    type: Number,
    required: true
  },
  endingHours: {
    type: Number,
    required: true
  },
  endingMinutes: {
    type: Number,
    required: true
  }
  id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const ActivityUnit = mongoose.model('ActivityUnit', ActivityUnitSchema);

module.exports = ActivityUnit;
