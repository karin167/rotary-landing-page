import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      join: "Join",
      contactUs: "Contact Us",
      welcome: "Welcome to Rotary Mérignac",
      mission:
        "Rotary Mérignac is dedicated to humanitarian service, ethical leadership, and impactful projects.",
      joinNow: "Join Us Now",
      whatWeDo: "What We Do",
      eventIntro: "We organize impactful events, such as",
      eventName: '"CHAMPIONNAT DU MONDE DE LANCER D’AVIONS EN PAPIER"',
      eventDescription: "bringing people together for a good cause.",
      marketing: "Content Marketing & Social Media campaigns",
      leadGeneration: "Lead Generation & CRM setup for outreach",
      newsletter: "Newsletter & Community Management",
      webDevelopment: "Website Development & UX Optimization",
      newsUpdates: "News & Updates",
      event1Title: "Upcoming Event: Championship",
      event1Description: "Join us for the world paper airplane championship!",
      event2Title: "Community Project",
      event2Description: "Helping our local community through volunteering.",
      event3Title: "Growth & Impact",
      event3Description: "How we’re making a difference worldwide.",
      learnMore: "Learn More",
      joinMakeDifference: "Join Us & Make a Difference",
    },
  },
  fr: {
    translation: {
      join: "Rejoindre",
      contactUs: "Nous Contacter",
      welcome: "Bienvenue à Rotary Mérignac",
      mission:
        "Rotary Mérignac se consacre au service humanitaire, au leadership éthique et aux projets percutants.",
      joinNow: "Rejoignez-nous maintenant",
      whatWeDo: "Ce que nous faisons",
      eventIntro: "Nous organisons des événements percutants, comme",
      eventName: '"CHAMPIONNAT DU MONDE DE LANCER D’AVIONS EN PAPIER"',
      eventDescription: "rassemblant les gens pour une bonne cause.",
      marketing: "Marketing de contenu et campagnes sur les réseaux sociaux",
      leadGeneration: "Génération de prospects et configuration CRM",
      newsletter: "Gestion de la communauté et de la newsletter",
      webDevelopment: "Développement web et optimisation UX",
      newsUpdates: "Actualités et mises à jour",
      event1Title: "Événement à venir : Championnat",
      event1Description:
        "Rejoignez-nous pour le championnat mondial de lancer d'avions en papier!",
      event2Title: "Projet communautaire",
      event2Description: "Aider notre communauté locale grâce au bénévolat.",
      event3Title: "Croissance et Impact",
      event3Description:
        "Comment nous faisons une différence dans le monde entier.",
      learnMore: "En savoir plus",
      joinMakeDifference: "Rejoignez-nous et faites une différence",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
