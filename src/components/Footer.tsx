import Link from "next/link";
import { profile } from "@/data/profile";
import { getDict, navItems } from "@/data/ui";
import { href, t, type Locale } from "@/lib/i18n";
import { AbidjanClock } from "./AbidjanClock";
import { LogoMark } from "./LogoMark";
import { GitHub, LinkedIn, Mail, Shop, WhatsApp } from "./Icons";

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const c = profile.contact;
  return (
    <footer className="footer">
      <div className="stars" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href={href(locale)} className="footer__logo" data-inview aria-label={profile.name}>
              <LogoMark word={profile.name} className="lm--footer" />
            </Link>
            <p className="footer__tag reveal" style={{ ["--d" as string]: "300ms" }}>{t(profile.title, locale)}</p>
            <div className="socials reveal" style={{ ["--d" as string]: "400ms" }}>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a href={c.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
              <a href={c.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsApp />
              </a>
              <a href={`mailto:${c.email}`} aria-label="Email">
                <Mail />
              </a>
              <a href={c.chariow} target="_blank" rel="noopener noreferrer" aria-label="Chariow">
                <Shop />
              </a>
            </div>
          </div>
          <div className="reveal" style={{ ["--d" as string]: "150ms" }}>
            <h2>{d.footer.nav}</h2>
            <ul>
              <li>
                <Link href={href(locale)}>{d.nav.home}</Link>
              </li>
              {navItems.map((n) => (
                <li key={n.key}>
                  <Link href={href(locale, n.path)}>{d.nav[n.key]}</Link>
                </li>
              ))}
              <li>
                <Link href={href(locale, "/contact")}>{d.nav.contact}</Link>
              </li>
            </ul>
          </div>
          <div className="reveal" style={{ ["--d" as string]: "250ms" }}>
            <h2>{d.footer.social}</h2>
            <ul>
              <li>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href={c.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href={c.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <a href={c.chariow} target="_blank" rel="noopener noreferrer">Chariow</a>
              </li>
            </ul>
          </div>
          <div className="reveal" style={{ ["--d" as string]: "350ms" }}>
            <h2>{d.footer.contact}</h2>
            <ul>
              <li>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </li>
              <li>
                <a href={c.phoneHref}>{c.phone}</a>
              </li>
              <li>
                <span style={{ color: "var(--muted)" }}>{t(profile.location, locale)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__mid reveal" style={{ ["--d" as string]: "200ms" }}>
          <p className="footer__sig">{t(profile.signature, locale)}</p>
          <AbidjanClock label={d.footer.time} locale={locale} />
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.brand}. {d.footer.rights}
          </span>
          <span>{profile.domain}</span>
        </div>
      </div>
    </footer>
  );
}
