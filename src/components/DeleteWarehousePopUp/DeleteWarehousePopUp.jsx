import "./DeleteWarehousePopUp.scss";
import close from "../../assets/Icons/close-24px.svg";
import CTA from "../CTA/CTA";

const DeleteWarehousePopUp = ({ warehouseName, onClose }) => {
  return (
    <>
      <div className="delete-warehouse-popup__overlay" onClick={onClose}></div>

      <div className="delete-warehouse-popup">
        <img
          src={close}
          alt="close"
          className="delete-warehouse-popup__close"
          onClick={onClose}
        />
        <div className="delete-warehouse-popup__text-container">
          <h1 className="delete-warehouse-popup__title">
            Delete {warehouseName} warehouse?
          </h1>
          <p className="delete-warehouse-popup__text">
            Please confirm that you’d like to delete {warehouseName} from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="delete-warehouse-popup__buttons-container">
          <CTA className="CTA--secondary" text="Cancel" onClick={onClose} />
          <CTA className="CTA--delete" text="Delete" />
        </div>
      </div>
    </>
  );
};

export default DeleteWarehousePopUp;
