import React from "react";
import LanguageSelector from "./LanguageSelector";
import FormattedMessage from "./FormattedMessage";
import { Link } from 'react-router-dom';
import { routesCodes } from "../../js/routeCodes";

const Navbar = () => {
  return <div className="navbar">
    <div className="navbar__content">
      <div className="navbar__logo"><Link to={ routesCodes.HOME }>Genti Musaj</Link></div>
      <div className="navbar__list">
        <div className="navbar__item"><Link to={ routesCodes.HOME }><FormattedMessage id='navbar.home' /></Link></div>
        <div className="navbar__item"><Link to={ routesCodes.GALLERY }><FormattedMessage id='navbar.gallery' /></Link></div>
        <div className="navbar__item"><Link to="/"><FormattedMessage id='navbar.features' /></Link></div>
        <div className="navbar__item"><Link to="/"><FormattedMessage id='navbar.products' /></Link></div>
        <div className="navbar__item"><Link to="/"><FormattedMessage id='navbar.clients' /></Link></div>
        <div className="navbar__lang"><LanguageSelector /></div>
      </div>
    </div>
  </div>;
};

export default Navbar;
