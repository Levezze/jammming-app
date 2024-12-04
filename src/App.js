import React, { useState } from 'react';
import SearchSongs from './components/SearchSongs';
import Tracklist from './components/Tracklist';
import { handleChange, handleSubmit } from './containers/utils';
import './App.css';
import './components/css/SearchBar.css';

// Temporary Search Results - Hard Coded JSON
// import dataJson from './resources/songsExample.json';

function App() {
  const [searchValue, setsearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
        <h2>Spotify Playlist Maker</h2>
      </header>
      <main className="Main">
        <div id='searchBar'>
          <SearchSongs 
            searchValue={searchValue} 
            onSearchChange={handleChange(setsearchValue)} 
            onSearchSubmit={handleSubmit(searchValue, setsearchValue)} 
          />
        </div>
        <div className="SearchResults">
          <Tracklist />
        </div>

      </main>
      
    </div>
  );
}

export default App;