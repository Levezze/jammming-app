import React from "react";
import PlaylistName from "./PlaylistName";
import Tracklist from "../containers/Tracklist";

function Playlist({ playlistNameValue, playlistNameChange, playlist }) {
  return (
    <div className="Playlist">
      <h3>Playlist</h3>
      <PlaylistName
        playlistName={playlistNameValue}
        handleNameChange={playlistNameChange} />
      <Tracklist playlist={playlist} />
    </div>
    
  )
};

export default Playlist;