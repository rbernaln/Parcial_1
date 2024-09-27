// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RobotsList from "./pages/RobotsList";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/robots" element={<RobotsList />} />
      </Routes>
    </Router>
  );
}

export default App;
