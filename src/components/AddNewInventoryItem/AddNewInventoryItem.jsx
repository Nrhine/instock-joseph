import './AddNewInventoryItem.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import backlogo from '../../assets/Icons/arrow_back-24px.svg';
import FormField from '../FormField/FormField';
import CTA from '../CTA/CTA';

function AddNewInventoryItem() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('inStock'); // Default status
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const [formData, setFormData] = useState({
    id: `${uuid()}`,
    warehouse_id: ' ',
    item_name: ' ',
    description: ' ',
    category: ' ',
    status: `${status}`,
    quantity: ' ',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post(`http://localhost:8080/warehouses`, formData)
      .then((response) => {
        console.log('New warehouse added:', response.data);
        navigate('/inventory');
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Error adding warehouse');
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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
              <select id="category" className="form__item-details-dropdown">
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
                <div>
                  <label className="form__item-details-radio">
                    <input
                      type="radio"
                      value="In Stock"
                      checked={status === 'In Stock'}
                      onChange={handleStatusChange}
                    />
                    In Stock
                  </label>
                </div>

                <div>
                  <label className="form__item-details-radio">
                    <input
                      type="radio"
                      value="Out of Stock"
                      checked={status === 'Out of Stock'}
                      onChange={handleStatusChange}
                    />
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
              <select id="category" className="form__item-details-dropdown">
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
