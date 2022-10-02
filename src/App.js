import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route axact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
