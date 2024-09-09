import './EditInventoryForm.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backlogo from '../../assets/Icons/arrow_back-24px.svg';
import FormField from '../FormField/FormField';
import CTA from '../CTA/CTA';

const API_URL = import.meta.env.VITE_API_URL
// Predefined categories
const CATEGORIES = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health'];

const EditInventoryForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({
        item_name: '',
        description: '',
        category: '',
        status: '',
        quantity: 0,
        warehouse_name: ''
    });
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [inventoryResponse, warehousesResponse] = await Promise.all([
                    axios.get(`${API_URL}/api/inventories/${id}`),
                    axios.get(`${API_URL}/api/warehouses`)
                ]);

                const inventoryData = inventoryResponse.data;
                const warehousesData = warehousesResponse.data;
                
                const currentWarehouse = warehousesData.find(w => w.id === inventoryData.warehouse_id);

                setInventory({
                    ...inventoryData,
                    warehouse_name: currentWarehouse ? currentWarehouse.warehouse_name : ''
                });
                setWarehouses(warehousesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInventory(prevState => ({
            ...prevState,
            [name]: value,
            ...(name === 'status' && value === 'Out of Stock' && { quantity: 0 })
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Find the warehouse name with warehouse_id
            const selectedWarehouse = warehouses.find(w => w.warehouse_name === inventory.warehouse_name);
            const warehouse_id = selectedWarehouse ? selectedWarehouse.id : null;

            if (!warehouse_id) {
                console.error('No valid warehouse selected');
                return;
            }
            // prepare an object
            const dataToSend = {
                item_name: inventory.item_name,
                description: inventory.description,
                category: inventory.category,
                status: inventory.status,
                quantity: inventory.status === 'In Stock' ? Number(inventory.quantity) : 0,
                warehouse_id: warehouse_id
            };

            console.log('Data being sent:', dataToSend);

            const response = await axios.put(`${API_URL}/api/inventories/${id}`, dataToSend);
            console.log('Server response:', response.data);

            // Redirect on success
            navigate('/inventory');
        } catch (error) {
            console.error('Error updating inventory:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        }
    };

    const handleCancel = () => navigate(`/inventory/${id}`);
    const handleBackClick = () => navigate(`/inventory/${id}`);

    return (
        <>
            <form onSubmit={handleSubmit} className="edit-inventory">
                <section className="edit-inventory__header">
                    <img
                        src={backlogo}
                        alt="Back Logo"
                        onClick={handleBackClick}
                    />
                    <h1 className="edit-inventory__header-word">Edit Inventory </h1>
                </section>
                <section className="edit-inventory__form">
                    <section className="edit-inventory__form-details">
                        <h2> Item Details </h2>
                        <div className="edit-inventory__form-details-box">
                            <label> Item Name </label>
                            <br />
                            <FormField
                                className="edit-inventory__form-details-input"
                                type="text"
                                placeholder="Item Name"
                                name="item_name"
                                value={inventory.item_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="edit-inventory__form-details-box">
                            <label> Description </label>
                            <br />
                            <textarea
                                className="edit-inventory__textarea"
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={inventory.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="edit-inventory__form-details-box">
                            <label> Category </label>
                            <br />
                            <select
                                className="edit-inventory__form-details-input"
                                id="category"
                                name="category"
                                value={inventory.category}
                                onChange={handleChange}
                            >
                                <option value="">Select a Category</option>
                                {CATEGORIES.map(category => (
                                    <option key={category} value={category}> {category} </option>
                                ))}
                            </select>
                        </div>
                    </section>
                    <section className="edit-inventory__form-availability">
                        <h2> Item Availability </h2>
                        <div className="edit-inventory__form-availability-box">
                            <label> Status </label>
                            <br />
                            <div className="edit-inventory__radio">
                                <label className="edit-inventory__radio-label">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="In Stock"
                                        checked={inventory.status === 'In Stock'}
                                        onChange={handleChange}
                                    />
                                    In Stock
                                </label>
                                <label className="edit-inventory__radio-label">
                                    <input                                        
                                        type="radio"
                                        name="status"
                                        value="Out of Stock"
                                        checked={inventory.status === 'Out of Stock'}
                                        onChange={handleChange}
                                    />
                                    Out of Stock
                                </label>
                            </div>
                        </div>
                        {inventory.status === 'In Stock' && (
                            <div className="edit-inventory__form-availability-box">
                                <label> Quantity </label>
                                <br />
                                <FormField
                                    className="edit-inventory__field"
                                    placeholder="Quantity"
                                    name="quantity"
                                    type="number"
                                    value={inventory.quantity}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        <div className="edit-inventory__form-availability-box">
                            <label> Warehouse </label>
                            <br />
                            <select
                                className="edit-inventory__form-availability-input"
                                id="warehouse_name"
                                name="warehouse_name"
                                value={inventory.warehouse_name}
                                onChange={handleChange}
                            >
                                <option value="">Select a Warehouse</option>
                                {warehouses.map(warehouse => (
                                    <option key={warehouse.id} value={warehouse.warehouse_name}>
                                        {warehouse.warehouse_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>
                </section>
                <div className="edit-inventory__button">
                    <CTA
                        className="CTA--secondary CTA--edit"
                        type="button"
                        onClick={handleCancel}
                        text="Cancel"
                    />
                    <CTA
                        className="CTA--primary CTA--edit"
                        type="submit"
                        onClick={handleSubmit}
                        text="Save"
                    />
                </div>
            </form>
        </>
    )
}

export default EditInventoryForm