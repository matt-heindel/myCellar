import React from 'react';
import ad01 from '../assets/ad01.svg';
import ad02 from '../assets/ad02.svg';
import ad03 from '../assets/ad03.svg';

const Ads = () => {
  return (
    <>
      <p>Paid Advertisements</p>
      <p>Not associated with myCellar</p>
      <img className='ad' src={ad03} alt='advertisement'></img>
      <img className='ad' src={ad02} alt='advertisement'></img>
      <img className='ad' src={ad01} alt='advertisement'></img>
    </>
  )
}

export default Ads;
