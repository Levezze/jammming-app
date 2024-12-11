import React, { useEffect, useState, useRef } from 'react';
// Components
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import SpotifyApp from '../components/SpotifyApp/SpotifyApp';
// Functions
import { handleChange } from '../utils/utils';
// Style
import './App.css';
import '../fonts.css'

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [uriList, setUriList] = useState([]);
  const [accessToken, setAccessToken ] = useState(null);

  const targetRef = useRef(null);
  useEffect(() => {
    const loginButtonStyle = document.getElementById('login-button');
    const searchButtonStyle = document.getElementById('search-btn');
    if (!accessToken) {
      // console.log('no token')
      loginButtonStyle.style.display = 'block';
      searchButtonStyle.style.display = 'none';
    } else {
      // console.log('yes token')
      loginButtonStyle.style.display = 'none';
      searchButtonStyle.style.display = 'block';
    }
  }, [accessToken])

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
        <h2>Spotify Playlist Maker</h2>
        <SpotifyApp 
          scrollToResults={() => targetRef.current.scrollIntoView({ behavior: 'smooth' })}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResults={setSearchResults}
           />
      </header>
      <main className="Main">
        <SearchResults 
          refDiv={targetRef}
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