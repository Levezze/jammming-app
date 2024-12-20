import React, { useCallback, useEffect, useState } from "react";
import SearchSongs from "../SearchSongs/SearchSongs";
import LoginButton from "../LoginButton/LoginButton";
import { handleChange } from "../../utils/utils";

function SpotifyApp({ scrollToResults, accessToken, setAccessToken, searchValue, setSearchValue, setSearchResults, resultsNumber, setResultsNumber }) {
  const [shuffleOn, setShuffleOn] = useState(false);
  
  useEffect(() =>{
    console.log('Shuffle: ' + shuffleOn);
  }, [shuffleOn])

  const CLIENT_ID = '5516485dca62466fbbe834de9856c7ed';
  const REDIRECT_URI = `${window.location.origin}/callback`;
  const STATE_KEY = 'spotify_auth_state';
  const SCOPE = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

  if (Date.now() > localStorage.getItem('spotify_token_expiration')) {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_token_expiration');
    setAccessToken(null);
  }

  const loginToSpotify = () => {
    const state = crypto.randomUUID();
    localStorage.setItem(STATE_KEY, state);
    
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&state=' + encodeURIComponent(state);
    url += '&scope=' + encodeURIComponent(SCOPE);
    url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

    window.location = url;
  };

  const handleSpotifyCallback = useCallback(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const expiresIn = params.get('expires_in');
    const state_test = params.get('state');
    const savedState = localStorage.getItem(STATE_KEY);

    if (accessToken && state_test === savedState) {
      const expirationTime = Date.now() + parseInt(expiresIn, 10) * 1000;
      console.log("date now:", Date.now())
      console.log("expiration:", expirationTime)
      localStorage.setItem('spotify_access_token', accessToken);
      localStorage.setItem('spotify_token_expiration', expirationTime);
      localStorage.removeItem(STATE_KEY);

      setAccessToken(accessToken);
      console.log(expirationTime);

    if (Date.now() > expirationTime) {
      localStorage.removeItem('spotify_access_token');
      localStorage.removeItem('spotify_token_expiration');
      setAccessToken(null);
      }

      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      console.error("Authentication failed or state mismatch.")
    };
  },[setAccessToken]);

  const getSpotifyAccessToken = () => {
    const token = localStorage.getItem('spotify_access_token');
    if (token) return token;
    console.log('Please log in to Spotify.')
    return null;  
  };

  useEffect(() => {
    if (!accessToken) {
      handleSpotifyCallback();
      const savedToken = getSpotifyAccessToken();
      if (savedToken) setAccessToken(savedToken);
    }
  }, [handleSpotifyCallback, accessToken, setAccessToken]);

  const handleSubmit = (searchValue, shuffleOn, setSearchResults) => async (event) => {
    event.preventDefault();
    const token = getSpotifyAccessToken();
    if (!token) {
      console.log('Token expired, log in again.');
      return;
    }
    const SEED = (Math.ceil(Math.random() * 300));
    const endpoint = 'https://api.spotify.com/v1/search';
    const q = encodeURIComponent(searchValue);
    const types = ['track'];
    const strTypes = encodeURIComponent(types.join(','));
    const limit = resultsNumber;
    const offset = shuffleOn ? SEED : 0;
    console.log('Seed: ', offset);
    const url = `${endpoint}?q=${q}&type=${strTypes}&limit=${limit}&offset=${offset}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonResponse = await response.json();
      setSearchResults(jsonResponse);
      // console.log(jsonResponse);
    } catch (error) {
      console.log(error);
      return null;
    }
    // setSearchValue('');
    scrollToResults();
  };

  return (
  <>
    <SearchSongs 
      searchValue={searchValue} 
      onSearchChange={(event) => handleChange(setSearchValue)(event)} 
      onSearchSubmit={(event) => handleSubmit(searchValue, shuffleOn, setSearchResults)(event)}
      accessToken={accessToken}
      shuffleOn={shuffleOn}
      setShuffleOn={setShuffleOn}
      resultsNumber={resultsNumber}
      setResultsNumber={setResultsNumber} />
    <LoginButton onClick={loginToSpotify} />
  </>
  );
};

export default SpotifyApp;