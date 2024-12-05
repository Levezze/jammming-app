import React, { useEffect, useState } from 'react';
import SearchSongs from './components/SearchSongs';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { handleChange, handleSubmit } from './containers/utils';
import './App.css';
import './components/css/SearchBar.css';


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  useEffect(() => {
    console.log("Current playlist:", playlist);
  },[playlist])

  useEffect(() => {
    console.log("Search results:", searchResults);
  },[searchResults, playlist])

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
        <h2>Spotify Playlist Maker</h2>
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
          setPlaylist={setPlaylist} />
      </main>
    </div>
  );
};

export default App;