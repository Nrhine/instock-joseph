import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseInventoryList from './components/WarehouseInventoryList/WarehouseInventoryList';


function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<h1>WarehouseListPage</h1>} /> */}
                <Route path="/" element={<WarehouseInventoryList />} />
                <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
