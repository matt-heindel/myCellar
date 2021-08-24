const sortWines = require('./functions.js').sortWines;
const searchWines = require('./functions.js').searchWines;

describe('Sort Wines', () => {
  const wines = [
    {
      "id": 1,
      "varietal": "Merlot",
      "region": "Napa Valley",
      "fanciful": "",
      "color": "red",
      "brand": "Stag's Leap Wine Cellars",
      "vintage": 2014,
      "img": "https://res.cloudinary.com/my-cellar/image/upload/v1629831425/IMG_0146_by5zbw.jpg",
      "quantity": 1
    },
    {
      "id": 2,
      "varietal": "Sauvignon Blanc",
      "region": "Napa Valley",
      "fanciful": "",
      "color": "white",
      "brand": "Beringer",
      "vintage": 2019,
      "img": "https://res.cloudinary.com/my-cellar/image/upload/v1629832058/IMG_0160_x2ugnh.jpg",
      "quantity": 1
    }
  ]

  it('should be a function', () => {
    expect(typeof sortWines).toBe('function');
  });

  it('should return an array of object', () => {
    const sorted = sortWines(wines, 'vintage');
    expect(Array.isArray(sorted)).toBe(true);
  });

  it('should rank newest vintages first', () => {
    const sorted = sortWines(wines, 'vintage');
    expect(sorted[0].vintage).toBe(2019);
    expect(sorted[1].vintage).toBe(2014);
  });

});

describe('Search Wines', () => {
  const wines = [
    {
      "id": 1,
      "varietal": "Merlot",
      "region": "Napa Valley",
      "fanciful": "",
      "color": "red",
      "brand": "Stag's Leap Wine Cellars",
      "vintage": 2014,
      "img": "https://res.cloudinary.com/my-cellar/image/upload/v1629831425/IMG_0146_by5zbw.jpg",
      "quantity": 1
    },
    {
      "id": 2,
      "varietal": "Sauvignon Blanc",
      "region": "Napa Valley",
      "fanciful": "",
      "color": "white",
      "brand": "Beringer",
      "vintage": 2019,
      "img": "https://res.cloudinary.com/my-cellar/image/upload/v1629832058/IMG_0160_x2ugnh.jpg",
      "quantity": 1
    }
  ]

  it('should be a function', () => {
    expect(typeof searchWines).toBe('function');
  });

  it('should return an array of object', () => {
    const sorted = searchWines(wines, 'vintage');
    expect(Array.isArray(sorted)).toBe(true);
  });

  it('should return only matching wines', () => {
    const sorted = searchWines(wines, 'Sauv');
    expect(sorted[0].vintage).toBe(2019);
    expect(sorted.length).toBe(1);
  });

});
