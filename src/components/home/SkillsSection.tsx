import Link from "next/link";
import { Lines } from "@/components/Lines";
import { skillGroups } from "@/data/skills";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight } from "../Icons";
import { Eyebrow, Words } from "../Words";
import { SkillsPlayground } from "./SkillsPlayground";
import { skillTints } from "@/data/skills";

export function SkillsSection({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="section tone-light stack" data-sequence data-sequence-offset="0.22" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="reveal">
            <Eyebrow dark>{d.skills.eyebrow}</Eyebrow>
          </div>
          <Words id="skills-title" text={d.skills.title} />
          <Lines text={d.skills.subtitle} delay={400} />
        </div>
        <div className="tool-row" data-inview aria-hidden="true">
          <span className="chevrons">›››</span>
          {skillGroups.map((g, i) => (
            <span key={g.key} className="tool-row__item" style={{ background: skillTints[g.key][0], color: skillTints[g.key][1], ["--i" as string]: i }}>
              {g.short}
            </span>
          ))}
          <span className="chevrons">‹‹‹</span>
        </div>
        <div className="playground-scrub" data-scrub="enter" data-end="0.2">
          <SkillsPlayground locale={locale} />
        </div>
        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link className="link-arrow" href={href(locale, "/skills")}>
            {d.skills.all} <ArrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
