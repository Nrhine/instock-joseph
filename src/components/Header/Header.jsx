import React, { useState } from "react";
import "./Header.scss";
import CTA from "../CTA/CTA";
import logo from "../../assets/Logo/Instock-Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeCTA, setActiveCTA] = useState("warehouse");

  const switchCTAClass = (ctaName) => {
    return activeCTA === ctaName ? "CTA--active" : "CTA--inactive";
  };

  const handleCTAClick = (ctaName) => {
    setActiveCTA(ctaName);
  };

  return (
    <header className="header">
      <img src={logo} alt="instock logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="warehouse" onClick={() => handleCTAClick("warehouse")}>
          <CTA
            text="Warehouses"
            className={`${switchCTAClass("warehouse")} header__button`}
          />
        </Link>
        <Link to="inventory" onClick={() => handleCTAClick("inventory")}>
          <CTA
            text="Inventory"
            className={`${switchCTAClass("inventory")} header__button`}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
