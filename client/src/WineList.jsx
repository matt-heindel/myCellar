import React, { useState } from 'react';

let WineList = (props) => {

  return (
    <>
      <ul className="ul-container">
        {props.wines.map(wine => (
          <li key={wine.id}>
            <WineListItem wine={wine} />
          </li>
        ))}
      </ul>
    </>
  )
}

let WineListItem = (props) => {
  let [{brand, vintage, region, varietal, fanciful}] = [props.wine];
  let description = `${brand} ${vintage} ${region} ${fanciful} ${varietal}`;

  return (
    <div className="li-container">
      <img
        className="img"
        src={props.wine.img}
        alt="wine 1"
      ></img>
      <p>{description}</p>
    </div>
  )
}

export default WineList;
