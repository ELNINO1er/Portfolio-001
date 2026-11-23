import type { L, LL } from "@/lib/i18n";

/**
 * Profil — modifiez ce fichier pour mettre à jour vos informations.
 * Les champs `null` affichent un placeholder propre.
 */
export const profile = {
  name: "Romaric BOMBADE",
  firstName: "Romaric",
  brand: "RoroDev",
  title: {
    fr: "Développeur Full-Stack — SaaS & Product Builder",
    en: "Full-Stack Developer — SaaS & Product Builder",
  } as L,
  location: {
    fr: "Abidjan, Côte d'Ivoire",
    en: "Abidjan, Côte d'Ivoire",
  } as L,
  coordinates: { lat: 5.36, lng: -4.0083, label: "5.3600° N, 4.0083° W" },
  timezone: "Africa/Abidjan",
  timezoneLabel: "GMT",
  nationality: { fr: "Ivoirienne", en: "Ivorian" } as L,
  languages: [
    { name: { fr: "Français", en: "French" } as L, level: { fr: "Langue maternelle", en: "Native" } as L },
    { name: { fr: "Anglais", en: "English" } as L, level: { fr: "Professionnel", en: "Professional" } as L },
  ],
  domain: "romaricbombade.com",

  contact: {
    email: "dromaric58@gmail.com",
    phone: "+225 07 49 15 77 41",
    phoneHref: "tel:+2250749157741",
    whatsapp: "https://wa.me/2250749157741",
    linkedin: "https://www.linkedin.com/in/romaric-bombade-725623253",
    github: "https://github.com/ELNINO1er",
    chariow: "https://ajhmnovu.mychariow.market",
  },

  availability: {
    fr: "Disponible pour des projets choisis, collaborations et opportunités produit.",
    en: "Available for selected projects, collaborations and product opportunities.",
  } as L,

  headline: {
    fr: "Je conçois des produits numériques qui font avancer les entreprises.",
    en: "I build digital products that move businesses forward.",
  } as L,

  /** Sous-accroche : `before` + [mot qui tourne] + `after` */
  rotating: {
    before: { fr: "Je conçois et développe des", en: "I design and build" } as L,
    words: {
      fr: ["plateformes SaaS", "applications multi-tenant", "applications métiers", "plateformes e-commerce", "produits numériques"],
      en: ["SaaS platforms", "multi-tenant applications", "business applications", "e-commerce platforms", "digital products"],
    } as LL,
    after: { fr: "pour les entreprises en Afrique.", en: "for businesses in Africa." } as L,
  },

  intro: {
    fr: "Je ne fais pas que des sites web. Je transforme des idées business en vrais produits numériques — plateformes SaaS, applications métiers et expériences e-commerce — structurés pour grandir avec les entreprises qui les utilisent.",
    en: "I don't just build websites. I turn business ideas into real digital products — SaaS platforms, business applications and e-commerce experiences — structured to grow with the companies that use them.",
  } as L,

  signature: {
    fr: "Conçu à Abidjan. Pensé pour grandir.",
    en: "Designed in Abidjan. Built to grow.",
  } as L,

  bio: {
    fr: "Je suis Romaric Bombade, développeur Full-Stack basé à Abidjan. Je conçois et développe des produits numériques, applications métiers et plateformes SaaS permettant aux entreprises de digitaliser leurs opérations. Formé au génie logiciel, je combine architecture, design d'interface et vision produit. Passionné par l'IA et l'innovation, je construis une technologie au service des entreprises africaines.",
    en: "I'm Romaric Bombade, a Full-Stack developer based in Abidjan. I design and build digital products, business applications and SaaS platforms that help companies digitalize their operations. Trained in software engineering, I combine architecture, interface design and product vision. Passionate about AI and innovation, I build technology that serves African businesses.",
  } as L,

  pillars: [
    {
      key: "product",
      title: { fr: "Vision produit", en: "Product vision" } as L,
      text: {
        fr: "D'une idée business à un produit structuré : analyse des besoins, workflows, rôles et modules.",
        en: "From a business idea to a structured product: needs analysis, workflows, roles and modules.",
      } as L,
    },
    {
      key: "saas",
      title: { fr: "Ingénierie SaaS", en: "SaaS engineering" } as L,
      text: {
        fr: "Architectures multi-tenant, RBAC, authentification, APIs, paiements, documents et notifications.",
        en: "Multi-tenant architectures, RBAC, authentication, APIs, payments, documents and notifications.",
      } as L,
    },
    {
      key: "delivery",
      title: { fr: "Livraison moderne", en: "Modern delivery" } as L,
      text: {
        fr: "Interfaces soignées, Docker, CI/CD et développement assisté par l'IA pour itérer vite et bien.",
        en: "Polished interfaces, Docker, CI/CD and AI-assisted development to iterate fast and well.",
      } as L,
    },
  ],

  values: [
    {
      key: "entrepreneurship",
      title: { fr: "Entrepreneuriat", en: "Entrepreneurship" } as L,
      text: {
        fr: "Co-fondateur de MH Tech Consulting : je pense produit, clients et modèle économique, pas seulement code.",
        en: "Co-founder of MH Tech Consulting: I think about product, customers and business model — not just code.",
      } as L,
    },
    {
      key: "ai",
      title: { fr: "IA appliquée", en: "Applied AI" } as L,
      text: {
        fr: "ChatGPT, Claude, Gemini et Cursor font partie de mon cycle de développement.",
        en: "ChatGPT, Claude, Gemini and Cursor are part of my development cycle.",
      } as L,
    },
    {
      key: "approach",
      title: { fr: "Approche produit", en: "Product approach" } as L,
      text: {
        fr: "Chaque projet part d'un vrai workflow : qui l'utilise, de quoi il a besoin, comment circulent les données.",
        en: "Every project starts from a real workflow: who uses it, what they need, how data flows.",
      } as L,
    },
    {
      key: "problem",
      title: { fr: "Résolution de problèmes", en: "Problem solving" } as L,
      text: {
        fr: "Transformer des processus métiers complexes en logiciels clairs, structurés et évolutifs.",
        en: "Turning complex business processes into clear, structured and scalable software.",
      } as L,
    },
  ],

  sectors: {
    fr: ["Entreprises", "Restauration", "Santé", "E-commerce", "Mariage", "Fitness", "Gestion d'entreprise", "Agriculture", "Finance", "Médias"],
    en: ["Businesses", "Restaurants", "Healthcare", "E-commerce", "Weddings", "Fitness", "Business management", "Agriculture", "Finance", "Media"],
  } as LL,

  /** Placeholders : remplacez par vos fichiers dans /public puis renseignez le chemin. */
  assets: {
    photo: "/images/romaric-bombade.jpeg",
    cv: null as string | null, // ex. "/cv/romaric-bombade-cv.pdf"
    logo: "/images/rorodev-logo.png",
  },
};
