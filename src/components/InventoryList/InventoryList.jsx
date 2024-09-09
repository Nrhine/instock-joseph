import "./InventoryList.scss";
import { Link } from "react-router-dom";
import CTA from "../CTA/CTA";
import sort from "../../assets/Icons/sort-24px.svg";
import right from "../../assets/Icons/chevron_right-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import { useState } from "react";
import DeleteInventoryPopUp from "../DeleteInventoryPopUp/DeleteInventoryPopUp";

function InventoryList({ items }) {
  const [popUp, setPopup] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
    setItemToDelete(null);
  };

  return (
    <section className="inventory__page">
      <section className="inventory__header">
        <h1 className="inventory">Inventory</h1>
        <div className="inventory__header-container">
          <input
            type="search"
            placeholder="Search..."
            className="inventory__header-search"
          />
          <Link className="inventory__header-link" to="/inventory/add">
            <CTA className="inventory__header-cta" />
          </Link>
        </div>
      </section>
      <section className="inventory__sort">
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">inventory item</p>
          <img className="inventory__sort-img" src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">category</p>
          <img className="inventory__sort-img" src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">status</p>
          <img className="inventory__sort-img" src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">qty</p>
          <img className="inventory__sort-img" src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">warehouse</p>
          <img className="inventory__sort-img" src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">actions</p>
        </div>
      </section>

      {items.map((item) => (
        <section key={item.id} className="inventory__item">
          <div className="inventory__item-info-left">
            <p className="inventory__item-label">inventory item</p>
            <Link
              className="inventory__item-name-link"
              to={`/inventory/${item.id}`}
            >
              <p className="inventory__item-name">{item.item_name}</p>
              <img src={right} alt="go to item" />
            </Link>
            <p className="inventory__item-label">category</p>
            <p className="inventory__item-category">{item.category}</p>
          </div>
          <div className="inventory__item-info-right">
            <p className="inventory__item-label">status</p>
            <div className="inventory__item-status">
              {item.status === "In Stock" ? (
                <p className="inventory__item-instock">{item.status}</p>
              ) : (
                <p className="inventory__item-outstock">{item.status}</p>
              )}
            </div>
            <p className="inventory__item-label">qty</p>
            <p className="inventory__item-quantity">{item.quantity}</p>
            <p className="inventory__item-label">warehouse</p>
            <p className="inventory__item-warehouse">{item.warehouse_name}</p>
          </div>
          <div className="inventory__item-actions">
            <img
              src={trash}
              alt="delete item"
              onClick={() => handleDeleteClick(item)}
            />
            <Link
              className="inventory__item-actions-link"
              to={`/inventory/${item.id}/edit`}
            >
              <img src={edit} alt="edit item" />
            </Link>
          </div>
        </section>
      ))}
      {popUp && (
        <DeleteInventoryPopUp item={itemToDelete} onClose={handleClosePopup} />
      )}
    </section>
  );
}

export default InventoryList;
