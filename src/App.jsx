import "./App.scss";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import AddWarehousePage from "./pages/AddWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouse" element={<WarehousesPage />} />
        <Route path="/inventory" element={<h1>InventoryListPage</h1>} />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route path="/warehouse/:id/edit" element={<EditWarehousePage />} />
      </Routes>
    </Router>
  );
}

export default App;
