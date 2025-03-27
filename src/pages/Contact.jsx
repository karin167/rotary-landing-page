import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <h1>{t("contactTitle")}</h1>
      <input type="text" placeholder={t("contactPlaceholderName")} />
      <input type="email" placeholder={t("contactPlaceholderEmail")} />
      <textarea
        rows="5"
        placeholder={t("contactPlaceholderMessage")}
      ></textarea>
      <button>{t("contactButton")}</button>
    </div>
  );
}

export default Contact;
