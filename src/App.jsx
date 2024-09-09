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
import InventoryPage from './pages/InventoryPage/InventoryPage';
import InventoryDetailsPage from './pages/InventoryDetailsPage'
import EditInventoryPage from './pages/EditInventoryPage/EditInventoryPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouse" element={<WarehousesPage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route path="/warehouse/:id/edit" element={<EditWarehousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
        <Route path="/inventory/:id/edit" element={<EditInventoryPage /> } />
        <Route path="/inventory/add" element={<AddInventoryItemPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
