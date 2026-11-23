"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { getDict, navItems } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight, Close, Menu, Moon, Sun } from "./Icons";

export function BrandMark() {
  return (
    <span className="brand__mark" aria-hidden="true">
      {profile.assets.logo ? <img src={profile.assets.logo} alt="" /> : "R"}
    </span>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const cur = document.documentElement.getAttribute("data-theme");
    setTheme(cur === "light" ? "light" : "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
  };
  return { theme, toggle };
}

export function Header({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const pathname = usePathname() || `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [open]);

  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const switchPath = (l: Locale) => pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${l}`);
  const isActive = (path: string) => pathname.startsWith(href(locale, path));

  return (
    <>
      <div className="topbar">
        <div className="container">
          <Link href={href(locale, "/contact")} className="topbar__avail">
            <span>{d.topbar.available}</span>
            <ArrowRight size={14} />
          </Link>
          <div className="topbar__right">
            <a className="topbar__link topbar__wa" href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              {d.topbar.whatsapp}
            </a>
            <nav className="lang" aria-label={d.topbar.language}>
              {(["fr", "en"] as Locale[]).map((l) => (
                <Link key={l} href={switchPath(l)} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="icon-btn"
              onClick={toggle}
              aria-label={theme === "dark" ? d.topbar.toLight : d.topbar.toDark}
              title={d.topbar.theme}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav">
          <Link href={href(locale)} className="brand" aria-label={`${profile.name} — ${d.nav.home}`}>
            <BrandMark />
            <span className="brand__name">{profile.brand}</span>
          </Link>
          <nav aria-label={d.nav.primary}>
            <ul className="nav__links">
              {navItems.map((n) => (
                <li key={n.key}>
                  <Link href={href(locale, n.path)} aria-current={isActive(n.path) ? "page" : undefined}>
                    {d.nav[n.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--ghost btn--sm" href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link className="btn btn--primary btn--sm" href={href(locale, "/contact")}>
              {d.nav.cta}
            </Link>
            <button
              ref={burgerRef}
              type="button"
              className="icon-btn nav__burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
              <span className="sr-only">{d.nav.menu}</span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label={d.nav.menu}>
          <div className="mobile-menu__top">
            <Link href={href(locale)} className="brand">
              <BrandMark />
              <span>{profile.brand}</span>
            </Link>
            <button ref={closeRef} type="button" className="icon-btn" style={{ width: 40, height: 40 }} onClick={() => setOpen(false)}>
              <Close />
              <span className="sr-only">{d.nav.close}</span>
            </button>
          </div>
          <nav aria-label={d.nav.primary}>
            <Link href={href(locale)} aria-current={pathname === href(locale) ? "page" : undefined}>
              {d.nav.home}
            </Link>
            {navItems.map((n) => (
              <Link key={n.key} href={href(locale, n.path)} aria-current={isActive(n.path) ? "page" : undefined}>
                {d.nav[n.key]}
              </Link>
            ))}
            <Link href={href(locale, "/contact")} aria-current={isActive("/contact") ? "page" : undefined}>
              {d.nav.contact}
            </Link>
          </nav>
          <div className="mobile-menu__foot">
            <Link className="btn btn--primary btn--block" href={href(locale, "/contact")}>
              {d.nav.cta}
            </Link>
            <a className="btn btn--ghost btn--block" href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link className="btn btn--soft btn--block" href={switchPath(otherLocale)} hrefLang={otherLocale}>
              {otherLocale === "en" ? "English" : "Français"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
