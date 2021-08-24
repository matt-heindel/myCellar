const sortWines = require('./functions.js').sortWines;

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

  it('should return something', () => {
    expect(sortWines([{}])).toBeDefined();
  });

  it('should return an array of object', () => {
    const sorted = sortWines(wines);
    expect(Array.isArray(sorted)).toBe(true);
  });
});
