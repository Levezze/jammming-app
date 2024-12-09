import React from "react";
import PlaylistName from "../../components/PlaylistName/PlaylistName";

function SavePlaylist({ playlist, setUriList, accessToken, playlistName, handleNameChange }) {
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
    console.log(myId);
    if (myId && playlistName.length > 0) {
      const url = `https://api.spotify.com/v1/users/${myId}/playlists`;
      try {
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
        if (!response.ok)
          throw new Error(`HTTP error! Status ${response.status}`);
        const jsonResponse = await response.json();
        console.log("Playlist created: ", jsonResponse);
      } catch (error) {
        console.log("Error creating playlist: ", error);
      }
    };
  };

  const disableButton = playlistName.length < 1;

  return (
    <form onSubmit={handleSubmit(accessToken)}>
      <PlaylistName
        playlistName={playlistName}
        handleNameChange={handleNameChange} />
      <button type='submit' disabled={disableButton}>Save Playlist to Spotify</button>
    </form>
  );
};

export default SavePlaylist;