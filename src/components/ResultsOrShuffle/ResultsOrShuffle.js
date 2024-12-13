import React from "react";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import './ResultsOrShuffle.css'

function ResultsOrShuffle({ offsetShuffle, setOffsetShuffle }) {
  return (
    <div className="ResultsShuffle">
      <div className="dropdown-results" >
          <label>
              Results: {/* Maybe unnecessary */}
              <select className="option">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
              </select>
          </label>
      </div>
      <ShuffleButton offsetShuffle={offsetShuffle} setOffsetShuffle={setOffsetShuffle} />
    </div>
  );
};

export default ResultsOrShuffle;