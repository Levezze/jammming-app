import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './css/SearchSongs.css'

function SearchSongs({ searchValue, onSearchChange, onSearchSubmit }) {
  return (
    <form className="search-container" onSubmit={onSearchSubmit}>
      <SearchBar value={searchValue} onChange={onSearchChange} />
      <SearchButton />
    </form>
  );
};

export default SearchSongs;