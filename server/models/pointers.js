const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointersSchema = new Schema({
  dayEfficiency: {
    type: Number,
    min: 0,
    max: 100,
  },
  idCounterActivities: {
    type: Number,
    min: 0,
    default: 0
  },
  idCounterTimeUnits: {
    type: Number,
    min: 0,
    default: 0
  },
  timePoint: {
    type: String,
    min: 5,
    max: 5
  }
});

const Pointers = mongoose.model('Pointers', PointersSchema, 'pointers');

module.exports = Pointers;
