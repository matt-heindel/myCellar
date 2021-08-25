import React from 'react';
import myCellar from './assets/myCellar.svg'

let NavBar = () => (
  <div className='nav-bar'>
    <img id='nav-logo' src={myCellar} alt='wine logo'></img>
  </div>
);

export default NavBar;
