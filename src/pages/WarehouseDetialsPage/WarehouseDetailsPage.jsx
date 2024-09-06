import './WarehouseDetailsPage.scss';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function WarehouseDetailsPage() {
  const [warehouse, setWarehouse] = useState();

  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  const getWarehouseDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/warehouses/${id}`);
      console.log(response.data); // Check if data is returned correctly
      setWarehouse(response.data);
    } catch (error) {
      console.log(`Error making axios call for warehouse id: ${id}`, error);
    }
  };

  useEffect(() => {
    getWarehouseDetails();
  }, [id]);

  if (!warehouse) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <WarehouseDetails data={warehouse} />
    </>
  );
}

export default WarehouseDetailsPage;
