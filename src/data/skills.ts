import type { L } from "@/lib/i18n";

export type SkillGroup = { key: string; title: L; short: string; items: L[] | string[] };

const s = (fr: string, en: string): L => ({ fr, en });

export const skillGroups: SkillGroup[] = [
  { key: "frontend", short: "FE", title: s("Frontend", "Frontend"), items: ["Next.js", "React", "TypeScript", "Angular", "Tailwind CSS", "HTML", "CSS"] },
  { key: "backend", short: "BE", title: s("Backend", "Backend"), items: ["Node.js", "Express.js", "PHP", "Laravel", "Symfony", "Python", "APIs REST"] },
  { key: "database", short: "DB", title: s("Base de données", "Database"), items: ["MySQL", "SQL"] },
  {
    key: "architecture",
    short: "AR",
    title: s("Architecture", "Architecture"),
    items: [
      s("SaaS", "SaaS"),
      s("Multi-tenant", "Multi-tenant"),
      s("RBAC", "RBAC"),
      s("Authentification", "Authentication"),
      s("Architecture modulaire", "Modular architecture"),
      s("Gestion des rôles", "Role management"),
      s("Portails clients", "Client portals"),
      s("Tableaux de bord", "Dashboards"),
      s("Systèmes de paiement", "Payment systems"),
      s("Génération de documents", "Document generation"),
      s("Notifications", "Notifications"),
    ],
  },
  { key: "devops", short: "OP", title: s("DevOps", "DevOps"), items: ["Linux", "Git", "GitHub", "Docker", "CI/CD"] },
  { key: "ai", short: "AI", title: s("IA", "AI"), items: ["ChatGPT", "Claude", "Gemini", "Cursor"] },
  { key: "nocode", short: "NC", title: s("No-Code", "No-Code"), items: ["Jotform", "WordPress", "Joomla", "Glide"] },
];

export function skillLabel(item: L | string, locale: "fr" | "en"): string {
  return typeof item === "string" ? item : item[locale];
}

/** Couleurs des pastilles par catégorie [fond, texte] */
export const skillTints: Record<string, [string, string]> = {
  frontend: ["#e8f5d9", "#3f7d14"],
  backend: ["#fdeedd", "#b54708"],
  database: ["#e0ecff", "#1d4ed8"],
  architecture: ["#fde4ea", "#be123c"],
  devops: ["#e6f4f1", "#0f766e"],
  ai: ["#efe7ff", "#6d28d9"],
  nocode: ["#fff4cc", "#a16207"],
};
