import React, { useState, useEffect } from "react";
import { addSong } from "./utils";
import './css/AddButton.css'


function AddButton({ each, set, songs }) {
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    const id = each['id'];

    if (songs.length > 0) {
      for (let i = 0; i < songs.length; i++) {
        if (songs[i]['id'] === id) {
          setActive(true)
        }
      }
    }
  },[songs])
  
  return <button 
          disabled={active}
          className="AddButton"
          onClick={() => addSong(each, set, songs, setActive)}>+</button>
};

export default AddButton;