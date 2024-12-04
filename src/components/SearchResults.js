import React from "react";
import Tracklist from "./Tracklist";
import './css/SearchResults.css'

function SearchResults({ searchResultsArray }) {
  // console.log(`Test: ${searchResultsArray[0]['name']}`)
  return (
    <div className="SearchResults">
      <Tracklist results={searchResultsArray} />
    </div>
  );
}

export default SearchResults;