import React from "react"

function SongsList({ each }) {
  return (
    <div className="eachSong">
      <h4 className="h3">{`${each['name']}`}</h4>
      <h5 className="h4">{`${each['artists'].map(element => element['name']).join(', ')} | ${each['album'].name}`}</h5>
    </div>
  )
}

export default SongsList;