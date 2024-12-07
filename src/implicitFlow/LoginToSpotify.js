import React from 'react';

const LoginToSpotify = () => {
  const CLIENT_ID = '5516485dca62466fbbe834de9856c7ed';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const STATE_KEY = 'spotify_auth_state';
  const SCOPE = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

  const loginToSpotify = () => {
    const state = crypto.randomUUID();
    localStorage.setItem(STATE_KEY, state);

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&scope=' + encodeURIComponent(SCOPE);
    url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;
  };

  return <button onClick={loginToSpotify}>Login to Spotify</button>;
};

export default LoginToSpotify;