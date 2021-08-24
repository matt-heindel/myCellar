import React, { useState } from 'react';

let WineList = (props) => {
  const sortOptions = ['recent vintage', 'drinkability'];
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  return (
    <>
      <h2 id="wine-list">Wine List</h2>
      <form>
        <label>Sort By:</label>
        <select name="sortBy" id="sortBy">
          {sortOptions.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </form>
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
