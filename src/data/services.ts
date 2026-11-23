import type { L, LL } from "@/lib/i18n";

export type Service = {
  key: string;
  name: L;
  tier: string;
  price: number; // FCFA
  delay: L;
  features: LL;
  /** Lien de commande Chariow ; null = échange requis avant paiement */
  orderUrl: string | null;
  note?: L;
  /** Vidéo de démo (dans /public) ; null = placeholder */
  demoVideo: string | null;
};

export const services: Service[] = [
  {
    key: "logo-animation",
    name: { fr: "Animation de logo", en: "Logo animation" },
    tier: "Signature",
    price: 25000,
    delay: { fr: "3 jours ouvrés", en: "3 business days" },
    features: {
      fr: ["Animation de 6 à 10 s à partir du logo", "Couleurs, nom et slogan court", "Formats 1080×1920 et 1080×1080", "Une série de retouches", "Livraison MP4"],
      en: ["6–10 s animation based on your logo", "Colors, name and short tagline", "1080×1920 and 1080×1080 formats", "One round of revisions", "MP4 delivery"],
    },
    orderUrl: "https://ajhmnovu.mychariow.market/prd_79f2ejup",
    demoVideo: null,
  },
  {
    key: "promo-video",
    name: { fr: "Vidéo promotionnelle", en: "Promotional video" },
    tier: "Essentiel",
    price: 65000,
    delay: { fr: "5 jours ouvrés", en: "5 business days" },
    features: {
      fr: ["Vidéo de 30 s max", "Script court validé avant animation", "Vertical 1080×1920 en français", "Textes animés, logo et coordonnées", "Deux séries de retouches"],
      en: ["Video up to 30 s", "Short script approved before animation", "Vertical 1080×1920, in French", "Animated text, logo and contact details", "Two rounds of revisions"],
    },
    orderUrl: "https://ajhmnovu.mychariow.market/prd_ihbf28ky",
    demoVideo: null,
  },
  {
    key: "showcase-site",
    name: { fr: "Site vitrine", en: "Showcase website" },
    tier: "Présence Pro",
    price: 250000,
    delay: { fr: "15 jours ouvrés", en: "15 business days" },
    features: {
      fr: ["Jusqu'à 5 pages (accueil, entreprise, services, réalisations, contact)", "Responsive", "Liens WhatsApp, téléphone, réseaux", "Formulaire de contact et SEO de base", "Mise en ligne + 14 jours de corrections"],
      en: ["Up to 5 pages (home, company, services, work, contact)", "Responsive", "WhatsApp, phone and social links", "Contact form and basic SEO", "Go-live + 14 days of fixes"],
    },
    orderUrl: null,
    note: {
      fr: "Un échange est nécessaire avant paiement pour valider le périmètre.",
      en: "A conversation is required before payment to validate the scope.",
    },
    demoVideo: null,
  },
];

export function formatFCFA(n: number): string {
  // Espace fine insécable comme séparateur de milliers : 25 000 FCFA
  return `${n.toLocaleString("fr-FR").replace(/ | /g, " ")} FCFA`;
}

export function whatsappLink(base: string, service: Service, locale: "fr" | "en"): string {
  const msg =
    locale === "fr"
      ? `Bonjour Romaric, je suis intéressé(e) par l'offre « ${service.name.fr} — ${service.tier} » (${formatFCFA(service.price)}). Pouvons-nous en discuter ?`
      : `Hello Romaric, I'm interested in the “${service.name.en} — ${service.tier}” offer (${formatFCFA(service.price)}). Can we talk about it?`;
  return `${base}?text=${encodeURIComponent(msg)}`;
}
