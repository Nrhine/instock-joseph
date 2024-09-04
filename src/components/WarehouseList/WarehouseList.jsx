import CTA from '../CTA/CTA'
import FormField from '../FormField/FormField'
import './WarehouseList.scss'

import trash from '../../assets/Icons/delete_outline-24px.svg'
import edit from '../../assets/Icons/edit-24px.svg'

function WarehouseList() {
  return (
    <>
        <div className='warehouse-list'>
            <div className="warehouse-list__head">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <FormField className="form-field--search warehouse-list__search" placeholder="Search..."/>
                <CTA className="CTA--primary warehouse-list__add" text="+ Add New Warehouse"/>
            </div>
            <div className="warehouse-list__table">
                <div className="warehouse-item">
                    <div className="warehouse-item__body">
                        <div className="warehouse-item__location">
                            <p className="warehouse-item__label">WAREHOUSE</p>
                            <p className="warehouse-item__copy warehouse-item__link">Manhattan</p>
                            <p className="warehouse-item__label">ADDRESS</p>
                            <p className="warehouse-item__copy">503 Broadway, New York, USA</p>
                        </div>
                        <div className="warehouse-item__contact">
                            <p className="warehouse-item__label">CONTACT NAME</p>
                            <p className="warehouse-item__copy">PARMIN AUJLA</p>
                            <p className="warehouse-item__label">CONTACT INFORMATION</p>
                            <p className="warehouse-item__copy">paujla@instock.com</p>
                        </div>
                    </div>
                    <div className="warehouse-item__icons">
                        <img src={trash} alt="delete icon" className="warehouse-item__icon" />
                        <img src={edit} alt="delete icon" className="warehouse-item__icon" />
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default WarehouseList