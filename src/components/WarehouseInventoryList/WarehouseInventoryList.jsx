import './WarehouseInventoryList.scss'
import { useState } from 'react';
import recycleBin from '../../assets/Icons/delete_outline-24px.svg'
import pencil from '../../assets/Icons/edit-24px.svg'
import chevron from '../../assets/Icons/chevron_right-24px.svg'


function WarehouseInventoryList() {
    const [inventoryCount, setInventoryCount] = useState(1)
    // const [inventoryData, setInventoryData] = useState([]);

    // useEffect(() => {
    //     const fetchInventoryData = async () => {
    //         try {
    //             const response = await axios.get(`{API_URL}`);
    //             setInventoryData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching inventory data:', error);
    //         }
    //     };

    //     fetchInventoryData();
    // }, []);

    // {inventoryData.map((item) => (key={item.id} {item.inventoryItem}))}
    // {item.contactName.name}
    // {item.contactInformation.phoneNumber}
    // <recycleBin itemId={item.id} />
    // <pencil itemId={item.id} />

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

                <div className="inventory__container-column">
                    <div className="inventory__outer-wrapper">

                        {/* <div className="inventory__wrapper"> */}
                            <h4 className="inventory__inventory-menu inventory__mobile">Inventory Item</h4>
                            <div className="inventory__item-chevron">
                                <h3 className="inventory__inventory-item-name inventory__item">Phone Charger</h3>
                                <img className='inventory__chevron' src={chevron} alt="link icon" />
                            </div>
                        {/* </div> */}

                        {/* <div className="inventory__wrapper"> */}
                            <h4 className="inventory__inventory-menu  inventory__mobile">Category</h4>
                            <h3 className="inventory__inventory-category inventory__item">Electronics</h3>
                        {/* </div> */}

                        {/* <div className="inventory__wrapper"> */}
                            <h4 className="inventory__inventory-menu inventory__mobile">Status</h4>
                            {inventoryCount > 0 ? (
                                <h4 className="in-stock-tag inventory__item">In Stock</h4>
                            ) : (
                                <h4 className="out-of-stock-tag inventory__item">Out of Stock</h4>
                            )}
                        {/* </div> */}

                        {/* <div className="inventory__wrapper"> */}
                            <h4 className="inventory__inventory-menu inventory__mobile">QTY</h4>
                            <h3 className="inventory__inventory-quantity inventory__item">500</h3>
                        {/* </div> */}

                        {/* <div className="inventory__wrapper"> */}
                            <h4 className="inventory__inventory-menu inventory__mobile">Warehouse</h4>
                            <h3 className="inventory__inventory-warehouse inventory__item">King West</h3>
                        {/* </div> */}
                    </div>

                    <h4 className="inventory__inventory-menu inventory__mobile">Actions</h4>
                    <div className="inventory__actions">
                        <span className="inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
                        <span className="inventory__recycle-bin"><img src={pencil} alt="edit" /></span>
                    </div>
                </div>


            </div >
        </>
    )
}

export default WarehouseInventoryList



{/* <div className="inventory__container-inventory-items">

<h4 className="inventory__inventory-menu inventory__mobile">Inventory Item</h4>

<h4 className="inventory__inventory-menu  inventory__mobile">Category</h4>
<h3 className="inventory__inventory-category inventory__item">Electronics</h3>

<h4 className="inventory__inventory-menu inventory__mobile">Status</h4>
{inventoryCount > 0 ? (
    <h4 className="in-stock-tag inventory__item">In Stock</h4>
) : (
    <h4 className="out-of-stock-tag inventory__item">Out of Stock</h4>
)}
<h4 className="inventory__inventory-menu inventory__mobile">Quantity</h4>


<h4 className="inventory__inventory-menu inventory__mobile">Warehouse</h4>
<h3 className="inventory__inventory-warehouse inventory__item">King West</h3>
<div className="inventory__actions">
    <span className="inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
    <span className="inventory__recycle-bin"><img src={pencil} alt="edit" /></span>
</div>
</div> */}




{/* <div className="inventory__container">
                {/* {fetchedData.map((item) => ( key={item.id} */}
//     <div className="inventory__container-upper">
//     <div className="inventory__container-upper-left-mobile">
//         <div className="inventory__container-unit">
//             <h4 className="inventory__inventory-menu">Inventory Item</h4>
//             <h3 className="inventory__inventory-item">Phone Charger &gt; </h3>
//         </div>
//         <div className="inventory__container-unit">
//             <h4 className="inventory__inventory-menu">Category</h4>
//             <h3 className="inventory__inventory-category">Electronics</h3>
//         </div>
//     </div>
//     <div className="inventory__container-upper-right-mobile">
//         <div className="inventory__container-unit ">
//             <h4 className="inventory__inventory-menu">Status</h4>
//             {inventoryCount > 0 ? (
//                 <h4 className="in-stock-tag">In Stock</h4>
//             ) : (
//                 <h4 className="out-of-stock-tag">Out of Stock</h4>
//             )}
//         </div>
//         <div className="inventory__container-unit">
//             <h4 className="inventory__inventory-menu">QTY</h4>
//             <h3 className="inventory__inventory-quantity">500</h3>
//         </div>
//     </div>
// </div>


// <div className="inventory__container-bottom-mobile">
//     <div className="inventory__container-unit">
//         <h4 className="inventory__inventory-menu">Warehouse</h4>
//         <h3 className="inventory__inventory-warehouse">King West</h3>
//     </div>
{/* </div> */ }

{/* <h3 className="in-stock-tag">In Stock</h3>
                <h3 className="out-of-stock-tag">Out of Stock</h3>
                <h4 className="in-stock-tag">In Stock</h4>
                <h4 className="out-of-stock-tag">Out of Stock</h4> */}


// <div className="inventory__container-unit">
//     <h4 className="inventory__inventory-menu">Actions</h4>
//     <span className="inventory__recycle-bin"><img src={recycleBin} alt="delete" /></span>
//     <span className="inventory__recycle-bin"><img src={pencil} alt="edit" /></span>
{/* ))} */ }
//     </div>
// </div >


{/* <div className="inventory__container-warehouse">
<div className="inventory__container-warehouse-address">
    <h4 className="inventory__warehouse-menu">Warehouse Address:</h4>
    <div className="inventory__warehouse-address-inner">
        <p2 className="inventory__warehouse-address">300 Pearl Street SW,</p2>
        <p2 className="inventory__warehouse-address">Washington, USA</p2>
    </div>
</div>
<div className="inventory__warehouse-contact">
    <div className="inventory__warehouse-contact-name">
        <h4 className="inventory__warehouse-menu">Contact Name:</h4>
        <div className="inventory__warehouse-contact-name-inner">
            <p2 className="inventory__warehouse-address">Graeme Lyon</p2>
            <p2 className="inventory__warehouse-address">Warehouse Manager</p2>
        </div>
    </div>
    <div className="inventory__warehouse-contact-information">
        <h4 className="inventory__warehouse-menu">Contact Information:</h4>
        <div className="inventory__warehouse-contact-information-inner">
            <p2 className="inventory__warehouse-address">+1 (647)504-0911</p2>
            <p2 className="inventory__warehouse-address">glyon@instock.com</p2>
        </div>
    </div>
</div>
</div> */}