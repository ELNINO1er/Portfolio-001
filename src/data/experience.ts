import type { L, LL } from "@/lib/i18n";

export type Experience = {
  company: string;
  role?: L;
  period: L;
  current?: boolean;
  points: LL;
};

export const experiences: Experience[] = [
  {
    company: "MH Tech Consulting",
    role: { fr: "Co-Fondateur & Développeur Full-Stack", en: "Co-Founder & Full-Stack Developer" },
    period: { fr: "2026 → aujourd'hui", en: "2026 → present" },
    current: true,
    points: {
      fr: ["Stratégie IT et analyse des besoins clients", "Conception de produits et développement d'applications", "Architecture SaaS et solutions sur mesure", "Transformation digitale", "Développement commercial"],
      en: ["IT strategy and client needs analysis", "Product design and application development", "SaaS architecture and custom solutions", "Digital transformation", "Business development"],
    },
  },
  {
    company: "OM Consulting Group",
    role: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    period: { fr: "Oct. 2024 → aujourd'hui", en: "Oct. 2024 → present" },
    current: true,
    points: {
      fr: ["Développement et maintenance des applications de gestion financière DELTA et SUCCESS", "Architecture SaaS, multi-tenancy et isolation des données clients", "Espaces utilisateurs sécurisés", "Amélioration UI/UX et optimisation des performances", "Intégration de l'IA dans le cycle de développement"],
      en: ["Development and maintenance of the DELTA and SUCCESS financial management applications", "SaaS architecture, multi-tenancy and client data isolation", "Secure user spaces", "UI/UX improvements and performance optimization", "Integrating AI into the development cycle"],
    },
  },
  {
    company: "GBG — Global Business Group",
    role: { fr: "Développeur Web & Designer Freelance", en: "Freelance Web Developer & Designer" },
    period: { fr: "2023 → aujourd'hui", en: "2023 → present" },
    current: true,
    points: {
      fr: ["Applications métiers (notamment agriculture)", "Sites institutionnels et plateformes e-commerce (SCMC, KIC)", "Identité visuelle", "Transformation digitale"],
      en: ["Business applications (notably agriculture)", "Corporate websites and e-commerce platforms (SCMC, KIC)", "Visual identity", "Digital transformation"],
    },
  },
  {
    company: "MEV'TIC",
    period: { fr: "Juin 2022 → Août 2024", en: "June 2022 → Aug. 2024" },
    points: {
      fr: ["Interfaces web", "Outils internationaux", "Solutions utilisant l'IA", "Travail en équipe multidisciplinaire sur des projets technologiques"],
      en: ["Web interfaces", "International tools", "AI-powered solutions", "Multidisciplinary teamwork on technology projects"],
    },
  },
];

export type Education = { title: L; school: string; period: L; detail?: L };

export const education: Education[] = [
  {
    title: { fr: "Licence en Génie Logiciel", en: "Bachelor's degree in Software Engineering" },
    school: "HEC GECOS Formation",
    period: { fr: "2020 → 2023", en: "2020 → 2023" },
    detail: { fr: "Architecture logicielle · Développement Full-Stack", en: "Software architecture · Full-Stack development" },
  },
  {
    title: { fr: "BTS Informatique — Développement d'Applications", en: "BTS in Computer Science — Application Development" },
    school: "HEC GECOS Formation",
    period: { fr: "Mai 2021", en: "May 2021" },
  },
  {
    title: { fr: "Baccalauréat F2 — Informatique et électronique", en: "Baccalauréat F2 — Computing and electronics" },
    school: "Lycée Technique de Bouaké",
    period: { fr: "2019", en: "2019" },
  },
];
