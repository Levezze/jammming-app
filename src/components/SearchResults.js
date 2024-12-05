import React from "react";
import Track from "./Track";
import './css/SearchResults.css'


function SearchResults({ searchResultsArray, addSong }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Track 
        results={searchResultsArray}
        add={addSong} />
    </div>
  );
}

export default SearchResults;