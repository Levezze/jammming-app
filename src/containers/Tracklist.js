import React from "react";
import RemoveButton from "../components/RemoveButton";

function Tracklist({ playlist, setPlaylist }) {
  const eachSong = array => {
    return array.map((each) => (
      <li key={each['id']} className="songContainer">
        <div className="eachSong">
          <h4 className="h3">{`${each['name']}`}</h4>
          <h5 className="h4">{`${each['artist']} | ${each['album']}`}</h5>
        </div>
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