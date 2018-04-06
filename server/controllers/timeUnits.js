const express = require('express');
const mongoose = require('mongoose');
const TimeUnit = require('./../models/timeUnit');

module.exports = {
  //handling post requests
  createTimeUnit(req, res) {
    if(req.body.hours !== undefined && req.body.minutes !== undefined && req.body.id !== undefined) {
      const hours = parseInt(req.body.hours);
      const minutes = parseInt(req.body.minutes);
      const id = req.body.id.toString();
      const timeUnit = new TimeUnit({ hours, minutes, id});
      timeUnit.save((err, unit) => {
        if(err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log('time unit created: ', unit);
          res.sendStatus(200);
        }
      });
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  },
  //handling delete requests
  deleteTimeUnit(req, res) {
    if(req.body.id !== undefined) {
      const id = req.body.id.toString();
      TimeUnit.remove({ id }, (err, result) => {
        if(err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log(`Time unit ${id} has been deleted.`);
          res.sendStatus(200);
        }
      });
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  }
}
