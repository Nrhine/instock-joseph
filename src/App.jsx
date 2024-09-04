import "./App.scss";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
