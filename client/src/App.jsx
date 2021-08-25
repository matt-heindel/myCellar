import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import WineList from './WineList';
import { sortWines, searchWines } from '../helper/functions';

let App = () => {
  const sortOptions = ['drinkability', 'new'];
  const filterOptions = ['red', 'white', 'sparkling'];

  const [allWines, setAllWines] = useState([]);
  const [wines, setWines] = useState(allWines);
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [searchText, setSearchText] = useState('');

  const handleSort = (event) => {
    setSortBy(event.target.value);
    setWines(sortWines(wines, event.target.value));
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    let searchedWines = searchWines(allWines, event.target.value);
    let sortedWines = sortWines(searchedWines, sortBy);
    setWines(sortedWines);
  }

  useEffect(() => {
    axios.get('/wines')
      .then(res => {
        setAllWines(sortWines(res.data, sortBy));
        setWines(sortWines(res.data, sortBy));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div id="form-container">
        <h2 id="list-heading">myWines</h2>
        <form>
          <label>Search: </label>
          <input type="text" name="search-wine" onChange={handleSearch}/>
        </form>
        <form>
          <label>Sort By: </label>
          <select name="sortBy" id="sortBy" onChange={handleSort}>
            {sortOptions.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </form>
      </div>
      <div id="list-container">
        <WineList wines={wines} />
      </div>
    </>
  )
}

export default App;
