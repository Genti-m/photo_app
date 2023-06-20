import React, { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import FormattedMessage from "./FormattedMessage";
import { Link, useLocation } from 'react-router-dom';
import { routesCodes } from "../../js/routeCodes";
import menu from '../../assets/svg/menu.svg'
import close from '../../assets/svg/close.svg'
import { ReactSVG } from "react-svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation()

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location])

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
      <div className="navbar__item navbar__hamburger" onClick={toggleMobileMenu}><ReactSVG src={showMobileMenu ? close : menu} /></div>
      <MobileMenu open={ showMobileMenu } />
    </div>
  </div>;
};

export default Navbar;
