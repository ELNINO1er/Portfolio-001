import Link from "next/link";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { href, t, tl, type Locale } from "@/lib/i18n";
import { Rotator } from "../Rotator";
import { Eyebrow, Words } from "../Words";

/* Tracés du circuit (viewBox 1200×440) — la puce centrale est à (600, 202). */
const traces = [
  "M540 182 H300 L196 88 H96",
  "M540 202 H48",
  "M540 222 H320 L208 361 H108",
  "M660 182 H900 L1004 79 H1104",
  "M660 202 H1152",
  "M660 222 H880 L992 361 H1092",
  "M582 262 V440",
  "M600 262 V440",
  "M618 262 V440",
  "M540 192 H400 L300 0",
  "M660 212 H800 L930 440",
];

const nodes = [
  { x: 8, y: 20, label: "Next.js", mono: "N", outer: false },
  { x: 4, y: 46, label: "React", mono: "⚛", outer: true },
  { x: 9, y: 82, label: "Node.js", mono: "JS", outer: false },
  { x: 92, y: 18, label: "Laravel", mono: "L", outer: false },
  { x: 96, y: 46, label: "Docker", mono: "D", outer: true },
  { x: 91, y: 82, label: "MySQL", mono: "SQL", outer: false },
];

export function Hero({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const r = profile.rotating;
  return (
    <section className="hero stack" data-sequence aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="beam" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="reveal">
          <Eyebrow>{d.hero.badge}</Eyebrow>
        </div>
        <Words as="h1" id="hero-title" className="h1 hero__title" text={t(profile.headline, locale)} />
        <p className="hero__sub reveal" style={{ ["--d" as string]: "700ms" }}>
          {t(r.before, locale)} <Rotator words={tl(r.words, locale)} /> {t(r.after, locale)}
        </p>
        <div className="hero__ctas reveal" style={{ ["--d" as string]: "900ms" }}>
          <Link className="btn btn--primary" href={href(locale, "/projects")}>
            {d.hero.primary}
          </Link>
          <Link className="btn btn--ghost" href={href(locale, "/contact")}>
            {d.hero.secondary}
          </Link>
        </div>
      </div>

      <div className="circuit" aria-hidden="true">
        <svg className="circuit__lines" viewBox="0 0 1200 440" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pulseGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#ff5a1f" stopOpacity="0" />
              <stop offset="0.6" stopColor="#ff7a2e" />
              <stop offset="1" stopColor="#ffd1b0" />
            </linearGradient>
          </defs>
          {traces.map((dPath, i) => (
            <path key={`t${i}`} d={dPath} className="circuit__trace" pathLength={1} vectorEffect="non-scaling-stroke" style={{ ["--i" as string]: i }} />
          ))}
          {traces.map((dPath, i) => (
            <path
              key={`p${i}`}
              d={dPath}
              className="circuit__pulse"
              pathLength={1000}
              style={{
                strokeDasharray: "70 1000",
                strokeDashoffset: 1070,
                animationDelay: `${(i * 0.73) % 4.5}s`,
                animationDuration: `${3.6 + (i % 3) * 0.8}s`,
                stroke: "#ff6a28",
              }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div className="chip-core">
          <span className="chip-core__label">RD</span>
        </div>
        {nodes.map((n, i) => (
          <div key={n.label} className={`node${n.outer ? " node--outer" : ""}`} style={{ left: `${n.x}%`, top: `${n.y}%`, ["--from" as string]: n.x < 50 ? "-60px" : "60px", ["--i" as string]: i }}>
            <span className="node__box" style={{ animationDelay: `${i * 0.6}s` }}>
              {n.mono}
            </span>
            <span className="node__label">{n.label}</span>
          </div>
        ))}
        <div className="circuit__fade" />
      </div>
    </section>
  );
}
