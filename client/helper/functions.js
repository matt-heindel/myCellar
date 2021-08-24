module.exports.sortWines = (wines, sortBy) => {
  let sortFn = (a, b) => {
    return a.vintage < b.vintage ? 1 : -1;
  }
  wines.sort(sortFn);
  return wines;
}

