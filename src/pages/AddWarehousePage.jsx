import React from 'react';
import AddWarehouseForm from '../components/AddWarehouseForm/AddWarehouseForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AddWarehousePage = () =>{
    return(
        <div className = "add">
            <Header />
            <AddWarehouseForm />
            <Footer />
        </div>
    )
}
export default AddWarehousePage;