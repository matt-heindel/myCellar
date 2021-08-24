import React from 'react';

let WineList = () => {
  return (
    <>
      <h2 id="wine-list">Wine List</h2>
      <ul>
        <li key="1">
          <WineListItem />
        </li>
      </ul>
    </>
  )
}

let WineListItem = () => {
  return (
    <>
      <img
        className="img"
        src="https://res.cloudinary.com/my-cellar/image/upload/v1629831425/IMG_0146_by5zbw.jpg"
        alt="wine 1"
      ></img>
      <p>wine 1</p>
    </>
  )
}

export default WineList;
