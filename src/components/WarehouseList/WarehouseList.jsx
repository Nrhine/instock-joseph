import CTA from '../CTA/CTA'
import FormField from '../FormField/FormField'
import './WarehouseList.scss'
import WarehouseItem from '../WarehouseItem/WarehouseItem'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function WarehouseList() {

    const apiUrl = `${import.meta.env.VITE_API_URL}`

    const [warehousesData, setWarehousesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const fetchWarehouses = async () => {
        try {
            let response = await axios.get(
                apiUrl + "/warehouses"
            )
            if (Array.isArray(response.data)) {
                setWarehousesData(response.data); 
            } else {
                setError("Invalid data format");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);  
        }
    }

    useEffect(() => {
        fetchWarehouses()
    }, [])
    if (loading) {
        return <div>Loading...</div>;  
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }/*
    const sampleData = {
        "warehouse_name": "Manhattan",
        "address": "503 Broadway",
        "city": "New York",
        "country": "USA",
        "contact_name": "Parmin Aujla",
        "contact_phone": "+1 (616) 123-1234",
        "contact_email": "paujla@instock.com"
    }
*/
  return (
    <>
        <div className='warehouse-list'>
            <div className="warehouse-list__head">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <div className="warehouse-list__nav">
                    <FormField className="form-field--search warehouse-list__search" placeholder="Search..."/>
                    <Link to="/warehouse/add">
                        <CTA className="CTA--primary warehouse-list__add" text="+ Add New Warehouse"/>
                    </Link>
                </div>
            </div>
            <div className="warehouse-list__table">
                <div className="warehouse-list__header-row">
                    <div className="warehouse-list__table-headers">
                        <h4 className="warehouse-list__table-header">WAREHOUSE</h4>
                        <h4 className="warehouse-list__table-header">ADDRESS</h4>
                        <h4 className="warehouse-list__table-header">CONTACT NAME</h4>
                        <h4 className="warehouse-list__table-header">CONTACT INFORMATION</h4>
                    </div>
                    <h4 className="warehouse-list__action-header">ACTIONS</h4>
                </div>

            {/* <WarehouseItem data={sampleData} /> */}
            {
                warehousesData.map ((warehouse) => (
                    <WarehouseItem key={warehouse.id} data={warehouse} />
                ))
            }
           
            </div>

        </div>
    </>
  )
}

export default WarehouseList