import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Ads from './Ads';
import Locate from './Locate';
import More from './More';

let WineList = (props) => {

  return (
    <div id="body-container">
      <div id="list-container">
        {props.wines.map(wine => (
          <WineListItem
            wine={wine}
            key={wine.id}
          />
        ))}
      </div>
      <div id="side-bar-container">
        <Ads />
      </div>
    </div>
  )
}

let WineListItem = ({ wine }) => {
  let [{brand, vintage, region, varietal, fanciful, quantity}] = [wine];
  let description = `${brand} ${vintage} ${region} ${fanciful} ${varietal}`;

  return (
    <div className="li-container">
      <img
        className="img"
        src={wine.img}
        alt={description}
      ></img>
      <div className="description-container">
        <p className="description brand">{brand}</p>
        <p className="description">{varietal}</p>
        <p className="description">{vintage}</p>
        <p className="description">{region}</p>
        <p className="description">{fanciful}</p>
      </div>
      <div className="buttons-container">
        <More
          wine={wine}
          description={description}
        />
        <Locate
          rack={wine.rack}
          positions={wine.positions}
          description={description}
          quantity={wine.quantity}
        />
        <p className="description">qty: {quantity}</p>
      </div>
    </div>
  )
}

export default WineList;
