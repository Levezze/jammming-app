import React from "react";
import { handleLogin } from "../PKCE/Authorization";

function LoginButton() {
  return <button onClick={handleLogin}>Login to Spotify</button>
};

export default LoginButton;