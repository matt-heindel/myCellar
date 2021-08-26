import React from 'react';
import Post from './Post';

let Controls = ({ handleSearch, handleSort, handlePost, sortOptions }) => (
  <div id="form-container">
    <div id="control-container">
      <h2 id="list-heading">myWines</h2>
      <form className="control">
        <label htmlFor="search-wine">Search: </label>
        <input type="text" id="search-wine" onChange={handleSearch}/>
      </form>
      <form className="control">
        <label>Sort By: </label>
        <select name="sortBy" id="sortBy" onChange={handleSort}>
          {sortOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
            ))}
        </select>
      </form>
    </div>
      <Post
        handlePost={handlePost}
      />
  </div>
);

export default Controls;
