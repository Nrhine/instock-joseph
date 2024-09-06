import './InventoryList.scss';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import sort from '../../assets/Icons/sort-24px.svg';
import right from '../../assets/Icons/chevron_right-24px.svg';

function InventoryList() {
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
          <img src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">category</p>
          <img src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">status</p>
          <img src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">qty</p>
          <img src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">warehouse</p>
          <img src={sort} alt="sort" />
        </div>
        <div className="inventory__sort-container">
          <p className="inventory__sort-label">actions</p>
          <img src={sort} alt="sort" />
        </div>
      </section>
      <section className="inventory__item">
        <div className="inventory__item-info">
          <p className="inventory__item-label">inventory item</p>
          <Link className="inventory__item-link" to={'/'}>
            <p className="inventory__item-name">Television</p>
            <img src={right} alt="go to item" />
          </Link>
          <p className="inventory__item-label">inventory item</p>
          <p className="inventory__item-label">inventory item</p>
        </div>
      </section>
    </section>
  );
}

export default InventoryList;
