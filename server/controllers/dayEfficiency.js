const express = require('express');
const mongoose = require('mongoose');
const Pointers = require('./../models/pointers');

const update = (req, res) => {

}

module.exports = {
  update(req, res) {
    const eff = parseInt(req.body.eff);
    Pointers.findOneAndUpdate({}, { $push: { dayEfficiency: eff }}, (err, result) => {
      if(err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        console.log(`efficiency updated: ${[...result.dayEfficiency, eff]}`);
        res.sendStatus(200);
      }
    })
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
    })
  }
};
