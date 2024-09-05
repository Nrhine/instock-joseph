import "./Header.scss";
import CTA from "../CTA/CTA";
import logo from "../../assets/Logo/Instock-Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="instock logo" className="header__logo" />
      <nav className="header__nav">
        <CTA text="Warehouses" className="CTA--active" />
        <CTA text="Inventory" className="CTA--inactive" />
      </nav>
    </header>
  );
};
export default Header;
