import React from "react";

function PlaylistName({ playlistName, handleNameChange }) {
  return (
    <>
      <input 
        id="playlistName"
        name="playlistName"
        onChange={handleNameChange}
        placeholder="Playlist name..."/>
    </>
  );
};

export default PlaylistName;