import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import Controls from './components/Controls';
import WineList from './components/WineList';
import { sortWines, searchWines } from '../helper/functions';

let App = () => {
  const sortOptions = ['drinkability', 'new'];

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
      <Controls
        handleSearch={handleSearch}
        handleSort={handleSort}
        sortOptions={sortOptions}
      />
      <WineList
        wines={wines}
      />
    </>
  )
}

export default App;
