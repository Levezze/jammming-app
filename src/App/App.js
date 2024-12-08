import React, { useEffect, useState } from 'react';
import SearchSongs from '../components/SearchSongs/SearchSongs';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import { handleChange, handleSubmit } from '../containers/utils';
import './App.css';
import TestButton from '../PKCE/TestButton';
import LoginToSpotify from '../implicitFlow/LoginToSpotify';
import AuthRouter from '../components/AuthRouter';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [uriList, setUriList] = useState([]);

  useEffect(() => {
    console.log("Search results:", searchResults);
  },[searchResults])

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
        <LoginToSpotify />
        <div id='SearchSongs'>
          <SearchSongs 
            searchValue={searchValue} 
            onSearchChange={(event) => handleChange(setSearchValue)(event)} 
            onSearchSubmit={(event) => handleSubmit(searchValue, setSearchValue, setSearchResults)(event)} />
        </div>
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
          setUriList={setUriList} />
      </main>
    </div>
  );
};

export default App;