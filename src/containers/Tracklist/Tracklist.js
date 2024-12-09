import React from "react";
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import SongsList from "../../components/SongsList/SongsList";

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
  return <ul>{eachSong(playlist)}</ul>;
};

export default Tracklist;