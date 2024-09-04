import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseDetails from './components/WarehouseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehouseDetails />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
