const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./../models/activity');

module.exports = {
  //handling post request
  createActivity(req, res) {
    if(req.body.name && req.body.id) {
      const name = req.body.name.toString();
      const id = req.body.id.toString();
      const activity = new Activity({ name, id });

      activity.save((err, act) => {
        if(err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log('created activity: ', act);
          res.sendStatus(200);
        }
      });
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  },
  //handling put request
  updateActivity(req, res) {
    if(req.body.id && req.body.minutes) {
      const id = req.body.id.toString();
      const minutes = parseInt(req.body.minutes);

      Activity.findOne({ id }, (err, activity) => {
        if(err) {
          console.error(err);
          res.send(400);
        } else {
          activity.update({ minutes }, (err, result) => {
            if(err) {
              console.error(err);
              res.sendStatus(500);
            } else {
              console.log('updated activity: ', result);
              res.sendStatus(200);
            }
          });
        }
      });
    } else {
      console.log('bad request');
      res.send(400);
    }
  },
  //handling delete request
  deleteActivity(req, res) {
    const id = req.body.id;
    Activity.remove({ id }, (err, result) => {
      if(err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        console.log(`Activity ${id} has been deleted`);
        res.sendStatus(200);
      }
    })
  }
}
