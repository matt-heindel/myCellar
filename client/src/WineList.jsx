import React, { useState } from 'react';

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
  let [{brand, vintage, region, varietal, fanciful}] = [props.wine];
  let description = `${brand} ${vintage} ${region} ${fanciful} ${varietal}`;

  return (
    <div className="li-container">
      <img
        className="img"
        src={props.wine.img}
        alt={description}
      ></img>
      <p className="description">{description}</p>
    </div>
  )
}

export default WineList;
