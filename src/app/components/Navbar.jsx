import React from "react";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return <div className="navbar">
    <div className="navbar__content">
      <div className="navbar__logo">Genti</div>
      <div className="navbar__list">
        <div className="navbar__item">Home</div>
        <div className="navbar__item">Features</div>
        <div className="navbar__item">Products</div>
        <div className="navbar__item">Client</div>
        <div className="navbar__lang"><LanguageSelector /></div>
      </div>
    </div>
  </div>;
};

export default Navbar;
