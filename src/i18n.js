import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // 🧭 Navbar
      navbarHome: "Home",
      navbarAbout: "About",
      navbarContact: "Contact",

      // 🏠 Hero & Sections
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

      // 🖼️ Carousel
      carousel1Title: "Unity in Action",
      carousel1Text: "Bringing communities together through service.",
      carousel2Title: "Youth Empowerment",
      carousel2Text: "Inspiring the next generation of leaders.",
      carousel3Title: "Global Impact",
      carousel3Text: "Working towards a better world for all.",

      // 📰 News
      newsUpdates: "News & Updates",
      event1Title: "Upcoming Event: Championship",
      event1Description: "Join us for the world paper airplane championship!",
      event2Title: "Community Project",
      event2Description: "Helping our local community through volunteering.",
      event3Title: "Growth & Impact",
      event3Description: "How we’re making a difference worldwide.",
      learnMore: "Learn More",
      joinMakeDifference: "Join Us & Make a Difference",

      // ⚙️ How It Works
      howItWorksTitle: "How It Works",
      registerStep: "Register",
      registerDetails: "Online registration via HelloAsso (€8 per competitor)",
      qualifiersStep: "Qualifiers",
      qualifiersDetails: "12 PM - 3 PM → Longest throw advances!",
      finalsStep: "Finals",
      finalsDetails: "3:30 PM Onwards → Compete against top throwers!",
      enjoyStep: "Enjoy Extras",
      enjoyDetails: "Enjoy Concerts, Games & Food while waiting for results!",

      // 👥 Participation
      whoCanParticipateTitle: "Who Can Participate?",
      forParentsKids: "For Parents & Kids (4-12 years)",
      forParentsKidsDetails: "Make lifelong memories together!",
      forFamilies: "For Families of All Sizes",
      forFamiliesDetails: "Compete as a team or support from the crowd!",
      forFriends: "For Friends & Groups",
      forFriendsDetails: "Join in the fun, even if you're not competing!",

      // 🌍 Environmental Impact
      environmentalImpactTitle: "Environmental Impact",
      environmentalImpactText:
        "Every ticket helps us protect the Gironde forests! Proceeds go to DFCI.",

      // 💬 Testimonials
      testimonialsTitle: "Testimonials",
      testimonial1: "Such a unique event! My kids had a blast!",
      testimonial2: "Great experience! Can't wait for next year!",

      // 🎯 Sponsors
      sponsorsTitle: "Sponsors & Partners",
      sponsorsText: "Thank you to our partners who make this event possible!",

      // ❓ FAQ
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Do I need experience?",
      faqA1: "No, anyone can throw!",
      faqQ2: "Can my whole family join?",
      faqA2: "Yes! Parents and kids can compete.",
      faqQ3: "What should I bring?",
      faqA3: "Just yourself! We provide paper & guides.",
      faqQ4: "Is food available?",
      faqA4: "Yes, food trucks will be on-site.",

      // 📱 Social Media
      socialMediaTitle: "Follow Us & Join the Community",
      socialMediaText: "Instagram & Facebook:",
      hashtag: "#PaperPlaneChampionship",

      // 📩 Contact Page
      contactTitle: "Contact Us",
      contactPlaceholderName: "Your Name",
      contactPlaceholderEmail: "Your Email",
      contactPlaceholderMessage: "Your Message",
      contactButton: "Send Message",

      // 📘 About Page
      aboutTitle: "About Us",
      aboutP1:
        "The Rotary Club of Mérignac, located in the heart of the Nouvelle-Aquitaine region, is committed to creating meaningful social impact both locally and internationally...",
      aboutP2:
        "Our members come from diverse professional backgrounds and share a common goal: to make a difference by living the Rotary motto: “Service Above Self.”",
      aboutP3:
        "From local initiatives like food and supply drives, to global efforts such as polio eradication and access to clean water...",
    },
  },

  fr: {
    translation: {
      // 🧭 Navbar
      navbarHome: "Accueil",
      navbarAbout: "À propos",
      navbarContact: "Contact",

      // 🏠 Hero & Sections
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

      // 🖼️ Carousel
      carousel1Title: "Unité en action",
      carousel1Text: "Rassembler les communautés par le service.",
      carousel2Title: "Autonomisation des jeunes",
      carousel2Text: "Inspirer la prochaine génération de leaders.",
      carousel3Title: "Impact mondial",
      carousel3Text: "Travailler pour un monde meilleur pour tous.",

      // 📰 News
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

      // ⚙️ How It Works
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

      // 👥 Participation
      whoCanParticipateTitle: "Qui peut participer?",
      forParentsKids: "Pour les parents et enfants (4-12 ans)",
      forParentsKidsDetails: "Créez des souvenirs inoubliables ensemble!",
      forFamilies: "Pour les familles de toutes tailles",
      forFamiliesDetails: "Concourez en équipe ou encouragez les participants!",
      forFriends: "Pour les amis et groupes",
      forFriendsDetails:
        "Rejoignez l'événement, même si vous ne participez pas!",

      // 🌍 Environmental Impact
      environmentalImpactTitle: "Impact environnemental",
      environmentalImpactText:
        "Chaque billet aide à protéger les forêts de Gironde!",

      // 💬 Testimonials
      testimonialsTitle: "Témoignages",
      testimonial1: "Un événement unique! Mes enfants ont adoré!",
      testimonial2: "Expérience géniale! Hâte de l'année prochaine!",

      // 🎯 Sponsors
      sponsorsTitle: "Sponsors & Partenaires",
      sponsorsText:
        "Merci à nos partenaires qui rendent cet événement possible!",

      // ❓ FAQ
      faqTitle: "Questions fréquentes",
      faqQ1: "Ai-je besoin d'expérience?",
      faqA1: "Non, tout le monde peut participer!",
      faqQ2: "Toute ma famille peut-elle participer?",
      faqA2: "Oui! Parents et enfants peuvent concourir.",
      faqQ3: "Que dois-je apporter?",
      faqA3: "Juste vous-même! Nous fournissons le papier et les guides.",
      faqQ4: "Y aura-t-il de la nourriture?",
      faqA4: "Oui, des food trucks seront sur place.",

      // 📱 Social Media
      socialMediaTitle: "Suivez-nous et rejoignez la communauté",
      socialMediaText: "Instagram & Facebook:",
      hashtag: "#PaperPlaneChampionship",

      // 📩 Contact Page
      contactTitle: "Nous Contacter",
      contactPlaceholderName: "Votre nom",
      contactPlaceholderEmail: "Votre email",
      contactPlaceholderMessage: "Votre message",
      contactButton: "Envoyer le message",

      // 📘 About Page
      aboutTitle: "À propos de nous",
      aboutP1:
        "Le Rotary Club de Mérignac, situé au cœur de la région Nouvelle-Aquitaine, s'engage à créer un impact social significatif...",
      aboutP2:
        "Nos membres viennent d'horizons professionnels variés et partagent un objectif commun : faire une différence...",
      aboutP3:
        "Des initiatives locales comme les collectes de nourriture aux efforts mondiaux tels que l'éradication de la polio...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
