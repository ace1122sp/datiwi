const express = require('express');
const mongoose = require('mongoose');
const Pointers = require('./../models/pointers');

module.exports = {
  countUpActivity(req, res) {
    Pointers.findOneAndUpdate({}, { $inc: { idCounterActivities: 1 } }, (err, result) => {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log(`activity counter updated: ${result.idCounterActivities + 1}`);
        res.sendStatus(200);
      }
    });
  },
  countUpTimeUnit(req, res) {
    Pointers.findOneAndUpdate({}, { $inc: { idCounterTimeUnits: 1 } }, (err, result) => {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log(`time unit counter updated: ${result.idCounterTimeUnits + 1}`);
        res.sendStatus(200);
      }
    });
  }
};
