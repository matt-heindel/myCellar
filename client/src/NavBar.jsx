import React from 'react';
import logo from './assets/wine.svg'

let NavBar = () => (
  <div className='nav-bar'>
    <img className='nav-logo' src={logo} alt='wine logo'></img>
    <header><h2 className='nav-title'>myCellar</h2></header>
  </div>
);

export default NavBar;
