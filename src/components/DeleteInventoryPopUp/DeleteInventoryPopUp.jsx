import "./DeleteInventoryPopUp.scss";
import close from "../../assets/Icons/close-24px.svg";
import CTA from "../CTA/CTA";

const DeleteInventoryPopUp = () => {
  return (
    <div className="delete-inventory-popup">
      <img src={close} alt="close" className="delete-inventory-popup__close" />
      <h1 className="delete-inventory-popup__title">
        Delete Television inventory item?
      </h1>
      <p className="delete-inventory-popup__text">
        Please confirm that you'd like to delete Television from the inventory
        list. You Won't be able to undo this action.
      </p>
      <div className="delete-inventory-popup__buttons-container">
        <CTA className="CTA--secondary" text="Cancel" />
        <CTA className="CTA--delete" text="Delete" />
      </div>
    </div>
  );
};
export default DeleteInventoryPopUp;
