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
  const [accessToken, setAccessToken ] = useState(null);
  const [resultsNumber, setResultsNumber] = useState(10);

  document.title = "Jammming, Spotify Playlist Maker";

  useEffect(() => {
    console.log("result number:", resultsNumber)
  }, [resultsNumber])

  const targetRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const loginButtonStyle = document.getElementById('login-button');
  const searchButtonStyle = document.getElementById('search-btn');
  useEffect(() => {
    if (!accessToken) {
      setTimeout(() =>{
      // console.log('no token')
        if (loginButtonStyle && searchButtonStyle){
        loginButtonStyle.style.display = 'block';
        searchButtonStyle.style.display = 'none';
        }}, 1000)
    } else {
      setTimeout(() =>{
      // console.log('yes token')
      if (loginButtonStyle && searchButtonStyle){
        loginButtonStyle.style.display = 'none';
        searchButtonStyle.style.display = 'block';
      }}, 1000)
    }
  }, [accessToken, setAccessToken, loginButtonStyle, searchButtonStyle])

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
          resultsNumber={resultsNumber}
          setResultsNumber={setResultsNumber}
           />
      </header>
      <main className="Main">
        <div className='buttonToSearch'>
          <button onClick={scrollToTop}>Search <span>&uarr;</span></button>
        </div>
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
          setPlaylistName={setPlaylistName}
          accessToken={accessToken} />
      </main>
    </div>
  );
};

export default App;