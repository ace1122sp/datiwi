const express = require('express');

const initState = (req, res) => {
  res.json(); //api
  res.end();
}

module.exports = initState;
