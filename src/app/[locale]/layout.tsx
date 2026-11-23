import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/Motion";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { SITE_URL, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";
import "../motion.css";
import "../text-motion.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale);
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090a" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');d.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}d.classList.add('js');try{var home=/^\\/(fr|en)\\/?$/.test(location.pathname);var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(home&&!rm)d.classList.add('is-loading');}catch(e){}})();`;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const d = getDict(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t(profile.title, locale),
    url: SITE_URL,
    email: `mailto:${profile.contact.email}`,
    telephone: profile.contact.phone,
    nationality: t(profile.nationality, locale),
    address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
    sameAs: [profile.contact.linkedin, profile.contact.github],
    knowsLanguage: ["fr", "en"],
  };

  return (
    <html lang={locale} data-theme="dark" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          {d.skip}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} />
        <RevealObserver />
        <Cursor />
      </body>
    </html>
  );
}
