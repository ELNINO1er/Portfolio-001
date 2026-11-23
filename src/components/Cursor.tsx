"use client";

import { useEffect, useRef } from "react";

/** Curseur point (blanc sur sombre, noir sur clair grâce à mix-blend-mode). Souris uniquement. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || !el) return;
    document.documentElement.classList.add("has-cursor");

    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf = 0;
    const loop = () => {
      cx += (x - cx) * (reduce ? 1 : 0.25);
      cy += (y - cy) * (reduce ? 1 : 0.25);
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as Element | null;
      el.classList.toggle("is-hover", !!t?.closest("a, button, summary, [role='tab'], label, select"));
      el.classList.toggle("is-text", !!t?.closest("input, textarea"));
    };
    const leave = () => el.classList.add("is-out");
    const enter = () => el.classList.remove("is-out");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span />
    </div>
  );
}
