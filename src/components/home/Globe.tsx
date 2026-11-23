"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

/** Globe pointillé (WebGL, cobe) centré sur Abidjan, halo orange. */
export function Globe() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { lat, lng } = profile.coordinates;
    // Oriente le globe pour que l'Afrique de l'Ouest soit face à l'utilisateur
    // Formule cobe pour faire face à un point [lat, lng] (Abidjan), légère inclinaison
    const baseTheta = (lat * Math.PI) / 180 + 0.12;
    let phi = Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2) - 0.35;
    let width = canvas.offsetWidth;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const isLight = () => document.documentElement.getAttribute("data-theme") === "light";

    const build = () => {
      globe?.destroy();
      width = canvas.offsetWidth;
      const light = isLight();
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi,
        theta: baseTheta,
        dark: light ? 0 : 1,
        diffuse: light ? 1.4 : 1.6,
        mapSamples: 18000,
        mapBrightness: light ? 2.2 : 9,
        mapBaseBrightness: 0,
        baseColor: light ? [1, 0.93, 0.88] : [0.32, 0.2, 0.24],
        markerColor: [1, 0.4, 0.12],
        glowColor: light ? [1, 0.75, 0.6] : [0.85, 0.3, 0.08],
        markers: [{ location: [lat, lng], size: 0.08 }],
        onRender: (state) => {
          if (!reduce) phi += 0.0012;
          state.phi = phi;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
      requestAnimationFrame(() => canvas.classList.add("is-ready"));
    };

    build();
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    const onTheme = () => build();
    window.addEventListener("resize", onResize);
    window.addEventListener("themechange", onTheme);
    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("themechange", onTheme);
    };
  }, []);

  return (
    <div className="globe-wrap">
      <canvas ref={ref} aria-hidden="true" />
    </div>
  );
}
