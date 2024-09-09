import "./DeleteInventoryPopUp.scss";
import close from "../../assets/Icons/close-24px.svg";
import CTA from "../CTA/CTA";
import axios from "axios";

const DeleteInventoryPopUp = ({ item, onClose, onDelete }) => {
  const handleDelete = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/inventories/${
        item.id
      }`;
      await axios.delete(apiUrl);

      onDelete(item.id);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    onClose();
  };

  return (
    <>
      <div className="delete-warehouse-popup__overlay" onClick={onClose}></div>

      <div className="delete-inventory-popup">
        <img
          src={close}
          alt="close"
          className="delete-inventory-popup__close"
          onClick={onClose}
        />
        <h1 className="delete-inventory-popup__title">
          Delete {item?.item_name} inventory item?
        </h1>
        <p className="delete-inventory-popup__text">
          Please confirm that you'd like to delete {item?.item_name} from the
          inventory list. You won't be able to undo this action.
        </p>
        <div className="delete-inventory-popup__buttons-container">
          <CTA className="CTA--secondary" text="Cancel" onClick={onClose} />
          <CTA className="CTA--delete" text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};
export default DeleteInventoryPopUp;
