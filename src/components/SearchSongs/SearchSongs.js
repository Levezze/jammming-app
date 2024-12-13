import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchButton from "../SearchButton/SearchButton";
import ResultsOrShuffle from "../ResultsOrShuffle/ResultsOrShuffle";
import './SearchSongs.css'

function SearchSongs({ searchValue, onSearchChange, onSearchSubmit, shuffleOn, setShuffleOn, resultsNumber, setResultsNumber }) {
  return (
    <form className="SearchSongs" onSubmit={onSearchSubmit}>
      <div className="SearchBarContainer">
        <ResultsOrShuffle 
        shuffleOn={shuffleOn} 
        setShuffleOn={setShuffleOn}
        resultsNumber={resultsNumber}
        setResultsNumber={setResultsNumber} />
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchSongs; 