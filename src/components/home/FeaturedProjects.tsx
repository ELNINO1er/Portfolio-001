import Link from "next/link";
import { Lines } from "@/components/Lines";
import { featuredProjects } from "@/data/projects";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight } from "../Icons";
import { ProjectCard } from "../ProjectCard";
import { Eyebrow, Words } from "../Words";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="section tone-light stack" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-head">
          <div className="reveal">
            <Eyebrow dark>{d.projects.eyebrow}</Eyebrow>
          </div>
          <Words id="featured-title" text={d.projects.title} />
          <Lines text={d.projects.subtitle} delay={400} />
        </div>
        <div className="ucgrid">
          {featuredProjects.map((p, i) => (
            <div key={p.slug} className="reveal reveal--card" style={{ ["--d" as string]: `${(i % 3) * 120 + Math.floor(i / 3) * 160}ms`, display: "grid" }}>
              <ProjectCard project={p} locale={locale} />
            </div>
          ))}
          <div className="reveal reveal--card" style={{ ["--d" as string]: "240ms", display: "grid" }}>
            <div className="pcard pcard--all">
              <h3 className="pcard__title" style={{ fontSize: 22 }}>
                {d.projects.all}
              </h3>
              <p className="pcard__hook">{d.projects.allText}</p>
              <Link className="btn btn--invert btn--sm" href={href(locale, "/projects")}>
                {d.projects.all} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
