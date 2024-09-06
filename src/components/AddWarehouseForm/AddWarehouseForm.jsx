import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './addWarehouseForm.scss';
import backlogo from '../../assets/Icons/arrow_back-24px.svg';
import FormField from '../FormField/FormField';
import CTA from '../CTA/CTA';

const AddWarehouseForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: ' ',
        address: ' ',
        city: ' ',
        country: ' ',
        contactName: ' ',
        position: ' ',
        phoneNumber: ' ',
        email: ' '
    })
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post(`http://localhost:8080/warehouses`, formData)
        .then((response) => {
            console.log('New warehouse added:', response.data);
            navigate('/warehouse'); 
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setError('Error adding warehouse');
            setLoading(false);
        }) 
    }

    const handleCancel = () => {
        navigate('/warehouse');
    };

    const handleBackClick = () => {
        navigate('/warehouse');
    };

    return(
        <>
        <form className="add-warehouse">
            <section className ="add-warehouse__header">
                <img 
                    src={backlogo} 
                    alt="Back Logo" 
                    onClick={handleBackClick} 
                />
                <h1 className ="add-warehouse__header-word">Add New Warehouse </h1>
            </section>
            <section className="add-warehouse__form">
                <section className="add-warehouse__form-details">
                    <h2> Warehouse Details </h2>
                    <div className="add-warehouse__form-details-box">
                        <label> Warehouse Name: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-details-input"
                            type = "text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-details-box">
                        <label> Street Address: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-details-input"
                            type = "text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-details-box">
                        <label> City: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-details-input"
                            type = "text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-details-box">
                        <label> Country: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-details-input"
                            type = "text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                </section>
                <section className="add-warehouse__form-contact">
                    <h2> Contact Details </h2>
                    <div className="add-warehouse__form-contact-box">
                        <label> Contact Name: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-contact-input"
                            type = "text"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-contact-box">
                        <label> Position: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-contact-input"
                            type = "text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-contact-box">
                        <label> Phone Number: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-contact-input"
                            type = "text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-warehouse__form-contact-box">
                        <label> Email: </label>
                        <br />
                        <FormField
                            className="add-warehouse__form-contact-input"
                            type = "text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
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
                    text=" + Add Warehouse"
                />
            </div>
        </form>
       </>
    )
}
export default AddWarehouseForm;