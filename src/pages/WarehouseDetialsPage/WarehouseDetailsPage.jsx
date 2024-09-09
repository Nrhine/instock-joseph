import './WarehouseDetailsPage.scss';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function WarehouseDetailsPage() {
  const [warehouse, setWarehouse] = useState();
  const [inventory, setInventory] = useState();

  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  const getWarehouseData = async () => {
    try {
      const [warehouseResponse, inventoryResponse] = await Promise.all([
        axios.get(`${apiUrl}/warehouses/${id}`),
        axios.get(`${apiUrl}/warehouses/${id}/inventories`),
      ]);

      setWarehouse(warehouseResponse.data);
      setInventory(inventoryResponse.data);
    } catch (error) {
      console.log(`Error fetching warehouse and inventory data: ${error}`);
    }
  };

  useEffect(() => {
    getWarehouseData();
  }, [id]);

  if (!warehouse) {
    return <p>Loading...</p>;
  }

  return (
    <main className="warehouse-details__page">
      <WarehouseDetails data={warehouse} />
      <WarehouseInventoryList data={inventory} name={warehouse} />
    </main>
  );
}

export default WarehouseDetailsPage;
