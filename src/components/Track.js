import React from "react";
import AddButton from "./AddButton";
import './css/Track.css'


function Track({ results, add }) {
  const eachSong = array => {
    return array.map((each) => (
        <li key={each['id']} className="songContainer">
          <div className="eachSong">
            <h3 className="h3">{`${each['name']}`}</h3>
            <h4 className="h4">{`${each['artist']} | ${each['album']}`}</h4>
          </div>
          <AddButton />
        </li>
      )
    );
  };
  return <ul>{eachSong(results )}</ul>;
}

export default Track;