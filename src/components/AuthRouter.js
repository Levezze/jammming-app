import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App/App";
import Redirect from "../implicitFlow/Redirect";

function AuthRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/callback" element={<Redirect />} />
      </Routes>
    </Router>
  );
};

export default AuthRouter;