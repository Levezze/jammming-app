import React from "react";
import { handleShuffle } from "../../utils/utils";
import './ShuffleButton.css'

function ShuffleButton({ shuffleOn, setShuffleOn }) {
  return (
    <button 
      id="shuffle-btn"
      type="button" 
      onClick={() => (handleShuffle(shuffleOn, setShuffleOn))} >
      <img 
        id="shuffle-icon" 
        src='/shuffle-icon.png'/>
    </button>
  );
};

export default ShuffleButton;