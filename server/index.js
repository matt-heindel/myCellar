const express = require('express');
const wines = require('./wines.json');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/wines', (req, res) => {
  res.json(wines);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
