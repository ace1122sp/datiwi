const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./../models/activity');
const ActivityUnit = require('./../models/activityUnit');
const TimeUnit = require('./../models/timeUnit');
const Pointers = require('./../models/pointers');
const parallel = require('async/parallel');
const initApp = require('./initApp');

const initState = (req, res) => {
    const queries = [getActivities, getPlan, getTimeUnits, getPointers];
    const startTime = Date.now();
    parallel(queries, (err, results) => {
      if(err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        const endTime = Date.now();
        console.log(`execution time: ${endTime - startTime}`);
        console.log('all queries executed');
        //da pozovem handler koji će da salje i app
        const html = initApp(results);
        res.send(html);
        res.end();
      }
    });
}

//get an array of all created activities
async function getActivities() {
  return await Activity.find({}, (err, results) => {
    if(err) {
      console.error(err);
    } else {
      return results;
    }
  });
}

//get an array of activity units in active plan
async function getPlan() {
  return await ActivityUnit.find({}, (err, results) => {
    if(err) {
      console.error(err);
    } else {
      return results;
    }
  });
}

//get an array of all created time units
async function getTimeUnits() {
  return await TimeUnit.find({}, (err, results) => {
    if(err) {
      console.error(err);
    } else {
      return results;
    }
  });
}

//get a pointer object
async function getPointers() {
  return await Pointers.findOne({}, (err, results) => {
    if(err) {
      console.error(err);
    } else {
      return results;
    }
  });
}



module.exports = initState;
