import { Link } from 'react-router-dom'
import './InventoryDetails.scss'
import back_arrow from '../../assets/Icons/arrow_back-24px.svg';
import edit from '../../assets/Icons/edit-white-24px.svg';

function InventoryDetails() {

    let status = 'In Stock';

  return (
    <>
        <section className="inventory-detail">
            <div className="inventory-detail__top">
                <Link to={'/'}>
                    <img src={back_arrow} alt="go back" />
                </Link>
                <h1 className="inventory-detail__title">Television</h1>
                <Link to={'/'}>
                    <div className="inventory-detail__edit-container">
                        <img src={edit} alt="Edit Inventory Icon" className="inventory-detail__edit" />
                        <span className="warehouse__edit-text">Edit</span>
                    </div>
                </Link>
            </div>
            <div className="inventory-detail__divider"></div>
            <div className="inventory-detail__bottom">
                <div className="inventory-detail__left">
                    <div className="inventory-detail__row">
                        <h4 className="inventory-detail__label">ITEM DESCRIPTION:</h4>
                        <p className="p2 inventory-detail__copy">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className="inventory-detail__row">
                        <h4 className="inventory-detail__label">CATEGORY:</h4>
                        <p className="p2 inventory-detail__copy">Electronics</p>
                    </div>
                </div>
                <div className="inventory-detail__right">
                    <div className="inventory-detail__row--split">
                        <div className="inventory-detail__cell">
                            <h4 className="inventory-detail__label">STATUS:</h4>
                            <div className={`inventory-detail__tag ${status === 'In Stock' ? 'inventory-detail__tag--in-stock' : 'inventory-detail__tag--out-of-stock'}`}>
                                <p className={`p2 inventory-detail__copy ${status === 'In Stock' ? 'inventory-detail__stock--in' : 'inventory-detail__stock--out'}`}>In Stock</p>
                            </div>
                        </div>
                        <div className="inventory-detail__cell">
                            <h4 className="inventory-detail__label">QUANTITY:</h4>
                            <p className="p2 inventory-detail__copy">500</p>
                        </div>
                    </div>
                    <div className="inventory-detail__row">
                        <h4 className="inventory-detail__label">WAREHOUSE:</h4>
                        <p className="p2 inventory-detail__copy">Manhattan</p>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default InventoryDetails