import type { Metadata } from "next";
import { seo } from "@/data/ui";
import { SITE_URL, href, locales, type Locale } from "./i18n";

export function buildMetadata(locale: Locale, path = "/", title?: string, description?: string): Metadata {
  const base = seo[locale];
  const fullTitle = title ? `${title} — Romaric BOMBADE` : base.title;
  const desc = description ?? base.description;
  const url = `${SITE_URL}${href(locale, path)}`;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE_URL}${href(l, path)}`;
  languages["x-default"] = `${SITE_URL}${href("fr", path)}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: "Romaric BOMBADE",
      locale: locale === "fr" ? "fr_CI" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_CI"],
      // Ajoutez /public/og.png (1200×630) puis décommentez :
      // images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc },
  };
}
