export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** A bilingual string. */
export type L = { fr: string; en: string };
/** A bilingual list. */
export type LL = { fr: string[]; en: string[] };

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function t(value: L, locale: Locale): string {
  return value[locale];
}

export function tl(value: LL, locale: Locale): string[] {
  return value[locale];
}

export const SITE_URL = "https://romaricbombade.com";

/** Build a localized path: href("fr", "/projects") -> "/fr/projects/" */
export function href(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  return `/${locale}${clean}/`;
}
