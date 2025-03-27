import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/rotary-logo.png" alt="Rotary Mérignac" className="logo" />
        </Link>
      </div>

      <div
        className={`navbar-menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}
        >
          {t("navbarHome")}
        </Link>
        <Link
          to="/about"
          className={`nav-btn ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          {t("navbarAbout")}
        </Link>
        <Link
          to="/contact"
          className={`nav-btn ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          {t("navbarContact")}
        </Link>

        <select
          className="lang-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
