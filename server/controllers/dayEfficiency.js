const express = require('express');
const mongoose = require('mongoose');
const Pointers = require('./../models/pointers');

module.exports = {
  update(req, res) {
    if(req.body.eff !== undefined) {
      const eff = parseFloat(req.body.eff);
      Pointers.findOneAndUpdate({}, { $push: { dayEfficiency: eff }}, (err, result) => {
        if(err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log(`efficiency updated: ${[...result.dayEfficiency, eff]}`);
          res.sendStatus(200);
        }
      })
    } else {
      console.log('bad request');
      res.sendStatus(400);
    }
  },
  clear(req, res) {
    Pointers.findOneAndUpdate({}, { dayEfficiency: []}, (err, result) => {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log('day efficiency reset');
        res.sendStatus(200);
      }
    });
  }
};
