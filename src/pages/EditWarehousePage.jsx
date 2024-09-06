import React from 'react';
import EditWarehouseForm from '../components/EditWarehouseForm/EditWarehouseForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const EditWarehousePage = () =>{
    return(
        <div className = "edit">
            <Header />
            <EditWarehouseForm />
            <Footer />
        </div>
    )
}
export default EditWarehousePage;