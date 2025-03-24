import React from "react";
import StartScreen from "./pages/StartScreen";
import Profile from "./pages/Profile";
import Insert from "./pages/Insert";
import Procedure from "./pages/Procedure";
import Notice from "./pages/Notice";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
