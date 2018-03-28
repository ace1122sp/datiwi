const express = require('express');
const mongoose = require('mongoose');
const ActivityUnit = require('./../models/activityUnit');
const parallel = require('async/parallel');

module.exports = {
  addPlan(req, res) {
      if(req.body.startingHours && req.body.startingMinutes &&
         req.body.endingHours && req.body.endingMinutes && req.body.id) {
           const queries = req.body.plan.map(activityUnit => saveActivityUnit(activityUnit));
           const startTime = Date.now();
           parallel(queries, (err, results) => {
             if(err) {
               console.error(err);
               res.sendStatus(500);
             } else {
               const endTime = Date.now();
               console.log(`execution time: ${endTime - startTime}`);
               console.log('all queries executed');
               res.sendStatus(200);
             }
         });
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  },
  modifyActivity(req, res) {
    if(req.body.id && req.body.status) {
      const id = req.body.id.toString();
      const status = req.body.status.toString();
      ActivityUnit.findOneAndUpdate({ id }, { status }, (err, result) => {
        if(err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log(`activity unit ${id} status changed to ${status}`);
          res.sendStatus(200);
        }
      });
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  },
  clearPlan(req, res) {
    ActivityUnit.deleteMany({}, err => {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log('plan cleared');
        res.sendStatus(200);
      }
    });
  }
};



async function saveActivityUnit(activityUnit) {
  let { startingHours, startingMinutes, endingHours, endingMinutes, id } = activityUnit
  startingHours = parseInt(startingHours);
  startingMinutes = parseInt(startingMinutes);
  endingHours = parseInt(endingHours);
  endingMinutes = parseInt(endingMinutes);
  id = id.toString();
  const a_unit_doc = new ActivityUnit({ startingHours, startingMinutes, endingHours, endingMinutes, id });
  a_unit_doc.save((err, result) => {
    if(err) {
      console.error(err);
    }
  });
}





// TODO: see where you need to use parseFloat() in other controllers
