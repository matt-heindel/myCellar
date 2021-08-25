module.exports.sortWines = (wines, sortBy) => {
  let sortFn
  if (sortBy === 'new') {
    sortFn = (a, b) => {
      return a.vintage < b.vintage ? 1 : -1;
    }
  } else if (sortBy === 'drinkability') {
    sortFn = (a, b) => {
      return a.vintage > b.vintage ? 1 : -1;
    }
  }

  return wines.sort(sortFn);
}

module.exports.searchWines = (wines, searchText) => {
  searchText = searchText.toLowerCase();
  const searchFn = (wine) => {
    toSearch = JSON.stringify(wine).toLowerCase();
    return toSearch.includes(searchText);
  }
  return searchText = '' ? wines : wines.filter(searchFn);
}
