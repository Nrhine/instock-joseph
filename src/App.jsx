import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehouseDetailsPage from './pages/WarehouseDetialsPage/WarehouseDetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/:id" element={<WarehouseDetailsPage />} />
        {/* // <Route path="/inventory" element={<h1>InventoryListPage</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
