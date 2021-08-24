import React from 'react';

let WineList = (props) => {
  return (
    <>
      <h2 id="wine-list">Wine List</h2>
      <ul>
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
  let [{brand, vintage, region, varietal}] = [props.wine];
  let description = `${brand} ${vintage} ${region} ${varietal}`;

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
