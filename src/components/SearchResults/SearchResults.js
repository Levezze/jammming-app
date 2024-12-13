import React, { useEffect } from "react";
import Track from "../Track/Track";
import './SearchResults.css'


function SearchResults({ refDiv, searchResultsArray, addSong, playlistSongs }) {
  useEffect(() => {
    if (refDiv.current) {
      refDiv.current.scrollTop = 0;
    }
  }, [refDiv, searchResultsArray])

  return (
    <div ref={refDiv} className="SearchResults">
      <Track 
        results={searchResultsArray}
        set={addSong}
        songs={playlistSongs} />
    </div>
  );
}

export default SearchResults;