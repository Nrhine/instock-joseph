import './WarehouseInventoryList.scss';
import { Link } from 'react-router-dom';
import recycleBin from '../../assets/Icons/delete_outline-24px.svg';
import pencil from '../../assets/Icons/edit-24px.svg';
import chevron from '../../assets/Icons/chevron_right-24px.svg';
import DeleteInventoryPopUp from '../DeleteInventoryPopUp/DeleteInventoryPopUp';

function WarehouseInventoryList({ data, name }) {
  return (
    <>

      <div className="inventory__container">
        <div className="inventory__hide-mobile">
          <h4 className="inventory__inventory-menu inventory__inventory-menu-item">Inventory Item</h4>
          <h4 className="inventory__inventory-menu">Category</h4>
          <h4 className="inventory__inventory-menu">Status</h4>
          <h4 className="inventory__inventory-menu">Quantity</h4>
          <h4 className="inventory__inventory-menu">Warehouse</h4>
          <h4 className="inventory__inventory-menu">Actions</h4>
        </div>



        <div className="inventory__outer">
          {data.map((item) => (
            <div key={item.id} className="inventory__container-column">
              <div className="inventory__outer-wrapper">
                <div className="inventory__wrapper inventory__wrapper-bigger">

                  <div className="inventory__wrap">
                    <h4 className="inventory__inventory-menu inventory__mobile">Inventory Item</h4>
                    <Link to={`/inventory/${item.id}`}>
                      <div className="inventory__item-chevron">
                        <h3 className="inventory__inventory-item-name inventory__item">{item.item_name}</h3>
                        <img className="inventory__chevron" src={chevron} alt="link icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="inventory__wrap">
                    <h4 className="inventory__inventory-menu  inventory__mobile">Category</h4>
                    <h3 className="inventory__inventory-category inventory__item">{item.category}</h3>
                  </div>
                </div>

                <div className="inventory__wrapper inventory__wrapper-bigger">
                  <div className="inventory__wrap">
                    <h4 className="inventory__inventory-menu inventory__mobile">Status</h4>
                    <h4 className={`inventory__item ${item.status === 'In Stock' ? 'in-stock-tag' : 'out-of-stock-tag'}`}>{item.status}</h4>
                  </div>
                  <div className="inventory__wrap">
                    <h4 className="inventory__inventory-menu inventory__mobile inventory__qty">QTY</h4>
                    <h3 className="inventory__inventory-quantity inventory__item">{item.quantity}</h3>
                  </div>
                </div>
              </div>

              <div className="inventory__outer-wrapper inventory__wrapper-bottom-mobile">
                <div className="inventory__wrapper inventory__wrapper-zero"></div>
                <div className="inventory__wrapper">
                  <div className="inventory__wrap">
                    <h4 className="inventory__inventory-menu inventory__mobile">Warehouse</h4>
                    <h3 className="inventory__inventory-warehouse inventory__item">{name[0].warehouse_name}</h3>
                  </div>
                </div>
              </div>

              <h4 className="inventory__inventory-menu inventory__hide">Actions</h4>
              <div className="inventory__actions">
                {/* <Link to={<DeleteInventoryPopUp data={item.id} />}> */}
                  <span className="inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
                {/* </Link> */}
                <Link to={`/inventory/${item.id}/edit`}>
                  <span className="inventory__edit"><img src={pencil} alt="edit" /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="inventory__separator"></div>

    </>
  );
}

export default WarehouseInventoryList;
