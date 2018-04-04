const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeUnitSchema = new Schema({
  hours: {
    type: Number,
    min: 0,
    max: 24,
    required: true
  },
  minutes: {
    type: Number,
    min: 0,
    max: 59,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const TimeUnit = mongoose.model('TimeUnit', TimeUnitSchema);

const init = () => {
  TimeUnit.findOne({}, (err, result) => {
    if(err) {
      console.error(err);
    } else if (result === null) {
      const timeUnit = new TimeUnit({ hours: 1, minutes: 0, id: '0' });
      timeUnit.save((err, result) => {
        if(err) {
          console.error(err);
        } else {
          console.log('created default time unit: ', result);
        }
      });
    }
  });
}

init();

module.exports = TimeUnit;
