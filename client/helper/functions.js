module.exports.sortWines = (wines, sortBy) => {
  let sortFn
  if (sortBy === 'vintage') {
    sortFn = (a, b) => {
      return a.vintage < b.vintage ? 1 : -1;
    }
  } else if (sortBy === 'drinkability') {
    sortFn = (a, b) => {
      return a.vintage > b.vintage ? 1 : -1;
    }
  }

  wines.sort(sortFn);
  return wines;
}

