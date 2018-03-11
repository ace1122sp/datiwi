const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');
const mongoose = require('mongoose');

const PORT = 9336;
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

const app = express();

//set up mongodb
const db_url = 'mongodb://localhost:27017/datiwi';

mongoose.Promise = global.Promise;
mongoose.connect(db_url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to database');
});

//serving requests
app.use('/', jsonParser);
app.use('/', urlencodedParser, router);


app.get('', (req, res) => {
  res.sendFile(path.resolve('../dist/index.html'));
  res.end();
});

app.use(express.static(path.resolve('../dist')));

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}...`);
});
