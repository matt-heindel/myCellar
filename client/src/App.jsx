import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import WineList from './WineList';

let App = () => {
  const [wines, setWines] = useState([]);

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
      <WineList wines={wines}/>
    </>
  )
}

export default App;
