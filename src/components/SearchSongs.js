import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './css/SearchSongs.css'

function SearchSongs() {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchButton />
    </div>
  );
};

export default SearchSongs;