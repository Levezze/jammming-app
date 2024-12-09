import React from "react";
import { removeSong } from "../../utils/utils";
import './RemoveButton.css'


function RemoveButton({ array, id, set }) {
  return <button
          className="RemoveButton"
          onClick={() => removeSong(array, id, set)}>-</button>
}

export default RemoveButton;