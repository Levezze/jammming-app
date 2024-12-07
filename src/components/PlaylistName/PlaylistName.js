import React from "react";

function PlaylistName({ playlistName, handleNameChange }) {
  return (
    <form>
      <input 
      id="playlistName"
      name="playlistName"
      onChange={handleNameChange}
      placeholder="Playlist name..."/>
    </form>
  )
};

export default PlaylistName;