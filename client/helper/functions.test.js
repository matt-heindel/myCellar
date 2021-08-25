const sortWines = require('./functions.js').sortWines;
const searchWines = require('./functions.js').searchWines;
const getLocationGrid = require('./functions.js').getLocationGrid;

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
    const sorted = sortWines(wines, 'new');
    expect(Array.isArray(sorted)).toBe(true);
  });

  it('should rank newest vintages first', () => {
    const sorted = sortWines(wines, 'new');
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
    const sorted = searchWines(wines, 'new');
    expect(Array.isArray(sorted)).toBe(true);
  });

  it('should return only matching wines', () => {
    const sorted = searchWines(wines, 'sauv');
    expect(sorted[0].vintage).toBe(2019);
    expect(sorted.length).toBe(1);
  });

});

describe('Get Location Grid', () => {
  it('should be a function', () => {
    expect(typeof getLocationGrid).toBe('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getLocationGrid('A1'))).toBe(true);
  });

  it('should locate A1', () => {
    const expected = [
      1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ];
    expect(getLocationGrid('A1')).toEqual(expected);
  });

  it('should locate C2', () => {
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ];
    expect(getLocationGrid('C2')).toEqual(expected);
  });

  it('should locate B4', () => {
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ];
    expect(getLocationGrid('B4')).toEqual(expected);
  });

  it('should locate H8', () => {
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1
    ];
    expect(getLocationGrid('H8')).toEqual(expected);
  });

  it('should locate G7', () => {
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ];
    expect(getLocationGrid('G7')).toEqual(expected);
  });

});
