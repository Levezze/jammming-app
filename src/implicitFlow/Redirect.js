import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Redirect = () => {
  const navigate = useNavigate();
  const STATE_KEY = 'spotify_auth_state';

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const expiresIn = params.get('expires_in');
    const state_test = params.get('state');
    const savedState = localStorage.getItem(STATE_KEY);
    if (accessToken && state_test === savedState) {
      localStorage.setItem('spotify_access_token', accessToken);
      const expirationTime = new Date().getTime() + parseInt(expiresIn, 10) * 1000;
      localStorage.setItem('spotify_token_expiration', expirationTime);
      localStorage.removeItem(STATE_KEY)
      window.history.replaceState({}, document.title, "/")
      navigate('/');
    } else {
      console.error('Authentication failed or state mismatch.')
      navigate('/');
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default Redirect;