const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    min:1,
    trim: true
  },
  minutes: {
    type: Number,
    min: 0,
    default: 0
  },
  id: {
    type: String,
    required: true,
    trim: true
  }
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
