import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1>{t("aboutTitle")}</h1>
      <p>{t("aboutP1")}</p>
      <p>{t("aboutP2")}</p>
      <p>{t("aboutP3")}</p>
    </div>
  );
}

export default About;
