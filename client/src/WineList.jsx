import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Locate from './Locate';
import More from './More';

let WineList = (props) => {

  return (
    <>
      {props.wines.map(wine => (
        <div key={wine.id}>
          <WineListItem wine={wine} />
        </div>
      ))}
    </>
  )
}

let WineListItem = (props) => {
  let [{brand, vintage, region, varietal, fanciful, quantity}] = [props.wine];
  let description = `${brand} ${vintage} ${region} ${fanciful} ${varietal}`;

  return (
    <div className="li-container">
      <img
        className="img"
        src={props.wine.img}
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
          wine={props.wine}
          description={description}
        />
        <Locate
          rack={props.wine.rack}
          positions={props.wine.positions}
          description={description}
          quantity={props.wine.quantity}
        />
        <p className="description">qty: {quantity}</p>
      </div>
    </div>
  )
}

export default WineList;
