import React, { useEffect } from "react";
import SearchSongs from "../SearchSongs/SearchSongs";
import LoginButton from "../LoginButton/LoginButton";
import { handleChange } from "../../utils/utils";

function SpotifyApp({ accessToken, setAccessToken, searchValue, setSearchValue, setSearchResults }) {
  const CLIENT_ID = '5516485dca62466fbbe834de9856c7ed';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const STATE_KEY = 'spotify_auth_state';
  const SCOPE = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

  // useEffect(() => {
  //   localStorage.removeItem('spotify_access_token');
  //   localStorage.removeItem('spotify_token_expiration');
  //   setAccessToken(null);
  // }, []);

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

  const handleSpotifyCallback = () => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    };
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const expiresIn = params.get('expires_in');
    const state_test = params.get('state');
    const savedState = localStorage.getItem(STATE_KEY);

    if (accessToken && state_test === savedState) {
      const expirationTime = parseInt(expiresIn, 10) * 1000;
      localStorage.setItem('spotify_access_token', accessToken);
      localStorage.setItem('spotify_token_expiration', expirationTime);
      localStorage.removeItem(STATE_KEY);

      setAccessToken(accessToken);
      console.log(expirationTime);

      setTimeout(() => {
        localStorage.removeItem('spotify_access_token');
        localStorage.removeItem('spotify_token_expiration');
        setAccessToken(null);
      }, expirationTime)
    
    window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      console.error("Authentication failed or state mismatch.")
    };
  };

  const getSpotifyAccessToken = () => {
    const token = localStorage.getItem('spotify_access_token');
    if (!token) {
      console.log('Please log in to Spotify.')
      return null;
    }
    return token;
  };

  useEffect(() => {
    if (!accessToken) {
      handleSpotifyCallback();
      const savedToken = getSpotifyAccessToken();
      if (savedToken) setAccessToken(savedToken);
    }
  }, [accessToken]);

  const handleSubmit = (searchValue, setSearchValue, setSearchResults) => async (event) => {
    event.preventDefault();
    const token = getSpotifyAccessToken();
    if (!token) {
      console.log('Token expired, log in again.');
      return;
    }
    const endpoint = 'https://api.spotify.com/v1/search';
    const q = encodeURIComponent(searchValue);
    console.log(searchValue);
    const types = ['track'];
    const strTypes = encodeURIComponent(types.join(','));
    const limit = 20;
    const url = `${endpoint}?q=${q}&type=${strTypes}&limit=${limit}`;
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
    } catch (error) {
      console.log(error);
      return null;
    }
    setSearchValue('');
  };

  return (
  <>
    <SearchSongs 
      searchValue={searchValue} 
      onSearchChange={(event) => handleChange(setSearchValue)(event)} 
      onSearchSubmit={(event) => handleSubmit(searchValue, setSearchValue, setSearchResults)(event)}
      accessToken={accessToken}/>
    <LoginButton onClick={loginToSpotify} />
  </>
  );
};

export default SpotifyApp;