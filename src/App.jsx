import './App.scss';
//import HomePage from './pages/HomePage';
//import WarehousesPage from './pages/WarehousesPage'; 
import AddWarehousePage from './pages/AddWarehousePage';
import EditWarehousePage from './pages/EditWarehousePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                {/*
                <Route path="/" element={<WarehousesPage />} />
                <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
                 */}
                <Route path="/warehouse/add" element={<AddWarehousePage />} />
                <Route path="/warehouse/:id/edit" element={<EditWarehousePage />} />
            </Routes>
        </Router>
    )
}

export default App;
