"use client";

import { useEffect, useState } from "react";

/** Mots qui tournent dans la sous-accroche. */
export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span className="rotator" aria-hidden="true">
        {words.map((w, idx) => (
          <span key={w} data-state={idx === i ? "in" : idx === (i - 1 + words.length) % words.length ? "out" : "next"}>
            <span className="rotator__word">{w}</span>
          </span>
        ))}
      </span>
    </>
  );
}
