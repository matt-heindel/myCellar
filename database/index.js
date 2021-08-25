const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wine');

const wineSchema = mongoose.Schema({
  id: Number,
  varietal: String,
  region: String,
  fanciful: String,
  color: String,
  brand: String,
  vintage: Number,
  img: String,
  quantity: Number,
  rack: String,
  positions: String
});

const Wine = mongoose.model('Wine', wineSchema);

const find = (cb) => {
  Wine.find({})
    .then(res => {
      cb(null, res);
    })
    .catch(err => console.log(err));
}

const save = (wine, cb) => {
  const newWine = new Wine(wine);
  newWine.save()
    .then(() => cb())
    .catch(err => console.log(err));
}

module.exports = {
  find,
  save
}
