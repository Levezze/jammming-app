import React, { useEffect, useState } from 'react';
// Components
import SearchSongs from '../components/SearchSongs/SearchSongs';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import SpotifyApp from '../containers/SpotifyApp/SpotifyApp';
// Functions
import { handleChange } from '../utils/utils';
// Style
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [uriList, setUriList] = useState([]);
  const [accessToken, setAccessToken ] = useState(null);

  // useEffect(() => {
  //   if (searchResults) {
  //   console.log("Search results:", searchResults['tracks'].items, "keys:", Object.keys(searchResults));
  //   }
  // },[searchResults])

  useEffect(() => {
    console.log("Current playlist:", playlist);
  },[playlist])

  useEffect(() => {
    console.log("Sent URI Array:", uriList);
  },[uriList])

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
        <h2>Spotify Playlist Maker</h2>
        <SpotifyApp 
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResults={setSearchResults}
           />
      </header>
      <main className="Main">
        <SearchResults 
          searchResultsArray={searchResults}
          playlistSongs={playlist}
          addSong={setPlaylist} />
        <Playlist 
          playlistNameValue={playlistName}
          playlistNameChange={(event) => handleChange(setPlaylistName)(event)}
          playlist={playlist}
          setPlaylist={setPlaylist}
          setUriList={setUriList}
          accessToken={accessToken} />
      </main>
    </div>
  );
};

export default App;