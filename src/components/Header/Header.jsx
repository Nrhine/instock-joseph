import "./Header.scss";
import logo from "../../assets/Logo/Instock-Logo.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="instock logo" className="header__logo" />
      <nav className="header__nav">
        <Button
          text="Warehouses"
          className="button__header button__header--active"
        />
        <Button
          text="Inventory"
          className="button__header button__header--inactive"
        />
      </nav>
    </header>
  );
};
export default Header;
