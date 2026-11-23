"use client";

import { useRouter } from "next/navigation";
import { useId, useRef, useState } from "react";
import { skillGroups, skillLabel, skillTints } from "@/data/skills";
import { getDict } from "@/data/ui";
import { href, t, type Locale } from "@/lib/i18n";
import { Send } from "../Icons";



export function SkillsPlayground({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const [active, setActive] = useState(0);
  const [idea, setIdea] = useState("");
  const router = useRouter();
  const base = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = skillGroups[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % skillGroups.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + skillGroups.length) % skillGroups.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = skillGroups.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    tabRefs.current[n]?.focus();
  };

  return (
    <div className="playground" data-inview>
      <div className="playground__halo" aria-hidden="true">
        <span className="playground__logo">RD</span>
      </div>
      <p className="playground__title">{d.skills.panel}</p>

      <div className="tabs" role="tablist" aria-label={d.skills.panel}>
        {skillGroups.map((g, i) => {
          const [bg, fg] = skillTints[g.key];
          return (
            <button
              key={g.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${base}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="tab"
              style={{ ["--i" as string]: i }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="tab__ico" style={{ background: bg, color: fg }} aria-hidden="true">
                {g.short}
              </span>
              <span style={{ minWidth: 0 }}>
                <span className="tab__title">{t(g.title, locale)}</span>
                <span className="tab__desc">{g.items.map((x) => skillLabel(x, locale)).join(" · ")}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="tabpanel" role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-tab-${active}`}>
        <div className="chips">
          {group.items.map((x) => (
            <span key={skillLabel(x, locale)} className="chip">
              {skillLabel(x, locale)}
            </span>
          ))}
        </div>
      </div>

      <form
        className="prompt"
        onSubmit={(e) => {
          e.preventDefault();
          const q = idea.trim();
          router.push(href(locale, "/contact") + (q ? `?message=${encodeURIComponent(q)}` : ""));
        }}
      >
        <label htmlFor={`${base}-idea`} className="sr-only">
          {d.skills.prompt}
        </label>
        <input id={`${base}-idea`} value={idea} onChange={(e) => setIdea(e.target.value)} placeholder={d.skills.prompt} maxLength={200} />
        <button type="submit" className="icon-btn" style={{ width: 38, height: 38, background: "var(--accent-btn)", color: "#fff", border: 0 }}>
          <Send />
          <span className="sr-only">{d.skills.send}</span>
        </button>
      </form>
      <p className="prompt__note">{d.skills.note}</p>
    </div>
  );
}
