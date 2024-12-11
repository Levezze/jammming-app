import React from "react"

function SongsList({ each }) {
  const albumImage = each['album'].images[0].url;
  return (
    <div className="songFullContainer">
      <img src={albumImage} className="albumImage"/>
      <div className="eachSong">
        <h4>{`${each['name']}`}</h4>
        <h5>{`${each['artists'].map(element => element['name']).join(', ')}`}</h5>
        <h6>{`${each['album'].name}`}</h6>
      </div>
    </div>
    
  )
}

export default SongsList;