import "./WarehousesPage.scss";
import Footer from "../../components/Footer/Footer";
import DeleteWarehousePopUp from "../../components/DeleteWarehousePopup/DeleteWarehousePopup";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const WarehousesPage = () => {
  return (
    <>
      <WarehouseList />
      <Footer />
    </>
  );
};
export default WarehousesPage;
