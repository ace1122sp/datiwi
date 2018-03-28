const express = require('express');
const activePlan = require('./../controllers/activePlan');
const activities = require('./../controllers/activities');
const dayEfficiency = require('./../controllers/dayEfficiency');
const counters = require('./../controllers/counters');
const timeUnits = require('./../controllers/timeUnits');

const updates = express.Router();

// updates.put('/active-plan', activePlan.update);

updates.route('/activity')
  .post(activities.createActivity)
  .put(activities.updateActivity)
  .delete(activities.deleteActivity);

updates.route('/day-efficiency')
  .put(dayEfficiency.update)
  .delete(dayEfficiency.clear); 

updates.put('/id-counter-activities', counters.countUpActivity);

updates.put('/id-counter-timeunits', counters.countUpTimeUnit);

updates.route('/time-unit')
  .post(timeUnits.createTimeUnit)
  .delete(timeUnits.deleteTimeUnit);

module.exports = updates;
