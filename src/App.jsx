import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehouseDetailsPage from './pages/WarehouseDetialsPage/WarehouseDetailsPage';
import AddWarehousePage from './pages/AddWarehousePage';
import EditWarehousePage from './pages/EditWarehousePage';
import AddInventoryItemPage from './pages/AddInventoryItemPage/AddInventoryItemPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouse" element={<WarehousesPage />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
        <Route path="/inventory/add" element={<AddInventoryItemPage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route path="/warehouse/:id/edit" element={<EditWarehousePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
