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

      // How It Works Section
      howItWorksTitle: "How It Works",
      registerStep: "Register",
      registerDetails: "Online registration via HelloAsso (€8 per competitor)",
      qualifiersStep: "Qualifiers",
      qualifiersDetails: "12 PM - 3 PM → Longest throw advances!",
      finalsStep: "Finals",
      finalsDetails: "3:30 PM Onwards → Compete against top throwers!",
      enjoyStep: "Enjoy Extras",
      enjoyDetails: "Enjoy Concerts, Games & Food while waiting for results!",

      // Who Can Participate Section (Updated)
      whoCanParticipateTitle: "Who Can Participate?",
      forParentsKids: "For Parents & Kids (4-12 years)",
      forParentsKidsDetails: "Make lifelong memories together!",
      forFamilies: "For Families of All Sizes",
      forFamiliesDetails: "Compete as a team or support from the crowd!",
      forFriends: "For Friends & Groups",
      forFriendsDetails: "Join in the fun, even if you're not competing!",

      // Environmental Impact
      environmentalImpactTitle: "Environmental Impact",
      environmentalImpactText:
        "Every ticket helps us protect the Gironde forests! Proceeds go to DFCI.",

      // Testimonials
      testimonialsTitle: "Testimonials",
      testimonial1: "Such a unique event! My kids had a blast!",
      testimonial2: "Great experience! Can't wait for next year!",

      // Sponsors
      sponsorsTitle: "Sponsors & Partners",
      sponsorsText: "Thank you to our partners who make this event possible!",

      // FAQ
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Do I need experience?",
      faqA1: "No, anyone can throw!",
      faqQ2: "Can my whole family join?",
      faqA2: "Yes! Parents and kids can compete.",
      faqQ3: "What should I bring?",
      faqA3: "Just yourself! We provide paper & guides.",
      faqQ4: "Is food available?",
      faqA4: "Yes, food trucks will be on-site.",

      // Social Media
      socialMediaTitle: "Follow Us & Join the Community",
      socialMediaText: "Instagram & Facebook:",
      hashtag: "#PaperPlaneChampionship",
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

      // Sections
      howItWorksTitle: "Comment ça fonctionne",
      registerStep: "S'inscrire",
      registerDetails: "Inscription en ligne via HelloAsso (8€ par concurrent)",
      qualifiersStep: "Qualifications",
      qualifiersDetails: "12h - 15h → Le plus long lancer avance!",
      finalsStep: "Finales",
      finalsDetails: "15h30 et plus → Affrontez les meilleurs concurrents!",
      enjoyStep: "Profitez de l'événement",
      enjoyDetails:
        "Concerts, jeux et restauration en attendant les résultats!",

      // Who Can Participate Section (Updated)
      whoCanParticipateTitle: "Qui peut participer?",
      forParentsKids: "Pour les parents et enfants (4-12 ans)",
      forParentsKidsDetails: "Créez des souvenirs inoubliables ensemble!",
      forFamilies: "Pour les familles de toutes tailles",
      forFamiliesDetails: "Concourez en équipe ou encouragez les participants!",
      forFriends: "Pour les amis et groupes",
      forFriendsDetails:
        "Rejoignez l'événement, même si vous ne participez pas!",

      environmentalImpactTitle: "Impact environnemental",
      environmentalImpactText:
        "Chaque billet aide à protéger les forêts de Gironde!",
      testimonialsTitle: "Témoignages",
      testimonial1: "Un événement unique! Mes enfants ont adoré!",
      testimonial2: "Expérience géniale! Hâte de l'année prochaine!",
      sponsorsTitle: "Sponsors & Partenaires",
      sponsorsText:
        "Merci à nos partenaires qui rendent cet événement possible!",
      faqTitle: "Questions fréquentes",
      faqQ1: "Ai-je besoin d'expérience?",
      faqA1: "Non, tout le monde peut participer!",
      faqQ2: "Toute ma famille peut-elle participer?",
      faqA2: "Oui! Parents et enfants peuvent concourir.",
      faqQ3: "Que dois-je apporter?",
      faqA3: "Juste vous-même! Nous fournissons le papier et les guides.",
      faqQ4: "Y aura-t-il de la nourriture?",
      faqA4: "Oui, des food trucks seront sur place.",
      socialMediaTitle: "Suivez-nous et rejoignez la communauté",
      socialMediaText: "Instagram & Facebook:",
      hashtag: "#PaperPlaneChampionship",
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
