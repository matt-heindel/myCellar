import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import WineList from './WineList';

let App = () => {
  const [wines, setWines] = useState([]);

  const sortOptions = ['recent vintage', 'drinkability'];
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const handleSort = (event) => {
    setSortBy(event.target.value);
  }

  useEffect(() => {
    axios.get('/wines')
      .then(res => {
        setWines(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <h2 id="wine-list">Wine List</h2>
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
