import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehouseDetailsPage from './pages/WarehouseDetialsPage/WarehouseDetailsPage';
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import AddWarehousePage from "./pages/AddWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage";
import InventoryDetails from './components/InventoryDetails/InventoryDetails';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route path="/warehouse/:id/edit" element={<EditWarehousePage />} />
      </Routes>
    </Router>
  );
}

export default App;
