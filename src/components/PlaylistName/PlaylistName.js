import React from "react";
import './PlaylistName.css'

function PlaylistName({ playlistName, handleNameChange }) {
  return (
    <>
      <input 
        className="PlaylistName"
        id="playlistName"
        name="playlistName"
        onChange={handleNameChange}
        placeholder="Playlist name..."/>
    </>
  );
};

export default PlaylistName;