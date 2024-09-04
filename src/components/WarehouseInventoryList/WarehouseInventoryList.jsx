import './WarehouseInventoryList.scss'
import recycleBin from '../../assets/Icons/delete_outline-24px.svg'
import pencil from '../../assets/Icons/edit-24px.svg'


function WarehouseInventoryList() {
    return (
        <>
            <div className="inventory__container">
            {/* {fetchedData.map((item) => ( key={item.id} */}
                <div className="inventory__container-upper-mobile">
                    <div className="inventory__container-unit">
                        <h4 className="inventory__inventory-menu">Inventory Item</h4>
                        <h3 className="inventory__inventory-item">Television &gt; </h3>
                    </div>
                    <div className="inventory__container-unit">
                        <h4 className="inventory__inventory-menu">Status</h4>
                        <h3 className="inventory__inventory-status">IN STOCK</h3>
                    </div>
                </div>
                <div className="inventory__container-middle-mobile">
                    <div className="inventory__container-unit">
                        <h4 className="inventory__inventory-menu">Category</h4>
                        <h3 className="inventory__inventory-category">Electronics</h3>
                    </div>
                    <div className="inventory__container-unit">
                        <h4 className="inventory__inventory-menu">QTY</h4>
                        <h3 className="inventory__inventory-quantity">500</h3>
                    </div>
                </div>
                <div className="inventory__container-bottom-mobile">
                    <div className="inventory__container-unit">
                        <h4 className="inventory__inventory-menu">Warehouse</h4>
                        <h3 className="inventory__inventory-warehouse">King West</h3>
                    </div>
                </div>

                <span class="in-stock-tag">In Stock</span>
                <span class="out-of-stock-tag">Out of Stock</span>

                <span className="inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
                <span className="inventory__recycle-bin"><img src={pencil} alt="delete" /></span>
            {/* ))} */}
            </div>
        </>
    )
}

export default WarehouseInventoryList