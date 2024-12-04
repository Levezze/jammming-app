import React from "react";

function Track({ resultList }) {
  const eachSong = array => {
    return array.map((each) => (
        <li key={each['id']}>
          <div className='eachSong'>
            <p>{`Song: ${each['name']}`}</p>
            <p>{`Artist: ${each['artist']}`}</p>
            <p>{`Album: ${each['album']}`}</p>
          </div>
        </li>
      )
    );
  };
  // console.log(resultList[2]['name']);
  // console.log((eachSong(resultList)));
  return <ul>{eachSong(resultList)}</ul>;
}

export default Track;