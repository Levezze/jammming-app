import React from "react";
import PlaylistName from "../PlaylistName/PlaylistName";
import SaveButton from "../../containers/SaveButton/SaveButton";
import Tracklist from "../../containers/Tracklist/Tracklist";

function Playlist({ playlistNameValue, playlistNameChange, playlist, setPlaylist, setUriList }) {
  return (
    <div className="Playlist">
      <h3>Playlist</h3>
      <PlaylistName
        playlistName={playlistNameValue}
        handleNameChange={playlistNameChange} />
      <Tracklist 
        playlist={playlist} 
        setPlaylist={setPlaylist} />
      <SaveButton 
        playlist={playlist}
        setUriList={setUriList} />
    </div>
    
  )
};

export default Playlist;