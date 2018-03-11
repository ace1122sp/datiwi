const express = require('express');
const updates = require('./updates');
const initState = require('./../controllers/initState');

const router = express.Router();

router.get('/api', initState);

router.use('/api', updates);

module.exports = router;
