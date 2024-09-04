import CTA from '../CTA/CTA'
import FormField from '../FormField/FormField'
import './WarehouseList.scss'

function WarehouseList() {
  return (
    <>
        <CTA className="CTA--primary" text="+ Add New Warehouse"/>
        <FormField className="form-field--search" placeholder="Search..."/>
    </>
  )
}

export default WarehouseList