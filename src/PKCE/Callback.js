import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");

      // Check if state is valid (optional, for extra security)
      if (!state) {
        console.error("State is missing or invalid");
        return;
      }

      const codeVerifier = localStorage.getItem("code_verifier");

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: "5516485dca62466fbbe834de9856c7ed",
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "http://localhost:3000/callback",
          code_verifier: codeVerifier,
        }),
      };

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", payload);
        const data = await response.json();

        if (data.access_token) {
          // Save the access token to localStorage (or a state management library)
          localStorage.setItem("access_token", data.access_token);

          // Redirect to the main app or homepage
          navigate("/");
        } else {
          console.error("Failed to get access token", data);
        }
      } catch (error) {
        console.error("Error fetching access token", error);
      }
    };

    getToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;