import React from "react";
import './resultDisplay.css';

export const resultDisplay = (array) => {
  const eachSong = arr => {
    arr.map(each => {
      (
        <li>
          <div className='eachSong'>

          </div>
        </li>
      );
    })
  }

  return eachSong(array);
}