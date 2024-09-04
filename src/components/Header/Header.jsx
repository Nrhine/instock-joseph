import "./Header.scss";
import logo from "../../assets/Logo/Instock-Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="instock logo" className="header__logo" />
      <ul className="header__list">
        <li className="header">Warehouses</li>
        <li className="header">Inventory</li>
      </ul>
    </nav>
  );
};
export default Header;
