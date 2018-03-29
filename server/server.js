const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');
const mongoose = require('mongoose');
const helmet = require('helmet');

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

// serving requests
app.use(helmet());
app.use('/', jsonParser);
app.use('/', urlencodedParser, router);

app.use(express.static(path.resolve('../dist')));

app.all('*', (req, res) => {
  res.status(404);
  res.send('Page not found.');
});


app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}...`);
});
