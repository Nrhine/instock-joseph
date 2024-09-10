import './WarehouseInventoryList.scss';
import { Link } from 'react-router-dom';
import { useState } from "react";
import recycleBin from '../../assets/Icons/delete_outline-24px.svg';
import pencil from '../../assets/Icons/edit-24px.svg';
import chevron from '../../assets/Icons/chevron_right-24px.svg';
import DeleteInventoryPopUp from '../DeleteInventoryPopUp/DeleteInventoryPopUp';

function WarehouseInventoryList({ data, name }) {
  return (
    <>

      <div className="warehouse-inventory__container">
        <div className="warehouse-inventory__hide-mobile">
          <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__inventory-menu-item">Inventory Item</h4>
          <h4 className="warehouse-inventory__inventory-menu">Category</h4>
          <h4 className="warehouse-inventory__inventory-menu">Status</h4>
          <h4 className="warehouse-inventory__inventory-menu">Quantity</h4>
          <h4 className="warehouse-inventory__inventory-menu">Warehouse</h4>
          <h4 className="warehouse-inventory__inventory-menu">Actions</h4>
        </div>



        <div className="warehouse-inventory__outer">
          {data.map((item) => (
            <div key={item.id} className="warehouse-inventory__container-column">
              <div className="warehouse-inventory__outer-wrapper">
                <div className="warehouse-inventory__wrapper warehouse-inventory__wrapper-bigger">

                  <div className="warehouse-inventory__wrap">
                    <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__mobile">Inventory Item</h4>
                    <Link to={`/inventory/${item.id}`}>
                      <div className="warehouse-inventory__item-chevron">
                        <h3 className="warehouse-inventory__inventory-item-name warehouse-inventory__item semi-bold">{item.item_name}</h3>
                        <img className="warehouse-inventory__chevron" src={chevron} alt="link icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="warehouse-inventory__wrap">
                    <h4 className="warehouse-inventory__inventory-menu  warehouse-inventory__mobile">Category</h4>
                    <h3 className="warehouse-inventory__inventory-category warehouse-inventory__item">{item.category}</h3>
                  </div>
                </div>

                <div className="warehouse-inventory__wrapper warehouse-inventory__wrapper-bigger">
                  <div className="warehouse-inventory__wrap">
                    <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__mobile">Status</h4>
                    <h4 className={`warehouse-inventory__item ${item.status === 'In Stock' ? 'in-stock-tag' : 'out-of-stock-tag'}`}>{item.status}</h4>
                  </div>
                  <div className="warehouse-inventory__wrap">
                    <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__mobile warehouse-inventory__qty">QTY</h4>
                    <h3 className="warehouse-inventory__inventory-quantity warehouse-inventory__item">{item.quantity}</h3>
                  </div>
                </div>
              </div>

              <div className="warehouse-inventory__outer-wrapper warehouse-inventory__wrapper-bottom-mobile">
                <div className="warehouse-inventory__wrapper warehouse-inventory__wrapper-zero"></div>
                <div className="warehouse-inventory__wrapper">
                  <div className="warehouse-inventory__wrap">
                    <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__mobile">Warehouse</h4>
                    <h3 className="warehouse-inventory__inventory-warehouse warehouse-inventory__item">{name.warehouse_name}</h3>
                  </div>
                </div>
              </div>

              <h4 className="warehouse-inventory__inventory-menu warehouse-inventory__hide">Actions</h4>
              <div className="warehouse-inventory__actions">
                {/* <Link to={<DeleteInventoryPopUp data={item.id} />}> */}
                  <span className="warehouse-inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
                {/* </Link> */}
                <Link to={`/inventory/${item.id}/edit`}>
                  <span className="warehouse-inventory__edit"><img src={pencil} alt="edit" /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="warehouse-inventory__separator"></div>
    </>
  );
}

export default WarehouseInventoryList;
