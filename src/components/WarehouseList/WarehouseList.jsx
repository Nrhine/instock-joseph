import CTA from '../CTA/CTA'
import FormField from '../FormField/FormField'
import './WarehouseList.scss'
import WarehouseItem from '../WarehouseItem/WarehouseItem'

function WarehouseList() {

    const sampleData = {
        "warehouse_name": "Manhattan",
        "address": "503 Broadway",
        "city": "New York",
        "country": "USA",
        "contact_name": "Parmin Aujla",
        "contact_phone": "+1 (616) 123-1234",
        "contact_email": "paujla@instock.com"
    }

  return (
    <>
        <div className='warehouse-list'>
            <div className="warehouse-list__head">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <div className="warehouse-list__nav">
                    <FormField className="form-field--search warehouse-list__search" placeholder="Search..."/>
                    <CTA className="CTA--primary warehouse-list__add" text="+ Add New Warehouse"/>
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
                <WarehouseItem data={sampleData} />
                <WarehouseItem data={sampleData} />
            </div>

        </div>
    </>
  )
}

export default WarehouseList