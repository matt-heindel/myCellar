import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

let wines = [
  {
    id: 1,
    varietal: 'Merlot',
    region: 'Napa Valley',
    fanciful: '',
    color: 'red',
    brand: 'Stag\'s Leap Wine Cellars',
    vintage: 2014,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629831425/IMG_0146_by5zbw.jpg',
    quantity: 1,
  },
  {
    id: 2,
    varietal: 'Sauvignon Blanc',
    region: 'Napa Valley',
    fanciful: '',
    color: 'white',
    brand: 'Beringer',
    vintage: 2019,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629832058/IMG_0160_x2ugnh.jpg',
    quantity: 1,
  },
  {
    id: 3,
    varietal: 'Red Wine Blend',
    region: 'Napa Valley',
    fanciful: '',
    color: 'red',
    brand: 'Chateau St. Jean',
    vintage: 2018,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629832404/IMG_0148_vaxctd.jpg',
    quantity: 10,
  },
  {
    id: 4,
    varietal: 'Cabernet Sauvignon',
    region: 'Napa Valley',
    fanciful: '',
    color: 'red',
    brand: 'Beringer',
    vintage: 2018,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629832510/IMG_0157_zqbdxe.jpg',
    quantity: 6,
  },
]

ReactDOM.render(<App wines={wines} />, document.getElementById('app'));
