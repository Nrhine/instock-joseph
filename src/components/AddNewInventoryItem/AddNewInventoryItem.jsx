import './AddNewInventoryItem.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backlogo from '../../assets/Icons/arrow_back-24px.svg';
import FormField from '../FormField/FormField';
import CTA from '../CTA/CTA';

function AddNewInventoryItem() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    warehouse_id: '',
    item_name: '',
    description: '',
    category: '',
    status: '',
    quantity: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const requestData = {
      ...formData,
      quantity: parseInt(formData.quantity, 10), // Convert quantity to a number
    };

    console.log('Form data being sent:', requestData);

    axios
      .post(`${apiUrl}/api/inventories`, requestData)
      .then((response) => {
        console.log('New item added:', response.data);
        navigate('/inventory');
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Error adding item');
        setLoading(false);
      });
  };

  const handleCancel = () => {
    navigate('/inventory');
  };

  const handleBackClick = () => {
    navigate('/inventory');
  };

  return (
    <section className="add-item">
      <section className="add__header">
        <img src={backlogo} alt="Back Logo" onClick={handleBackClick} />
        <h1 className="add__header-banner">Add New Inventory Item </h1>
      </section>
      <form className="form">
        <section className="form__item">
          <section className="form__item-details">
            <h2 className="form__item-section"> Item Details </h2>
            <div className="form__item-details-box">
              <label className="form__item-label"> Item Name </label>
              <br />
              <input
                className="form__item-details-name"
                type="text"
                name="item_name"
                placeholder={'Item Name'}
                value={formData.item_name.value}
                onChange={handleChange}
              />
            </div>
            <div className="form__item-details-box">
              <label className="form__item-label"> Description </label>
              <br />
              <FormField
                className="form__item-details-description"
                type="textarea"
                name="description"
                placeholder={'Please enter a breif item description...'}
                value={formData.description.value}
                onChange={handleChange}
              />
            </div>
            <div className="form__item-details-box">
              <label className="form__item-label" htmlFor="category">
                {' '}
                Category{' '}
              </label>
              <br />
              <select
                id="category"
                name="category"
                className="form__item-details-dropdown"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Please select</option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </section>
          <section className="form__item-availability">
            <h2 className="form__item-section"> Item Availability </h2>
            <div className="form__item-details-box">
              <label className="form__item-label"> Status </label>
              <div className="form__item-details-radio-container">
                <div className="form__item-details-radio-box">
                  <input
                    className="form__item-details-radio-btn"
                    type="radio"
                    name="status" // Add name attribute for formData to recognize it
                    value="In Stock"
                    checked={formData.status === 'In Stock'}
                    onChange={handleChange} // Use handleChange to update formData directly
                  />
                  <label className="form__item-details-radio">In Stock</label>
                </div>

                <div className="form__item-details-radio-box">
                  <input
                    className="form__item-details-radio-btn"
                    type="radio"
                    name="status" // Add name attribute for formData to recognize it
                    value="Out of Stock"
                    checked={formData.status === 'Out of Stock'}
                    onChange={handleChange} // Use handleChange to update formData directly
                  />
                  <label className="form__item-details-radio">
                    Out of Stock
                  </label>
                </div>
              </div>
            </div>
            <div className="form__item-details-box">
              <label className="form__item-label"> Quantity </label>
              <br />
              <FormField
                className="form__item-details-quantity"
                type="number"
                name="quantity"
                placeholder={'0'}
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="form__item-details-box">
              <label className="form__item-label"> Warehouse </label>
              <br />
              <select
                id="warehouse_id"
                name="warehouse_id"
                className="form__item-details-dropdown"
                value={formData.warehouse_id}
                onChange={handleChange}
              >
                <option value="">Please select</option>
                <option value="1">Manhattan</option>
                <option value="2">Washington</option>
                <option value="3">Jersey</option>
                <option value="4">SF</option>
                <option value="5">Santa Monica</option>
                <option value="6">Seattle</option>
                <option value="7">Miami</option>
                <option value="8">Boston</option>
              </select>
            </div>
          </section>
        </section>
        <div className="add-warehouse__button">
          <CTA
            className="CTA--add CTA--secondary" // Add secondary class name to avoid affecting buttons outside this component
            type="button"
            onClick={handleCancel}
            text="Cancel"
          />
          <CTA
            className="CTA--add CTA--primary" // Add secondary class name to avoid affecting buttons outside this component
            type="button"
            onClick={handleSubmit}
            text=" + Add Item"
          />
        </div>
      </form>
    </section>
  );
}

export default AddNewInventoryItem;
