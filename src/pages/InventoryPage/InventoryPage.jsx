import InventoryList from '../../components/InventoryList/InventoryList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [inventory, setInventory] = useState();

  const getInventory = async () => {
    try {
      const results = await axios.get(`${apiUrl}/api/inventories`);
      setInventory(results.data);
    } catch (error) {
      console.log(`Error retrieving inventory items`, error);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);

  if (!inventory) {
    return <p>Loading...</p>;
  }

  return <InventoryList items={inventory} />;
}

export default InventoryPage;
