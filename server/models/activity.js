const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    min:1
  },
  hours: {
    type: Number,
    required: true
  },
  minutes: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
