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

const init = () => {
  Pointers.findOne({}, (err, result) => {
    if(err) {
      console.error(err);
    } else if (result === null) {
      const pointers = new Pointers();
      pointers.save((err, result) => {
        if(err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });
    }
  });
}
init();

module.exports = Pointers;
