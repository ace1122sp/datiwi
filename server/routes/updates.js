const express = require('express');
const activePlan = require('./../controllers/activePlan');
const activities = require('./../controllers/activities');
const dayEfficiency = require('./../controllers/dayEfficiency');
const counters = require('./../controllers/counters');

const updates = express.Router();

updates.put('/active-plan', activePlan.update);
updates.post('/activity', activities.createActivity);
updates.put('/activity', activities.updateActivity);
updates.delete('/activity', activities.deleteActivity);
updates.put('/day-efficiency', dayEfficiency.update);
updates.delete('/day-efficiency', dayEfficiency.clear); //napisi
updates.put('/id-counter-activities', counters.countUpActivity);
updates.put('/id-counter-timeunits', counters.countUpTimeUnit);
updates.delete('/time-unit', ???); //napisi
updates.post('/time-unit', ???); //napisi
updates.put('/time-point', ???); //napisi

module.exports = updates;
