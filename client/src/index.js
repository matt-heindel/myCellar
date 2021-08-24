import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

let wines = [
  {
    id: 1,
    varietal: 'Merlot',
    color: 'red',
    brand: 'Stag\'s Leap Wine Cellars',
    vintage: 2014,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629831425/IMG_0146_by5zbw.jpg'
  },
  {
    id: 2,
    varietal: 'Sauvignon Blanc',
    color: 'white',
    brand: 'Beringer',
    vintage: 2019,
    img: 'https://res.cloudinary.com/my-cellar/image/upload/v1629832058/IMG_0160_x2ugnh.jpg'
  },
]

ReactDOM.render(<App wines={wines} />, document.getElementById('app'));
