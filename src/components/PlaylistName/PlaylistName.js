import React from "react";
import './PlaylistName.css'

function PlaylistName({ playlistName, handleNameChange }) {
  return (
    <>
      <input 
        value={playlistName}
        className="PlaylistName"
        id="playlistName"
        name="playlistName"
        onChange={handleNameChange}
        placeholder="Playlist name..."/>
    </>
  );
};

export default PlaylistName;