import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./components/ImageCarousel";
import logo from "/public/rotary-logo.png";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import i18n configuration

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Rotary Mérignac" className="logo" />
        </div>
        <div className="navbar-right">
          <button className="btn-primary">{t("join")}</button>
          <button className="btn-secondary">{t("contactUs")}</button>
          {/* Language Selection Dropdown */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="lang-select"
          >
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>{t("welcome")}</h1>
          <p>{t("mission")}</p>
          <button className="btn-primary">{t("joinNow")}</button>
        </div>
        <div className="carousel-wrapper">
          <ImageCarousel />
        </div>
      </header>

      {/* What We Do Section */}
      <section className="what-we-do">
        <h2>{t("whatWeDo")}</h2>
        <p>
          {t("eventIntro")} <strong>{t("eventName")}</strong>,{" "}
          {t("eventDescription")}
        </p>
        <ul>
          <li>📢 {t("marketing")}</li>
          <li>💡 {t("leadGeneration")}</li>
          <li>📬 {t("newsletter")}</li>
          <li>🌐 {t("webDevelopment")}</li>
        </ul>
      </section>

      {/* News & Updates */}
      <section className="news-updates">
        <h2>{t("newsUpdates")}</h2>
        <div className="cards-container">
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 1" />
            <h3>{t("event1Title")}</h3>
            <p>{t("event1Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 2" />
            <h3>{t("event2Title")}</h3>
            <p>{t("event2Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 3" />
            <h3>{t("event3Title")}</h3>
            <p>{t("event3Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="footer">
        <h2>{t("joinMakeDifference")}</h2>
        <button className="btn-primary">{t("joinNow")}</button>
        <button className="btn-secondary">{t("contactUs")}</button>
      </footer>
    </div>
  );
}

export default App;
