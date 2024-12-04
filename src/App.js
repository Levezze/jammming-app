import React, { useEffect, useState } from 'react';
import SearchSongs from './components/SearchSongs';
import SearchResults from './components/SearchResults';
import { handleChange, handleSubmit } from './containers/utils';
import './App.css';
import './components/css/SearchBar.css';


function App() {
  const [searchValue, setsearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(searchResults);
  },[searchResults])

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
        <h2>Spotify Playlist Maker</h2>
      </header>
      <main className="Main">
        <div id='SearchSongs'>
          <SearchSongs 
            searchValue={searchValue} 
            onSearchChange={(event) => handleChange(setsearchValue)(event)} 
            onSearchSubmit={(event) => handleSubmit(searchValue, setsearchValue, setSearchResults)(event)} />
        </div>
        <div>
          <SearchResults searchResultsArray={searchResults} />
        </div>

      </main>
      
    </div>
  );
}

export default App;