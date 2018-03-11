const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 9336;

app.use(express.static(path.resolve('../dist')));

app.get('', (req, res) => {
  res.sendFile(path.resolve('../dist/index.html'));
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}...`);
});
