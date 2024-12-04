import React from "react";
import Track from "./Track";

function Tracklist({ results }) {
  return (
    <>
      <Track resultList={results} />
    </>
  );
};

export default Tracklist;