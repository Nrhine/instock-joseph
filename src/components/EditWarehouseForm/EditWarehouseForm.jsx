import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditWarehouseForm.scss';
import backlogo from '../../assets/Icons/arrow_back-24px.svg';
import FormField from '../FormField/FormField';
import CTA from '../CTA/CTA';

const EditWarehouseForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        contactName: '',
        position: '',
        phoneNumber: '',
        email: ''
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(()=>{
        axios.get (`/api/warehouse/${id}`)
        .then((response) =>{
            setFormData(response.data);
            setLoading(false);
        })
        .catch((error) =>{
            console.error(error);
            setError('Error loading warehouse');
            setLoading(false);
        })
    },[])

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        axios.put(`/api/warehouse/${id}`, formData)
            .then(() =>{
                navigate(`/warehouse/${id}`);
            })
            .catch((error) =>{
                console.error(error);
            })
    }

    const handleCancel=() =>{
        navigate(`/warehouse/${id}`);
    }

    const handleBackClick = () => {
        navigate(`/warehouse/${id}`);
    };

    return(
        <>
        <form className="edit-warehouse">
            <section className ="edit-warehouse__header">
                <img 
                    src={backlogo} 
                    alt="Back Logo" 
                    onClick={handleBackClick} 
                />
                <h1 className ="edit-warehouse__header-word">Edit Warehouse </h1>
            </section>
            <section className="edit-warehouse__form">
                <section className="edit-warehouse__form-details">
                    <h2> Warehouse Details </h2>
                    <div className="edit-warehouse__form-details-box">
                        <label> Warehouse Name: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-details-input"
                            type = "text"
                            name="name"
                            value={formData.name}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-details-box">
                        <label> Street Address: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-details-input"
                            type = "text"
                            name="address"
                            value={formData.address}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-details-box">
                        <label> City: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-details-input"
                            type = "text"
                            name="city"
                            value={formData.city}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-details-box">
                        <label> Country: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-details-input"
                            type = "text"
                            name="country"
                            value={formData.country}
                            onchange={handleChange}
                        />
                    </div>
                </section>
                <section className="edit-warehouse__form-contact">
                    <h2> Contact Details </h2>
                    <div className="edit-warehouse__form-contact-box">
                        <label> Contact Name: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-contact-input"
                            type = "text"
                            name="contactName"
                            value={formData.contactName}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-contact-box">
                        <label> Position: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-contact-input"
                            type = "text"
                            name="position"
                            value={formData.position}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-contact-box">
                        <label> Phone Number: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-contact-input"
                            type = "text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onchange={handleChange}
                        />
                    </div>
                    <div className="edit-warehouse__form-contact-box">
                        <label> Email: </label>
                        <br />
                        <FormField
                            className="edit-warehouse__form-contact-input"
                            type = "text"
                            name="email"
                            value={formData.email}
                            onchange={handleChange}
                        />
                    </div>
                </section>
            </section>
            <div className="edit-warehouse__button">
                <CTA
                    className="CTA--secondary"
                    type="button"
                    onClick={handleCancel}
                    text="Cancel"
                />
                <CTA
                    className="CTA--primary"
                    type="submit"
                    text="Save"
                />
            </div>
        </form>
        </>
    )
}

export default EditWarehouseForm;