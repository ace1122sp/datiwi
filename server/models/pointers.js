const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointersSchema = new Schema({
  dayEfficiency: {
    type: [Number]
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
      // const pointers = new Pointers();
      const pointers = new Pointers({dayEfficiency: [2, 2]})
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

const removeOldEfficiencies = () => {
  Pointers.findOne({}, (err, result) => {
    if(err) {
      console.error(err);
    } else {
      const efficiencyArr = result.dayEfficiency;
      const size = efficiencyArr.length;
      if(size > 5) {
        const latestEfficiencies = efficiencyArr.slice(size - 5);
        Pointers.findOneAndUpdate({}, {dayEfficiency: latestEfficiencies}, (err, result) => {
          if(err) {
            console.error(`error while removing old efficiencies:`, err);
          } else {
            console.log('removed old efficiencies');
          }
        });
      }
    }
  })
}

init();
removeOldEfficiencies();

module.exports = Pointers;
