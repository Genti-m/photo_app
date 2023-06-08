import React from "react";
import LanguageSelector from "./LanguageSelector";
import FormattedMessage from "./FormattedMessage";

const Navbar = () => {
  return <div className="navbar">
    <div className="navbar__content">
      <div className="navbar__logo">Genti</div>
      <div className="navbar__list">
        <div className="navbar__item"><FormattedMessage id='navbar.home' /></div>
        <div className="navbar__item"><FormattedMessage id='navbar.features' /></div>
        <div className="navbar__item"><FormattedMessage id='navbar.products' /></div>
        <div className="navbar__item"><FormattedMessage id='navbar.clients' /></div>
        <div className="navbar__lang"><LanguageSelector /></div>
      </div>
    </div>
  </div>;
};

export default Navbar;
