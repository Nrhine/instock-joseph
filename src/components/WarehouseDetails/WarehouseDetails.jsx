import './WarehouseDetails.scss';
import { Link } from 'react-router-dom';
import back_arrow from '../../assets/Icons/arrow_back-24px.svg';
import edit from '../../assets/Icons/edit-white-24px.svg';

function WarehouseDetails({ data }) {
  // Check if data is defined and has the expected structure
  if (!data || data.length === 0) {
    return <p>Loading...</p>; // Render a loading message or fallback UI
  }

  const warehouse = data;

  return (
    <>
      <section className="warehouse">
        <div className="warehouse__container-top">
          <Link to={'/'}>
            <img src={back_arrow} alt="go back" />
          </Link>
          <h1 className="warehouse__header">{warehouse.warehouse_name}</h1>
          <Link to={'/warehouse/:id/edit'}>
            <div className="warehouse__edit-container">
              <img
                src={edit}
                alt="edit warehouse"
                className="warehouse__edit"
              />
              <span className="warehouse__edit-text">Edit</span>
            </div>
          </Link>
        </div>
        <div className="warehouse__container-bottom">
          <div className="warehouse__address-container">
            <p className="warehouse__details-label">warehouse address:</p>
            <p className="warehouse__address">
              {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <div className="warehouse__contact-container">
            <div className="warehouse__contact-container-left">
              <p className="warehouse__details-label">contact name:</p>
              <p className="warehouse__contact">{warehouse.contact_name}</p>
              <p className="warehouse__contact">{warehouse.contact_position}</p>
            </div>
            <div className="warehouse__contact-container-right">
              <p className="warehouse__details-label">contact information:</p>
              <p className="warehouse__contact">{warehouse.contact_phone}</p>
              <p className="warehouse__contact">{warehouse.contact_email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetails;
