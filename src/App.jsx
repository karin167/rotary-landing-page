import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./components/ImageCarousel";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import i18n configuration
import { FaInstagram, FaHashtag } from "react-icons/fa"; // יבוא אייקוניםֿ
import { FaUserEdit, FaCheckCircle, FaTrophy, FaMusic } from "react-icons/fa";
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
          <img src="/rotary-logo.png" alt="Rotary Mérignac" className="logo" />
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
      <section>
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-content">
            <h1>{t("welcome")}</h1>
            <p>{t("mission")}</p>
            <button className="btn-primary join-button">{t("joinNow")}</button>
          </div>
          <section>
            <div className="carousel-wrapper">
              <ImageCarousel />
            </div>
          </section>
        </header>
      </section>
      {/* What We Do Section */}
      <section className="what-we-do">
        <h2>{t("whatWeDo")}</h2>
        <p className="what-we-do-description">
          {t("eventIntro")} <strong>{t("eventName")}</strong>,{" "}
          {t("eventDescription")}
        </p>
        <div className="what-we-do-container">
          <div className="what-we-do-item">
            <span className="what-we-do-icon">📢</span>
            <span className="what-we-do-title">{t("marketing")}</span>
          </div>
          <div className="what-we-do-item">
            <span className="what-we-do-icon">💡</span>
            <span className="what-we-do-title">{t("leadGeneration")}</span>
          </div>
          <div className="what-we-do-item">
            <span className="what-we-do-icon">📬</span>
            <span className="what-we-do-title">{t("newsletter")}</span>
          </div>
          <div className="what-we-do-item">
            <span className="what-we-do-icon">🌐</span>
            <span className="what-we-do-title">{t("webDevelopment")}</span>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>{t("howItWorksTitle")}</h2>
        <div className="steps-container">
          <div className="step-card">
            <FaUserEdit className="step-icon" />
            <div className="step-content">
              <h3>{t("registerStep")}</h3>
              <p>{t("registerDetails")}</p>
            </div>
          </div>

          <div className="step-card">
            <FaCheckCircle className="step-icon" />
            <div className="step-content">
              <h3>{t("qualifiersStep")}</h3>
              <p>{t("qualifiersDetails")}</p>
            </div>
          </div>

          <div className="step-card">
            <FaTrophy className="step-icon" />
            <div className="step-content">
              <h3>{t("finalsStep")}</h3>
              <p>{t("finalsDetails")}</p>
            </div>
          </div>

          <div className="step-card">
            <FaMusic className="step-icon" />
            <div className="step-content">
              <h3>{t("enjoyStep")}</h3>
              <p>{t("enjoyDetails")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Who Can Participate */}
      <section className="who-can-participate">
        <div className="participation-options">
          <h2>{t("whoCanParticipateTitle")}</h2>
          <div className="participation-item">
            <span className="participation-icon">👨‍👩‍👧‍👦</span>
            <span className="participation-title">{t("forParentsKids")}</span>
            <span className="participation-detail">
              {t("forParentsKidsDetails")}
            </span>
          </div>
          <div className="participation-item">
            <span className="participation-icon">🏡</span>
            <span className="participation-title">{t("forFamilies")}</span>
            <span className="participation-detail">
              {t("forFamiliesDetails")}
            </span>
          </div>
          <div className="participation-item">
            <span className="participation-icon">🎉</span>
            <span className="participation-title">{t("forFriends")}</span>
            <span className="participation-detail">
              {t("forFriendsDetails")}
            </span>
          </div>
        </div>
      </section>
      {/* News & Updates */}
      <section className="news-updates">
        <h2>{t("newsUpdates")}</h2>
        <div className="cards-container">
          <div className="card">
            <img
              src="/rotary-international6064.logowik.com.webp"
              alt="Event 1"
            />
            <h3>{t("event1Title")}</h3>
            <p>{t("event1Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
          <div className="card">
            <img
              src="/rotary-international6064.logowik.com.webp"
              alt="Event 2"
            />
            <h3>{t("event2Title")}</h3>
            <p>{t("event2Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
          <div className="card">
            <img
              src="/rotary-international6064.logowik.com.webp"
              alt="Event 3"
            />
            <h3>{t("event3Title")}</h3>
            <p>{t("event3Description")}</p>
            <button className="btn-secondary">{t("learnMore")}</button>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">{t("faqTitle")}</h2>
        <div className="faq-container">
          <div className="faq-card">
            <span className="faq-icon">❓</span>
            <div className="faq-content">
              <h3>{t("faqQ1")}</h3>
              <p>{t("faqA1")}</p>
            </div>
          </div>
          <div className="faq-card">
            <span className="faq-icon">👨‍👩‍👧</span>
            <div className="faq-content">
              <h3>{t("faqQ2")}</h3>
              <p>{t("faqA2")}</p>
            </div>
          </div>
          <div className="faq-card">
            <span className="faq-icon">📝</span>
            <div className="faq-content">
              <h3>{t("faqQ3")}</h3>
              <p>{t("faqA3")}</p>
            </div>
          </div>
          <div className="faq-card">
            <span className="faq-icon">🍔</span>
            <div className="faq-content">
              <h3>{t("faqQ4")}</h3>
              <p>{t("faqA4")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media */}
      <section className="social-media-section">
        <h2 className="social-media-title">{t("socialMediaTitle")}</h2>
        <div className="social-media-content">
          <p>
            <FaInstagram className="social-icon" />
            {t("socialMediaText")}{" "}
            <a
              href="https://www.instagram.com/RotaryMerignac"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              @RotaryMerignac
            </a>
          </p>
          <p>
            <FaHashtag className="social-icon" />
            <span className="hashtag">{t("hashtag")}</span>
          </p>
        </div>
      </section>
      {/* Sponsors & Partners */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">{t("sponsorsTitle")}</h2>
        <p className="sponsors-text">{t("sponsorsText")}</p>
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
