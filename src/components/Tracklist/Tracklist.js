import React from "react";
import RemoveButton from "../RemoveButton/RemoveButton";
import SongsList from "../../components/SongsList/SongsList";
import './Tracklist.css'

function Tracklist({ playlist, setPlaylist }) {
  const eachSong = array => {
    return array.map((each) => (
      <li key={each['id']} className="songContainer">
        <SongsList each={each} />
        <RemoveButton
          array={array}
          id={each['id']}
          set={setPlaylist}/>
      </li>
      )
    );
  };
  return (
    <div className="playlist-song-list">
      <ul>{eachSong(playlist)}</ul>
    </div>
  
  );
};

export default Tracklist;