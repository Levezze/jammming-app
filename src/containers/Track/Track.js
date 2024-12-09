import React from "react";
import AddButton from "../AddButton/AddButton";
import SongsList from "../../components/SongsList/SongsList";
import './Track.css'

function Track({ results, set, songs }) {
  const eachSong = array => {
    if (Object.keys(array).length > 0) {
      const { tracks: {items} } = array;
      return items.map((each) => (
        <li key={each['id']} className="songContainer">
          <SongsList each={each} />
          <AddButton
            each={each}
            set={set}
            songs={songs} />
        </li>
        )
      );
    };
  };
  return <ul>{eachSong(results)}</ul>;
}

export default Track;