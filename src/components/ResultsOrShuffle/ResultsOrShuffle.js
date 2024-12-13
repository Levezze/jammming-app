import React from "react";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import './ResultsOrShuffle.css'

function ResultsOrShuffle({ shuffleOn, setShuffleOn, resultsNumber, setResultsNumber }) {
  const handleChange = (event) => {
    setResultsNumber(event.target.value);
  };

  return (
    <div className="ResultsShuffle">
      <div className="dropdown-results" >
          <label>
              Results:
              <select 
              id="resultsDropdown" 
              value={resultsNumber}
              onChange={handleChange}
              className="option">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
              </select>
          </label>
      </div>
      <ShuffleButton shuffleOn={shuffleOn} setShuffleOn={setShuffleOn} />
    </div>
  );
};

export default ResultsOrShuffle;