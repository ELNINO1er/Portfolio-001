import Link from "next/link";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight, Spark } from "./Icons";
import { Eyebrow, Words } from "./Words";

const keys = ["services", "projects", "about", "experience", "skills", "contact"] as const;

export function Explore({ locale, exclude, stack = false }: { locale: Locale; exclude?: (typeof keys)[number]; stack?: boolean }) {
  const d = getDict(locale);
  const items = keys.filter((k) => k !== exclude);
  return (
    <section className={`section section--tight${stack ? " stack" : ""}`} aria-labelledby="explore-title" data-sequence data-sequence-offset="0.3">
      <div className="container">
        <div className="section-head">
          <div className="reveal">
            <Eyebrow>{d.explore.eyebrow}</Eyebrow>
          </div>
          <Words id="explore-title" text={d.explore.title} />
        </div>
        <div className="xgrid">
          {items.map((k, i) => (
            <article key={k} className="xcard reveal reveal--card" style={{ ["--d" as string]: `${300 + (i % 3) * 120 + Math.floor(i / 3) * 200}ms` }}>
              <span className="xcard__ico" aria-hidden="true">
                <Spark size={16} />
              </span>
              <h3>{d.nav[k]}</h3>
              <p>{d.explore.items[k]}</p>
              <Link className="link-arrow" href={href(locale, `/${k}`)}>
                {d.explore.more}
                <span className="sr-only"> — {d.nav[k]}</span> <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
