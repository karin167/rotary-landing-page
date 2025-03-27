import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaHashtag,
  FaUserEdit,
  FaCheckCircle,
  FaTrophy,
  FaMusic,
} from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>{t("welcome")}</h1>
          <p>{t("mission")}</p>
          <button className="btn-primary join-button">{t("joinNow")}</button>
        </div>
        <div className="carousel-wrapper">
          <ImageCarousel />
        </div>
      </header>

      {/* What We Do */}
      <section className="what-we-do">
        <h2>{t("whatWeDo")}</h2>
        <p className="what-we-do-description">
          {t("eventIntro")} <strong>{t("eventName")}</strong>,{" "}
          {t("eventDescription")}
        </p>
        <div className="what-we-do-container">
          {[
            { icon: "📢", label: "marketing" },
            { icon: "💡", label: "leadGeneration" },
            { icon: "📬", label: "newsletter" },
            { icon: "🌐", label: "webDevelopment" },
          ].map((item, index) => (
            <div className="what-we-do-item" key={index}>
              <span className="what-we-do-icon">{item.icon}</span>
              <span className="what-we-do-title">{t(item.label)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>{t("howItWorksTitle")}</h2>
        <div className="steps-container">
          {[
            {
              icon: <FaUserEdit />,
              title: "registerStep",
              desc: "registerDetails",
            },
            {
              icon: <FaCheckCircle />,
              title: "qualifiersStep",
              desc: "qualifiersDetails",
            },
            { icon: <FaTrophy />, title: "finalsStep", desc: "finalsDetails" },
            { icon: <FaMusic />, title: "enjoyStep", desc: "enjoyDetails" },
          ].map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{t(step.title)}</h3>
                <p>{t(step.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="who-can-participate">
        <div className="participation-options">
          <h2>{t("whoCanParticipateTitle")}</h2>
          {[
            {
              icon: "👨‍👩‍👧‍👦",
              title: "forParentsKids",
              desc: "forParentsKidsDetails",
            },
            { icon: "🏡", title: "forFamilies", desc: "forFamiliesDetails" },
            { icon: "🎉", title: "forFriends", desc: "forFriendsDetails" },
          ].map((item, index) => (
            <div className="participation-item" key={index}>
              <span className="participation-icon">{item.icon}</span>
              <span className="participation-title">{t(item.title)}</span>
              <span className="participation-detail">{t(item.desc)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* News & Updates */}
      <section className="news-updates">
        <h2>{t("newsUpdates")}</h2>
        <div className="cards-container">
          {[1, 2, 3].map((num) => (
            <div className="card" key={num}>
              <img
                src="/rotary-international6064.logowik.com.webp"
                alt={`Event ${num}`}
              />
              <h3>{t(`event${num}Title`)}</h3>
              <p>{t(`event${num}Description`)}</p>
              <button className="btn-secondary">{t("learnMore")}</button>
            </div>
          ))}
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

      {/* Footer */}
      <footer className="footer">
        <h2>{t("joinMakeDifference")}</h2>
        <button className="btn-primary">{t("joinNow")}</button>
        <button className="btn-secondary">{t("contactUs")}</button>
      </footer>
    </div>
  );
}

export default Home;
