import React from 'react';

let Controls = ({ handleSearch, handleSort, sortOptions }) => (
  <div id="form-container">
    <h2 id="list-heading">myWines</h2>
      <form>
        <label htmlFor="search-wine">Search: </label>
        <input type="text" id="search-wine" onChange={handleSearch}/>
      </form>
      <form>
        <label>Sort By: </label>
        <select name="sortBy" id="sortBy" onChange={handleSort}>
          {sortOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
            ))}
        </select>
      </form>
  </div>
);

export default Controls;
