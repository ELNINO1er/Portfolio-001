"use client";

import { useEffect, useRef } from "react";

/**
 * Paragraphe révélé ligne par ligne (chaque ligne monte depuis un masque),
 * comme dans la maquette. Les lignes sont recalculées au redimensionnement.
 */
export function Lines({
  text,
  className,
  as: Tag = "p",
  delay = 0,
  style,
}: {
  text: string;
  className?: string;
  as?: "p" | "span" | "div";
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const items = Array.from(el.querySelectorAll<HTMLElement>(".lw"));
      let line = -1;
      let lastTop = -Infinity;
      for (const it of items) {
        const top = it.offsetTop;
        if (top > lastTop + 2) {
          line++;
          lastTop = top;
        }
        it.style.setProperty("--line", String(line));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={`lines ${className ?? ""}`} data-inview style={{ ...style, ["--d0" as string]: `${delay}ms` }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i}>
            <span className="lw">
              <span>{w}</span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </Comp>
  );
}
