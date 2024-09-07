import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehouseDetailsPage from './pages/WarehouseDetialsPage/WarehouseDetailsPage';
import AddWarehousePage from './pages/AddWarehousePage';
import EditWarehousePage from './pages/EditWarehousePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
        <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouses/add" element={<AddWarehousePage />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
