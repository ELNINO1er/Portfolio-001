"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Moteur d'animation au scroll :
 *  - `.reveal` / `.words` / `[data-inview]` → ajoute `.is-in` à l'entrée dans le viewport
 *  - `.stack` → sections empilées (la suivante glisse par-dessus la précédente)
 *  - `[data-scrub="enter"|"pin"]` → expose la progression de scroll en variable CSS `--p` (0 → 1)
 * Démarre après le préchargeur (classe `is-loading` sur <html>).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | null = null;
    const sequenceObservers: IntersectionObserver[] = [];
    let raf = 0;
    let started = false;

    /* ---------- Sections empilées ---------- */
    const stacks = Array.from(document.querySelectorAll<HTMLElement>(".stack"));
    const layoutStacks = () => {
      const vh = window.innerHeight;
      stacks.forEach((el, i) => {
        el.style.zIndex = String(i + 1);
        el.style.top = `${Math.min(0, vh - el.offsetHeight)}px`;
      });
    };
    layoutStacks();
    const ro = new ResizeObserver(layoutStacks);
    stacks.forEach((s) => ro.observe(s));

    /* ---------- Progression au scroll ---------- */
    const scrubs = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of scrubs) {
        const r = el.getBoundingClientRect();
        let p: number;
        if (el.dataset.scrub === "pin") {
          const total = el.offsetHeight - vh;
          p = total > 0 ? -r.top / total : 1;
        } else {
          // 0 quand le haut entre par le bas, 1 quand il atteint 25 % du viewport
          const start = vh;
          const end = vh * (Number(el.dataset.end ?? 0.25));
          p = (start - r.top) / (start - end);
        }
        p = Math.max(0, Math.min(1, p));
        el.style.setProperty("--p", reduce ? "1" : p.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    /* ---------- Révélations ---------- */
    const start = () => {
      if (started) return;
      started = true;
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in), .words:not(.is-in), [data-inview]:not(.is-in)"));
      const sequences = Array.from(document.querySelectorAll<HTMLElement>("[data-sequence]"));
      for (const sequence of sequences) {
        const reveal = () => {
          sequence.querySelectorAll(".reveal, .words, [data-inview], .circuit").forEach((el) => el.classList.add("is-in"));
        };
        if (!("IntersectionObserver" in window)) {
          reveal();
          continue;
        }
        const offset = Number(sequence.dataset.sequenceOffset ?? 0);
        const observer = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) return;
          reveal();
          observer.disconnect();
        }, { rootMargin: `0px 0px -${offset * 100}% 0px` });
        observer.observe(sequence);
        sequenceObservers.push(observer);
      }
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-in"));
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
      els.filter((el) => !el.closest("[data-sequence]")).forEach((el) => io!.observe(el));
    };

    if (root.classList.contains("is-loading")) {
      window.addEventListener("preloader:done", start, { once: true });
    } else {
      start();
    }

    return () => {
      io?.disconnect();
      sequenceObservers.forEach((observer) => observer.disconnect());
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("preloader:done", start);
    };
  }, [pathname]);

  return null;
}
