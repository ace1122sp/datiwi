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

const init = () => {
  Activity.findOne({}, (err, result) => {
    if(err) {
      console.error(err);
    } else if (result === null) {
      const activity = new Activity({ name: 'add your first activity', id: '0' });
      activity.save((err, result) => {
        if(err) {
          console.error(err);
        } else {
          console.log('created default activity: ', result);
        }
      });
    }
  });
}

init();
module.exports = Activity;
