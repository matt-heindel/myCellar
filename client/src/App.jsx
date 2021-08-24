import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import WineList from './WineList';

let App = (props) => {
  return (
    <>
      <NavBar />
      <WineList wines={props.wines}/>
    </>
  )
}

export default App;
