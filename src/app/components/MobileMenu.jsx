import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { routesCodes } from "../../js/routeCodes";
import FormattedMessage from "./FormattedMessage";
import LanguageSelector from "./LanguageSelector";

const MobileMenu = ({ open }) => {

  return <div className={`mobile-menu ${open ? 'open' : 'closed'}`}>
    <div className="mobile-menu__item"><Link to={ routesCodes.HOME }><FormattedMessage id='navbar.home' /></Link></div>
    <div className="mobile-menu__item"><Link to={ routesCodes.GALLERY }><FormattedMessage id='navbar.gallery' /></Link></div>
    <div className="mobile-menu__item"><Link to="/"><FormattedMessage id='navbar.features' /></Link></div>
    <div className="mobile-menu__item"><Link to="/"><FormattedMessage id='navbar.products' /></Link></div>
    <div className="mobile-menu__item"><Link to="/"><FormattedMessage id='navbar.clients' /></Link></div>
    <div className="mobile-menu__lang"><LanguageSelector /></div>
  </div>;
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
}

export default MobileMenu;
