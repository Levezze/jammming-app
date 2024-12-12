import React from "react";
import { sortShuffleSwitch } from "../../utils/utils";
import './ShuffleButton.css'

function ShuffleButton({ offsetShuffle, setOffsetShuffle }) {
  return (
    <button 
      id="shuffle-btn"
      type="button" 
      onClick={() => setOffsetShuffle(sortShuffleSwitch(offsetShuffle, setOffsetShuffle))} >
      <img 
        id="shuffle-icon" 
        src='/shuffle-icon.png'/>
    </button>
  );
};

export default ShuffleButton;