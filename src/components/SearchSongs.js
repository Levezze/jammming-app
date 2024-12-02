import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './css/SearchSongs.css'

function SearchSongs({ searchValue, onSearchChange }) {
  return (
    <div className="search-container">
      <SearchBar value={searchValue} onChange={onSearchChange} />
      <SearchButton />
    </div>
  );
};

export default SearchSongs;