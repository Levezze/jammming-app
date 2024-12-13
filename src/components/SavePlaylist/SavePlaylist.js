import React from "react";
import PlaylistName from "../PlaylistName/PlaylistName";
import './SavePlaylist.css'

function SavePlaylist({ playlist, setPlaylist, setUriList, accessToken, playlistName, setPlaylistName, handleNameChange }) {
  const uris = (array) => {
    setUriList(array.map(each => each.uri));
  };

  const getId = async (accessToken) => {
    if (!accessToken) {
      console.log('Token expired, log in again.');
      return;
    }
    const endpoint = 'https://api.spotify.com/v1/me';
    const url = `${endpoint}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonResponse = await response.json();
      return(jsonResponse['id'])
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const handleSubmit = (accessToken) => async (event) => {
    event.preventDefault();
    const myId = await getId(accessToken);
    // console.log(myId);
    if (myId && playlistName.length > 0) {
      const url = `https://api.spotify.com/v1/users/${myId}/playlists`;
      try {
        // Create Playlist
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: playlistName,
            public: false,
          }),
        });
        if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);
        const jsonResponse = await response.json();
        console.log("Playlist created: ", jsonResponse);
        const playlistId = jsonResponse['id'];
        // Add Songs
        const songsUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        try {
          const songsResponse = await fetch(songsUrl, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              uris: playlist.map(each => each['uri']),
              position: 0,
            }),
          });
          if (!songsResponse.ok)
            throw new Error(`HTTP error! Status ${songsResponse.status}`);
          const songsJsonResponse = await songsResponse.json();
          console.log("Songs added to playlist: ", songsJsonResponse);
          alert(`Songs added to playlist: ${playlistName}`);
          setPlaylist([]);
          setPlaylistName('');
          } catch (error) {
            console.log("Error adding songs: ", error);
          }
      } catch (error) {
        console.log("Error creating playlist: ", error);
      }
    };
    
  };

  const disableButton = playlistName.length < 1;

  return (
    <form onSubmit={handleSubmit(accessToken)}>
      <div className="playlist-name-container">
        <PlaylistName
          playlistName={playlistName}
          handleNameChange={handleNameChange} />
      </div>
      <button className="save-playlist-btn" type='submit' disabled={disableButton}>Save Playlist</button>
    </form>
  );
};

export default SavePlaylist;