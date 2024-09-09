import { Link, useParams } from 'react-router-dom'
import './InventoryDetails.scss'
import back_arrow from '../../assets/Icons/arrow_back-24px.svg';
import edit from '../../assets/Icons/edit-white-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios'

function InventoryDetails() {

    let itemId = useParams().id;
    const apiUrl = `${import.meta.env.VITE_API_URL}`
    const [inventoryData, setInventoryData] = useState([]);

    const fetchItem = async () => {
        try {
            let response = await axios.get(
                apiUrl + "/inventory"
            )
            let itemData = response.data.find((item) => item.id == itemId)
            setInventoryData(itemData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchItem()
    }, [])

  return (
    <>
        <section className="inventory-detail">
            <div className="inventory-detail__top">
                <Link to={'/'}>
                    <img src={back_arrow} alt="go back" />
                </Link>
                <h1 className="inventory-detail__title">{inventoryData.item_name}</h1>
                <Link to={`/inventory/${itemId}/edit`}>
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
                        <p className="p2 inventory-detail__copy">{inventoryData.description}</p>
                    </div>
                    <div className="inventory-detail__row">
                        <h4 className="inventory-detail__label">CATEGORY:</h4>
                        <p className="p2 inventory-detail__copy">{inventoryData.category}</p>
                    </div>
                </div>
                <div className="inventory-detail__right">
                    <div className="inventory-detail__row--split">
                        <div className="inventory-detail__cell">
                            <h4 className="inventory-detail__label">STATUS:</h4>
                            <div className={`inventory-detail__tag ${inventoryData.status === 'In Stock' ? 'inventory-detail__tag--in-stock' : 'inventory-detail__tag--out-of-stock'}`}>
                                <p className={`p2 inventory-detail__copy ${inventoryData.status === 'In Stock' ? 'inventory-detail__stock--in' : 'inventory-detail__stock--out'}`}>{inventoryData.status}</p>
                            </div>
                        </div>
                        <div className="inventory-detail__cell">
                            <h4 className="inventory-detail__label">QUANTITY:</h4>
                            <p className="p2 inventory-detail__copy">{inventoryData.quantity}</p>
                        </div>
                    </div>
                    <div className="inventory-detail__row">
                        <h4 className="inventory-detail__label">WAREHOUSE:</h4>
                        <p className="p2 inventory-detail__copy">{inventoryData.warehouse_name}</p>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default InventoryDetails