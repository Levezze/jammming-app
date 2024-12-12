import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchButton from "../SearchButton/SearchButton";
import ResultsOrShuffle from "../ResultsOrShuffle/ResultsOrShuffle";
import './SearchSongs.css'

function SearchSongs({ searchValue, onSearchChange, onSearchSubmit, offsetShuffle, setOffsetShuffle }) {
  return (
    <form className="SearchSongs" onSubmit={onSearchSubmit}>
      <div className="SearchBarContainer">
        <ResultsOrShuffle offsetShuffle={offsetShuffle} setOffsetShuffle={setOffsetShuffle} />
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchSongs; 