import type { L, LL } from "@/lib/i18n";

export type ProjectGroup = "saas" | "ecommerce" | "platforms" | "sites";

export type ModuleGroup = { title: L; items: LL };

export type Project = {
  slug: string;
  name: string;
  group: ProjectGroup;
  category: L;
  status: L;
  /** Statut "en cours" → pastille orange ; sinon verte */
  live?: boolean;
  featured?: boolean;
  confidential?: boolean;
  url?: string;
  hook: L;
  summary: L;
  workflow?: LL;
  problem?: L;
  solution?: L;
  role?: LL;
  stack?: string[];
  features?: LL;
  /** Modules regroupés (ex. NOVA par environnement, KoraFlow par domaine) */
  modules?: ModuleGroup[];
  architecture?: LL;
  value?: L;
  note?: L;
  /** Capture : chemin dans /public, null = placeholder */
  image?: string | null;
};

export const projects: Project[] = [
  {
    slug: "qr-resto",
    name: "QR Resto",
    group: "saas",
    category: { fr: "SaaS Restauration", en: "Restaurant SaaS" },
    status: { fr: "Terminé · Installation locale", en: "Completed · Local installation" },
    featured: true,
    url: "https://qrcodemht.mhtechconsulting.com",
    hook: {
      fr: "Tout le parcours restaurant, du QR de table aux statistiques.",
      en: "The whole restaurant journey, from table QR code to analytics.",
    },
    summary: {
      fr: "Le client scanne, commande et paie ; cuisine et salle suivent chaque commande en temps réel ; le gérant pilote via les statistiques.",
      en: "Customers scan, order and pay; kitchen and floor staff follow every order in real time; the manager steers with analytics.",
    },
    workflow: {
      fr: ["QR de table", "Menu", "Commande", "Cuisine", "Serveur", "Paiement", "Statistiques"],
      en: ["Table QR", "Menu", "Order", "Kitchen", "Waiter", "Payment", "Analytics"],
    },
    problem: {
      fr: "Chaque transmission entre commande, cuisine, salle et caisse crée de l'attente.",
      en: "Every hand-off between ordering, kitchen, floor and checkout creates waiting time.",
    },
    solution: {
      fr: "QR par table, commandes en cuisine en temps réel (WebSocket), suivi jusqu'au paiement.",
      en: "A QR code per table, real-time kitchen orders (WebSocket), tracking all the way to payment.",
    },
    role: {
      fr: ["Conception produit", "Développement full-stack", "Architecture SaaS"],
      en: ["Product design", "Full-stack development", "SaaS architecture"],
    },
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL", "JWT", "Socket.io"],
    features: {
      fr: ["Menu digital", "QR par table", "Commandes", "Cuisine temps réel", "Gestion des tables", "Espace serveur", "Réservations", "Avis", "Tableau de bord", "Statistiques", "Multi-restaurant", "Suivi des commandes"],
      en: ["Digital menu", "QR per table", "Orders", "Real-time kitchen", "Table management", "Waiter space", "Reservations", "Reviews", "Dashboard", "Analytics", "Multi-restaurant", "Order tracking"],
    },
    architecture: {
      fr: ["Front React + Vite", "API Node.js / Express", "Temps réel via WebSocket (Socket.io)", "Authentification JWT", "Base MySQL", "Multi-restaurant"],
      en: ["React + Vite front end", "Node.js / Express API", "Real time over WebSocket (Socket.io)", "JWT authentication", "MySQL database", "Multi-restaurant"],
    },
    value: {
      fr: "Réduire l'attente, améliorer l'expérience client, fluidifier les opérations.",
      en: "Reduce waiting time, improve the customer experience, streamline operations.",
    },
    image: null,
  },
  {
    slug: "koraflow",
    name: "KoraFlow",
    group: "saas",
    category: { fr: "SaaS de gestion d'entreprise · CRM", en: "Business management SaaS · CRM" },
    status: { fr: "En développement", en: "In development" },
    live: true,
    featured: true,
    hook: {
      fr: "Tout le cycle commercial et opérationnel sur une seule plateforme.",
      en: "The whole sales and operations cycle on a single platform.",
    },
    summary: {
      fr: "Tout le cycle commercial et opérationnel sur une seule plateforme multi-tenant (données isolées par entreprise).",
      en: "The whole sales and operations cycle on a single multi-tenant platform (data isolated per company).",
    },
    workflow: {
      fr: ["Prospect", "Client", "Rendez-vous", "Devis", "Contrat", "Paiement", "Projet", "Facture"],
      en: ["Lead", "Client", "Appointment", "Quote", "Contract", "Payment", "Project", "Invoice"],
    },
    role: {
      fr: ["Conception produit", "Full-stack", "Architecture multi-tenant"],
      en: ["Product design", "Full-stack", "Multi-tenant architecture"],
    },
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MySQL"],
    modules: [
      {
        title: { fr: "Commercial", en: "Sales" },
        items: { fr: ["CRM", "Prospects", "Clients", "Entreprises", "Services"], en: ["CRM", "Leads", "Clients", "Companies", "Services"] },
      },
      {
        title: { fr: "Contractualisation", en: "Contracts" },
        items: { fr: ["Rendez-vous", "Devis", "Contrats", "Signature", "Factures", "Paiements"], en: ["Appointments", "Quotes", "Contracts", "Signature", "Invoices", "Payments"] },
      },
      {
        title: { fr: "Opérations", en: "Operations" },
        items: { fr: ["Projets", "Tâches", "Documents", "Portail client"], en: ["Projects", "Tasks", "Documents", "Client portal"] },
      },
      {
        title: { fr: "Administration", en: "Administration" },
        items: { fr: ["Tableau de bord", "Utilisateurs", "Rôles", "Permissions", "Audit"], en: ["Dashboard", "Users", "Roles", "Permissions", "Audit"] },
      },
    ],
    architecture: {
      fr: ["Multi-tenant : données isolées par entreprise", "Rôles & permissions (RBAC)", "Journal d'audit", "Portail client"],
      en: ["Multi-tenant: data isolated per company", "Roles & permissions (RBAC)", "Audit log", "Client portal"],
    },
    image: null,
  },
  {
    slug: "success",
    name: "SUCCESS",
    group: "platforms",
    category: { fr: "Plateforme de gestion d'entreprise · ERP", en: "Business management platform · ERP" },
    status: { fr: "Actif · Projet professionnel (OM Consulting Group)", en: "Active · Professional project (OM Consulting Group)" },
    live: true,
    featured: true,
    confidential: true,
    hook: {
      fr: "Une plateforme unique pour piloter l'entreprise.",
      en: "One platform to run the business.",
    },
    summary: {
      fr: "Centralise finance, comptabilité, RH, gestion administrative, gestion de projets et processus métiers.",
      en: "Centralizes finance, accounting, HR, administration, project management and business processes.",
    },
    role: {
      fr: ["Full-stack", "Interfaces professionnelles", "Architecture d'application"],
      en: ["Full-stack", "Professional interfaces", "Application architecture"],
    },
    features: {
      fr: ["Finance", "Comptabilité", "RH", "Gestion administrative", "Gestion de projets", "Processus métiers"],
      en: ["Finance", "Accounting", "HR", "Administration", "Project management", "Business processes"],
    },
    note: {
      fr: "Projet professionnel confidentiel : aucune donnée ni capture n'est publiée.",
      en: "Confidential professional project: no data or screenshots are published.",
    },
    image: null,
  },
  {
    slug: "nova",
    name: "NOVA",
    group: "platforms",
    category: { fr: "HealthTech", en: "HealthTech" },
    status: { fr: "Optimisation & corrections", en: "Optimization & fixes" },
    live: true,
    featured: true,
    hook: {
      fr: "La santé numérique en 4 environnements connectés.",
      en: "Digital health across 4 connected environments.",
    },
    summary: {
      fr: "Plateforme de santé numérique avec 4 environnements connectés : Patient, Médecin, Pharmacie, Administration.",
      en: "Digital health platform with 4 connected environments: Patient, Doctor, Pharmacy, Administration.",
    },
    workflow: {
      fr: ["Patient", "Médecin", "Pharmacie", "Administration"],
      en: ["Patient", "Doctor", "Pharmacy", "Administration"],
    },
    role: {
      fr: ["Conception produit", "Full-stack", "Architecture API"],
      en: ["Product design", "Full-stack", "API architecture"],
    },
    stack: ["React 19", "Vite", "Tailwind CSS", "Express.js", "MySQL", "JWT", "Swagger", "Docker", "CI/CD"],
    modules: [
      {
        title: { fr: "Patient", en: "Patient" },
        items: {
          fr: ["Dossier médical", "Constantes", "Traitements", "Pilulier", "Ordonnances", "Laboratoire", "Rendez-vous", "Messagerie", "Vaccination", "Assurance", "SOS"],
          en: ["Medical record", "Vital signs", "Treatments", "Pill organizer", "Prescriptions", "Laboratory", "Appointments", "Messaging", "Vaccination", "Insurance", "SOS"],
        },
      },
      {
        title: { fr: "Médecin", en: "Doctor" },
        items: {
          fr: ["Patients", "Consultations", "Prescriptions", "Agenda", "Maladies chroniques", "Signature", "Statistiques", "Messagerie"],
          en: ["Patients", "Consultations", "Prescriptions", "Calendar", "Chronic diseases", "Signature", "Analytics", "Messaging"],
        },
      },
      {
        title: { fr: "Pharmacie", en: "Pharmacy" },
        items: { fr: ["Ordonnances", "Vérification", "Délivrance"], en: ["Prescriptions", "Verification", "Dispensing"] },
      },
      {
        title: { fr: "Administration", en: "Administration" },
        items: { fr: ["Utilisateurs", "Permissions", "Statistiques", "Supervision"], en: ["Users", "Permissions", "Analytics", "Supervision"] },
      },
    ],
    architecture: {
      fr: ["API Express.js documentée (Swagger)", "Authentification JWT", "Base MySQL", "Conteneurisation Docker", "CI/CD"],
      en: ["Express.js API documented with Swagger", "JWT authentication", "MySQL database", "Docker containers", "CI/CD"],
    },
    image: null,
  },
  {
    slug: "noces",
    name: "Noces",
    group: "saas",
    category: { fr: "SaaS Mariage", en: "Wedding SaaS" },
    status: { fr: "Terminé", en: "Completed" },
    featured: true,
    hook: {
      fr: "La gestion digitale du mariage, de l'invitation au livre d'or.",
      en: "Digital wedding management, from invitation to guestbook.",
    },
    summary: {
      fr: "La gestion digitale du mariage, de l'invitation au livre d'or.",
      en: "Digital wedding management, from invitation to guestbook.",
    },
    workflow: {
      fr: ["Invitation", "RSVP", "Mini-site", "Plan de tables", "Check-in QR", "Galerie", "Livre d'or"],
      en: ["Invitation", "RSVP", "Mini-site", "Seating plan", "QR check-in", "Gallery", "Guestbook"],
    },
    stack: ["Next.js", "TypeScript", "React", "MySQL", "Prisma", "Tailwind CSS", "NextAuth", "Zod"],
    image: null,
  },
  {
    slug: "scmc-ecommerce",
    name: "SCMC E-commerce",
    group: "ecommerce",
    category: { fr: "E-commerce · Projet client", en: "E-commerce · Client project" },
    status: { fr: "Terminé", en: "Completed" },
    url: "https://scmc-ci.com",
    hook: {
      fr: "La boutique en ligne de SCMC, transformation du cacao.",
      en: "SCMC's online store, cocoa processing.",
    },
    summary: {
      fr: "Boutique en ligne de SCMC (transformation du cacao, groupe GBG) : catalogue, fiches produits, panier, offre professionnels, prix en FCFA, bilingue FR/EN.",
      en: "Online store for SCMC (cocoa processing, GBG group): catalog, product pages, cart, professional offer, prices in FCFA, bilingual FR/EN.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: {
      fr: ["Catalogue", "Fiches produits", "Panier", "Offre professionnels", "Prix en FCFA", "Bilingue FR/EN", "Paiements : CinetPay, Mobile Money (selon besoins)"],
      en: ["Catalog", "Product pages", "Cart", "Professional offer", "Prices in FCFA", "Bilingual FR/EN", "Payments: CinetPay, Mobile Money (as needed)"],
    },
    image: null,
  },
  {
    slug: "kic-ecommerce",
    name: "KIC E-commerce",
    group: "ecommerce",
    category: { fr: "E-commerce B2B · Projet client", en: "B2B e-commerce · Client project" },
    status: { fr: "Terminé", en: "Completed" },
    url: "https://kic-fr.com",
    hook: {
      fr: "« De la fève à l'excellence ».",
      en: "“From bean to excellence”.",
    },
    summary: {
      fr: "Boutique de KIC — Konan Industrie et Chocolaterie (France) : cacao semi-fini issu de filières durables pour artisans et transformateurs européens.",
      en: "Store for KIC — Konan Industrie et Chocolaterie (France): semi-finished cocoa from sustainable supply chains for European artisans and processors.",
    },
    features: {
      fr: ["Plusieurs conditionnements", "Favoris", "Prix en euros", "Récit « De la fève à l'excellence »"],
      en: ["Multiple pack sizes", "Favorites", "Prices in euros", "“From bean to excellence” storytelling"],
    },
    image: null,
  },
  {
    slug: "gbg-digital-platform",
    name: "GBG Digital Platform",
    group: "sites",
    category: { fr: "Corporate · Projet client", en: "Corporate · Client project" },
    status: { fr: "Terminé", en: "Completed" },
    hook: {
      fr: "La présence digitale de Global Business Group.",
      en: "Global Business Group's digital presence.",
    },
    summary: {
      fr: "Présence digitale de Global Business Group (groupe de SCMC et KIC) : site institutionnel, identité visuelle, applications métiers (agriculture), transformation digitale.",
      en: "Digital presence of Global Business Group (parent group of SCMC and KIC): corporate website, visual identity, business applications (agriculture), digital transformation.",
    },
    features: {
      fr: ["Site institutionnel", "Identité visuelle", "Applications métiers (agriculture)", "Transformation digitale"],
      en: ["Corporate website", "Visual identity", "Business applications (agriculture)", "Digital transformation"],
    },
    image: null,
  },
  {
    slug: "leconomiste",
    name: "L'Économiste",
    group: "sites",
    category: { fr: "Média · Plateforme d'information", en: "Media · News platform" },
    status: { fr: "En ligne", en: "Live" },
    live: true,
    url: "https://leconomistedelacotedivoire.com",
    hook: {
      fr: "« Le quotidien des décideurs ».",
      en: "“The decision-makers' daily”.",
    },
    summary: {
      fr: "Fil d'actualité en direct, rubriques Finance & BRVM, Économie, UEMOA, bilingue FR/EN, tableau de bord d'administration.",
      en: "Live news feed, Finance & BRVM, Economy and WAEMU sections, bilingual FR/EN, admin dashboard.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    features: {
      fr: ["Fil d'actualité en direct", "Rubriques Finance & BRVM", "Économie", "UEMOA", "Bilingue FR/EN", "Tableau de bord d'administration"],
      en: ["Live news feed", "Finance & BRVM sections", "Economy", "WAEMU", "Bilingual FR/EN", "Admin dashboard"],
    },
    image: null,
  },
  {
    slug: "gym-management",
    name: "Gym Management",
    group: "saas",
    category: { fr: "SaaS Fitness", en: "Fitness SaaS" },
    status: { fr: "Terminé", en: "Completed" },
    hook: {
      fr: "Membres, abonnements et fréquentation dans un seul outil.",
      en: "Members, subscriptions and attendance in a single tool.",
    },
    summary: {
      fr: "Membres, abonnements, paiements, QR membre, check-in, coachs, programmes, exercices, planning, statistiques de fréquentation, suivi de progression.",
      en: "Members, subscriptions, payments, member QR code, check-in, coaches, programs, exercises, scheduling, attendance analytics, progress tracking.",
    },
    features: {
      fr: ["Membres", "Abonnements", "Paiements", "QR membre", "Check-in", "Coachs", "Programmes", "Exercices", "Planning", "Statistiques de fréquentation", "Suivi de progression"],
      en: ["Members", "Subscriptions", "Payments", "Member QR", "Check-in", "Coaches", "Programs", "Exercises", "Scheduling", "Attendance analytics", "Progress tracking"],
    },
    note: {
      fr: "Nom non définitif · stack à confirmer.",
      en: "Working name · stack to be confirmed.",
    },
    image: null,
  },
  {
    slug: "mh-tech-consulting",
    name: "MH Tech Consulting",
    group: "sites",
    category: { fr: "Corporate · Produits digitaux", en: "Corporate · Digital products" },
    status: { fr: "Actif", en: "Active" },
    live: true,
    url: "https://mhtechconsulting.com",
    hook: {
      fr: "Le site de mon entreprise et le hub de nos produits.",
      en: "My company's website and the hub of our products.",
    },
    summary: {
      fr: "Site de mon entreprise (co-fondateur) : conseil IT, cybersécurité, cloud, DevOps, design digital, staffing tech, et hub de nos produits (KoraFlow, QR Resto, Noces, NOVA, E-commerce, Gym). Prise de rendez-vous et demande de devis.",
      en: "My company's website (co-founder): IT consulting, cybersecurity, cloud, DevOps, digital design, tech staffing, and the hub of our products (KoraFlow, QR Resto, Noces, NOVA, E-commerce, Gym). Appointment booking and quote requests.",
    },
    features: {
      fr: ["Conseil IT", "Cybersécurité", "Cloud", "DevOps", "Design digital", "Staffing tech", "Hub produits", "Prise de rendez-vous", "Demande de devis"],
      en: ["IT consulting", "Cybersecurity", "Cloud", "DevOps", "Digital design", "Tech staffing", "Product hub", "Appointment booking", "Quote requests"],
    },
    image: null,
  },
  {
    slug: "work",
    name: "Work",
    group: "sites",
    category: { fr: "Plateforme d'actualité en ligne", en: "Online news platform" },
    status: { fr: "En développement", en: "In development" },
    live: true,
    hook: {
      fr: "Une plateforme d'actualité en ligne.",
      en: "An online news platform.",
    },
    summary: {
      fr: "Plateforme d'actualité en ligne actuellement en développement.",
      en: "Online news platform currently in development.",
    },
    note: {
      fr: "Stack et fonctionnalités publiées une fois confirmées.",
      en: "Stack and features will be published once confirmed.",
    },
    image: null,
  },
];

export const projectGroups: { key: "all" | ProjectGroup; label: L }[] = [
  { key: "all", label: { fr: "Tous", en: "All" } },
  { key: "saas", label: { fr: "SaaS", en: "SaaS" } },
  { key: "ecommerce", label: { fr: "E-commerce", en: "E-commerce" } },
  { key: "platforms", label: { fr: "Plateformes", en: "Platforms" } },
  { key: "sites", label: { fr: "Sites & médias", en: "Sites & media" } },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
