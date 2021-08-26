const express = require('express');
const db = require('../database/index');
const morgan = require('morgan');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use(express.json());

app.get('/wines', (req, res) => {
  db.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/wines', (req, res) => {
  db.save(req.body, () => {
    res.sendStatus(201);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
