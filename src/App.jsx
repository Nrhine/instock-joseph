import './App.scss';
import React from 'react';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
