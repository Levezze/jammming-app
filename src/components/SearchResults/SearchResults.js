import React from "react";
import Track from "../../containers/Track/Track";
import './SearchResults.css'


function SearchResults({ searchResultsArray, addSong, playlistSongs }) {
  return (
    <div className="SearchResults">
      <Track 
        results={searchResultsArray}
        set={addSong}
        songs={playlistSongs} />
    </div>
  );
}

export default SearchResults;