import './WarehouseDetails.scss';
import back_arrow from '../assets/Icons/arrow_back-24px.svg';
import edit from '../assets/Icons/edit-white-24px.svg';

function WarehouseDetails() {
  return (
    <section className="test">
      <section className="warehouse">
        <div className="warehouse__container-top">
          <img src={back_arrow} alt="go back" />
          <h1 className="warehouse__header">Washington</h1>
          <div className="warehouse__edit-container">
            <img src={edit} alt="edit warehouse" className="warehouse__edit" />
            <span className="warehouse__edit-text">Edit</span>
          </div>
        </div>
        <div className="warehouse__container-bottom">
          <div className="warehouse__address-container">
            <p className="warehouse__details-label">warehouse address:</p>
            <p className="warehouse__address">
              33 Pearl Street SW, Washington, USA
            </p>
          </div>
          <div className="warehouse__contact-container">
            <div className="warehouse__contact-container-left">
              <p className="warehouse__details-label">contact name:</p>
              <p className="warehouse__contact">Graeme Lyon</p>
              <p className="warehouse__contact">Warehouse Manager</p>
            </div>
            <div className="warehouse__contact-container-right">
              <p className="warehouse__details-label">contact information:</p>
              <p className="warehouse__contact">+1 (647) 504-0911</p>
              <p className="warehouse__contact">glyon@instock.com</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WarehouseDetails;
