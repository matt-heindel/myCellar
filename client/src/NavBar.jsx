import React from 'react';
import myCellar from './assets/myCellar.svg'

let NavBar = () => (
  <div className='nav-bar'>
    <img id='nav-logo' src={myCellar} alt='wine logo'></img>
    <div className='nav-container'>
      <p className='nav-options'> myWines </p>
      <p className='nav-options'> Account </p>
      <p className='nav-options'> Docs </p>
      <p className='nav-options'> About Us </p>
      <p className='nav-options'> Contact </p>
    </div>
  </div>
);

export default NavBar;
