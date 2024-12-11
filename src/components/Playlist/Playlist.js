import React from "react";
import SavePlaylist from "../SavePlaylist/SavePlaylist";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css'

function Playlist({ playlistNameValue, playlistNameChange, playlist, setPlaylist, setUriList, accessToken }) {
  return (
    <div className="Playlist">
      <SavePlaylist 
        playlistName={playlistNameValue}
        handleNameChange={playlistNameChange}
        playlist={playlist}
        setUriList={setUriList}
        accessToken={accessToken} />
      <Tracklist
        playlist={playlist} 
        setPlaylist={setPlaylist} />
    </div>
    
  )
};

export default Playlist;