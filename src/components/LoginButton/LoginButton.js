import React from "react";
import './LoginButton.css'

function LoginButton({ onClick }) {
  return <button onClick={onClick} id="login-button" className="big-btn">Log in with Spotify</button>
};

export default LoginButton;