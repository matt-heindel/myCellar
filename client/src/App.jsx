import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import WineList from './WineList';
import { sortWines, searchWines } from '../helper/functions';

let App = () => {
  const [allWines, setAllWines] = useState([]);
  const [wines, setWines] = useState(allWines);

  const sortOptions = ['vintage', 'drinkability'];
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [searchText, setSearchText] = useState('');

  const handleSort = (event) => {
    setSortBy(event.target.value);
    setWines(sortWines(allWines, sortBy));
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setWines(searchWines(allWines, event.target.value));
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
      <h2 id="wine-list">Wine List</h2>
      <form>
        <label>Search: </label>
        <input type="text" name="search" onChange={handleSearch}/>
      </form>
      <form>
        <label>Sort By:</label>
        <select name="sortBy" id="sortBy" onChange={handleSort}>
          {sortOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
      </form>
      <WineList wines={wines} />
    </>
  )
}

export default App;
