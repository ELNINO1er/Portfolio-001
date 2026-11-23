import Link from "next/link";
import type { Project } from "@/data/projects";
import { getDict } from "@/data/ui";
import { href, t, tl, type Locale } from "@/lib/i18n";
import { ArrowRight, ArrowUpRight, Lock } from "./Icons";

export function ProjectMedia({ project, locale, large = false }: { project: Project; locale: Locale; large?: boolean }) {
  const d = getDict(locale);
  if (project.image && !project.confidential) {
    return <img src={project.image} alt={`${project.name} — ${t(project.category, locale)}`} loading="lazy" />;
  }
  const initials = project.name
    .replace(/[^A-Za-zÀ-ÿ ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const wf = project.workflow ? tl(project.workflow, locale) : project.stack ?? [];
  return (
    <div className={`ph${project.confidential ? " ph--lock" : ""}`} aria-hidden="true">
      {!project.confidential && wf.length > 0 && (
        <div className="ph__wf">
          {wf.slice(0, large ? 10 : 5).map((s, i) => (
            <span key={s} style={{ ["--i" as string]: i }}>{s}</span>
          ))}
        </div>
      )}
      <span className="ph__mono" style={large ? { width: 96, height: 96, fontSize: 30, borderRadius: 26 } : undefined}>
        {project.confidential ? <Lock size={large ? 34 : 24} /> : initials}
      </span>
      <span className="ph__label">
        {project.confidential ? <Lock size={12} /> : null}
        {project.confidential ? d.projects.confidential : d.projects.screenshot}
      </span>
    </div>
  );
}

export function ProjectCard({ project, locale, headingLevel = 3 }: { project: Project; locale: Locale; headingLevel?: 2 | 3 }) {
  const d = getDict(locale);
  const H = headingLevel === 2 ? "h2" : "h3";
  const bullets = project.features
    ? tl(project.features, locale)
    : project.modules
      ? project.modules.map((m) => t(m.title, locale))
      : project.workflow
        ? tl(project.workflow, locale)
        : [];
  return (
    <article className="pcard">
      <div className="pcard__media">
        <ProjectMedia project={project} locale={locale} />
      </div>
      <div className="pcard__body">
        <span className="pcard__cat">{t(project.category, locale)}</span>
        <H className="pcard__title">
          <Link href={href(locale, `/projects/${project.slug}`)}>{project.name}</Link>
        </H>
        <p className="pcard__hook">{t(project.hook, locale)}</p>
        {bullets.length > 0 && (
          <ul>
            {bullets.slice(0, 4).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        <div className="pcard__foot">
          <span className={`status${project.live ? " status--live" : ""}`}>{t(project.status, locale)}</span>
          {project.url ? (
            <a className="pcard__visit" href={project.url} target="_blank" rel="noopener noreferrer">
              {d.projects.visit} <ArrowUpRight />
              <span className="sr-only"> — {project.name}</span>
            </a>
          ) : (
            <span className="pcard__visit" aria-hidden="true">
              <ArrowRight />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
