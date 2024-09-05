import "./DeleteWarehousePopUp.scss";
import close from "../../assets/Icons/close-24px.svg";
import CTA from "../CTA/CTA";

const DeleteWarehousePopUp = () => {
  return (
    <div className="delete-warehouse-popup">
      <img src={close} alt="close" className="delete-warehouse-popup__close" />
      <h1 className="delete-warehouse-popup__title">
        Delete Washington warehouse?
      </h1>
      <p className="delete-warehouse-popup__text">
        Please confirm that you’d like to delete the Washington from the list of
        warehouses. You won’t be able to undo this action.
      </p>
      <div className="delete-warehouse-popup__buttons-container">
        <CTA className="CTA--secondary" text="Cancel" />
        <CTA className="CTA--delete" text="Delete" />
      </div>
    </div>
  );
};
export default DeleteWarehousePopUp;
