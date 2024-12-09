import React from "react";
import PlaylistName from "../PlaylistName/PlaylistName";
import SavePlaylist from "../../containers/SavePlaylist/SavePlaylist";
import Tracklist from "../../containers/Tracklist/Tracklist";

function Playlist({ playlistNameValue, playlistNameChange, playlist, setPlaylist, setUriList, accessToken }) {
  return (
    <div className="Playlist">
      <h3>Playlist</h3>
      <Tracklist 
        playlist={playlist} 
        setPlaylist={setPlaylist} />
      <SavePlaylist 
        playlistName={playlistNameValue}
        handleNameChange={playlistNameChange}
        playlist={playlist}
        setUriList={setUriList}
        accessToken={accessToken} />
    </div>
    
  )
};

export default Playlist;