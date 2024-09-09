import "./WarehouseItem.scss";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteWarehousePopUp from "../DeleteWarehousePopUp/DeleteWarehousePopUp";

function WarehouseItem({ data }) {
  const [popUp, setPopup] = useState(false);

  const handleDeleteClick = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <div className="warehouse-item">
        <div className="warehouse-item__body">
          <div className="warehouse-item__location">
            <div className="warehouse-item__cell">
              <h3 className="warehouse-item__label">WAREHOUSE</h3>
              <Link to={`/warehouse/${data.id}`}>
                <div className="warehouse-item__more">
                  <p className="p2 warehouse-item__copy warehouse-item__link semi-bold">
                    {data.warehouse_name}
                  </p>
                  <img
                    src={chevron}
                    alt="link icon"
                    className="warehouse-item__icon-link"
                  />
                </div>
              </Link>
            </div>
            <div className="warehouse-item__cell">
              <h3 className="warehouse-item__label">ADDRESS</h3>
              <p className="p2 warehouse-item__copy">
                {data.address}, {data.city}, {data.country}
              </p>
            </div>
          </div>
          <div className="warehouse-item__contact">
            <div className="warehouse-item__cell">
              <h3 className="warehouse-item__label">CONTACT NAME</h3>
              <p className="p2 warehouse-item__copy">{data.contact_name}</p>
            </div>
            <div className="warehouse-item__cell">
              <h3 className="warehouse-item__label">CONTACT INFORMATION</h3>
              <p className="p2 warehouse-item__copy">
                {data.contact_phone}
                <br />
                {data.contact_email}
              </p>
            </div>
          </div>
        </div>
        <div className="warehouse-item__icons">
          <img
            src={trash}
            alt="delete icon"
            className="warehouse-item__icon"
            onClick={handleDeleteClick}
          />
          <Link to={`/warehouse/${data.id}/edit`}>
            <img src={edit} alt="edit icon" className="warehouse-item__icon" />
          </Link>
        </div>
      </div>
      <div className="warehouse-item__divider"></div>
      {popUp && (
        <DeleteWarehousePopUp
          warehouseName={data.warehouse_name}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}

export default WarehouseItem;
