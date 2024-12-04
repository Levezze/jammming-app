import React from "react";
import Track from "./Track";

function Tracklist({ results }) {
  return (
    <>
    <ul>
      <Track resultList={results} />
    </ul>
    </>
  );
};

export default Tracklist;