import React, { useState, useEffect } from "react";
import { addSong } from "./utils";
import './css/AddButton.css'


function AddButton({ each, set, songs }) {
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    const songId = each['id'];
    if (songs.length > 0) {
      const ids = songs.map(({id}) => id)
      if (ids.includes(songId)) {
        setActive(true);
        } else {
        setActive(false);
        }
      } else {
      setActive(false);
    }
  },[songs])
  
  return <button 
          disabled={active}
          className="AddButton"
          onClick={() => addSong(each, set)}>+</button>
};

export default AddButton;