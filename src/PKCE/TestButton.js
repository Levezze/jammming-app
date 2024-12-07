import React from "react";
import { fetchUserProfile } from "./Authorization";

function TestButton() {
  return <button onClick={() => fetchUserProfile()}>TEST</button>
};

export default TestButton;