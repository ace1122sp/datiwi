const express = require('express');
const activePlan = require('./../controllers/activePlan');
const activities = require('./../controllers/activities');
const dayEfficiency = require('./../controllers/dayEfficiency');
const counters = require('./../controllers/counters');

const updates = express.Router();

updates.post('/active-plan', activePlan.update);
updates.post('/activity', activities.updateActivity);
updates.delete('/activity', activities.deleteActivity);
updates.put('/day-efficiency', dayEfficiency.update);
updates.put('/id-counter-activities', counters.countUpActivity);
updates.put('/id-counter-timeunits', counters.countUpTimeUnit);

module.exports = updates;
