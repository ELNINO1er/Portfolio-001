"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { profile } from "@/data/profile";
import { LogoMark } from "./LogoMark";

// Keep the full word visible for 850 ms after its last letter settles.
const PANEL_START = 2050 + (profile.brand.length - 1) * 160 + 600 + 850;
const HERO_START = PANEL_START + 180;
const FADE_START = PANEL_START + 550;
const END = FADE_START + 450;

/**
 * Préchargeur (au chargement de la page). Animation en CSS pure : elle démarre
 * dès le premier rendu, avant même l'hydratation de React.
 */
export function Preloader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("is-loading")) {
      setGone(true);
      return;
    }
    const a = window.setTimeout(() => window.dispatchEvent(new Event("preloader:done")), HERO_START);
    const b = window.setTimeout(() => {
      root.classList.remove("is-loading");
      setGone(true);
    }, END);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="preloader"
      aria-hidden="true"
      style={{ "--panel-start": `${PANEL_START}ms`, "--fade-start": `${FADE_START}ms` } as CSSProperties}
    >
      <svg className="preloader__r-trace" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M28 78V23H51C67 23 75 30 75 42S67 61 51 61H28M51 61L76 81" pathLength="1" />
      </svg>
      <LogoMark word={profile.brand} className="lm--xl" wordOnly />
      <div className="preloader__panel">
        <span className="preloader__beam" />
      </div>
    </div>
  );
}
