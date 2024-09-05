import "./WarehousesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DeleteInventoryPopUp from "../../components/DeleteInventoryPopUp/DeleteInventoryPopUp";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const WarehousesPage = () => {
  return (
    <>
      <Header />
      <DeleteInventoryPopUp />
      <WarehouseList />
      {/* <Footer /> */}
    </>
  );
};
export default WarehousesPage;
