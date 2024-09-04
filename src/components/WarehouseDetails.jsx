import './WarehouseDetails.scss';
import back_arrow from '../assets/Icons/arrow_back-24px.svg';
import edit from '../assets/Icons/edit-white-24px.svg';

function WarehouseDetails() {
  return (
    <>
      <div className="warehouse__container">
        <div className="warehouse__container-top">
          <img src={back_arrow} alt="go back" />
          <h1>Washington</h1>
          <img src={edit} alt="edit warehouse" className="warehouse" />
        </div>
      </div>
    </>
  );
}

export default WarehouseDetails;
