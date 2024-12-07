import React from "react";

function SaveButton({ playlist, setUriList }) {
  const uris = (array) => {
    setUriList(array.map(each => each.uri));
  };

  return <button 
          onClick={() => uris(playlist)}
          disabled={false}>Save Playlist</button>
};

export default SaveButton;