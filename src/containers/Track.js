import React from "react";
import AddButton from "./AddButton";
import './css/Track.css'


function Track({ results, set, songs }) {
  const eachSong = array => {
    return array.map((each) => (
      <li key={each['id']} className="songContainer">
        <div className="eachSong">
          <h4 className="h3">{`${each['name']}`}</h4>
          <h5 className="h4">{`${each['artist']} | ${each['album']}`}</h5>
        </div>
        <AddButton
          each={each}
          set={set}
          songs={songs} />
      </li>
      )
    );
  };
  return <ul>{eachSong(results)}</ul>;
}

export default Track;