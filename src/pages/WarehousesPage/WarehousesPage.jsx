import "./WarehousesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DeleteInventoryPopUp from "../../components/DeleteInventoryPopUp/DeleteInventoryPopUp";
import DeleteWarehousePopUp from "../../components/DeleteWarehousePopup/DeleteWarehousePopup";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const WarehousesPage = () => {
  return (
    <>
      <Header />
      <WarehouseList />
      <Footer />
    </>
  );
};
export default WarehousesPage;
