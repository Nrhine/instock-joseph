import './InventoryList.scss';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import sort from '../../assets/Icons/sort-24px.svg';
import right from '../../assets/Icons/chevron_right-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg';
import trash from '../../assets/Icons/delete_outline-24px.svg';

function InventoryList() {
  const item = [
    {
      name: 'Television',
      category: 'Electronics',
      status: 'In Stock',
      quantity: '500',
      warehouse: 'Manhattan',
    },
  ];

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
          <CTA className="inventory__header-cta" />
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
      <section className="inventory__item">
        <div className="inventory__item-info-left">
          <p className="inventory__item-label">inventory item</p>
          <Link className="inventory__item-name-link" to={'/'}>
            <p className="inventory__item-name">{item[0].name}</p>
            <img src={right} alt="go to item" />
          </Link>
          <p className="inventory__item-label">category</p>
          <p className="inventory__item-category">{item[0].category}</p>
        </div>
        <div className="inventory__item-info-right">
          <p className="inventory__item-label">status</p>
          {item[0].status === 'In Stock' ? (
            <p className="inventory__item-instock">{item[0].status}</p>
          ) : (
            <p className="inventory__item-outstock">{item[0].status}</p>
          )}
          <p className="inventory__item-label">qty</p>
          <p className="inventory__item-quantity">{item[0].quantity}</p>
          <p className="inventory__item-label">warehouse</p>
          <p className="inventory__item-warehouse">{item[0].warehouse}</p>
        </div>
        <div className="inventory__item-actions">
          <Link className="inventory__item-actions-link" to="/">
            <img src={trash} alt="delete item" />
          </Link>
          <Link className="inventory__item-actions-link" to="/">
            <img src={edit} alt="edit item" />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default InventoryList;
