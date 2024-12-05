import React from "react";

function Tracklist({ playlist }) {
  const eachSong = array => {
    return array.map((each) => (
      <li key={each['id']} className="songContainer">
        <div className="eachSong">
          <h4 className="h3">{`${each['name']}`}</h4>
          <h5 className="h4">{`${each['artist']} | ${each['album']}`}</h5>
        </div>
        <button>-</button>
      </li>
      )
    );
  };
  return <ul>{eachSong(playlist)}</ul>;
};

export default Tracklist;