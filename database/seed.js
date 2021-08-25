const db = require('../database/index');
const wines = require('./wines.json');
const axios = require('axios');

const seed = () => {
  for (wine of wines) {
    axios.post('http://localhost:3000/wines', wine);
  }
  console.log('seeded successfully');
  return;
}

seed();
