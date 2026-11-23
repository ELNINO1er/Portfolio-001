import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { ArrowLeft, ArrowUpRight, Info, Lock } from "@/components/Icons";
import { ProjectMedia } from "@/components/ProjectCard";
import { Eyebrow, Words } from "@/components/Words";
import { getProject, projects } from "@/data/projects";
import { getDict } from "@/data/ui";
import { href, locales, t, tl, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata(locale, `/projects/${slug}`, p.name, `${t(p.hook, locale)} ${t(p.summary, locale)}`);
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const d = getDict(locale);
  const c = d.caseStudy;
  const idx = projects.findIndex((x) => x.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const sections: { id: string; label: string }[] = [{ id: "overview", label: c.overview }];
  if (p.problem || p.solution) sections.push({ id: "problem", label: `${c.problem} → ${c.solution}` });
  if (p.workflow) sections.push({ id: "workflow", label: c.workflow });
  if (p.architecture || p.stack) sections.push({ id: "architecture", label: c.architecture });
  if (p.features || p.modules) sections.push({ id: "features", label: p.modules ? c.modules : c.features });
  if (p.role) sections.push({ id: "role", label: c.role });
  if (p.value) sections.push({ id: "value", label: c.value });

  return (
    <>
      <section className="page-hero cs-hero" aria-labelledby="page-title">
        <div className="hero__grid" aria-hidden="true" />
        <div className="beam" aria-hidden="true" />
        <div className="container">
          <p className="reveal" style={{ margin: "0 0 20px" }}>
            <Link href={href(locale, "/projects")} className="link-arrow">
              <ArrowLeft /> {c.back}
            </Link>
          </p>
          <div className="reveal">
            <Eyebrow>{t(p.category, locale)}</Eyebrow>
          </div>
          <Words as="h1" id="page-title" className="h1 text-gradient" text={p.name} />
          <p className="reveal" style={{ marginLeft: 0, maxWidth: 720 }}>
            {t(p.hook, locale)}
          </p>
          <dl className="cs-meta reveal">
            <div>
              <dt>{c.status}</dt>
              <dd>
                <span className={`status${p.live ? " status--live" : ""}`} style={{ color: "var(--text)", fontSize: 14 }}>
                  {t(p.status, locale)}
                </span>
              </dd>
            </div>
            <div>
              <dt>{c.category}</dt>
              <dd>{t(p.category, locale)}</dd>
            </div>
            <div>
              <dt>{c.link}</dt>
              <dd>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ color: "var(--accent-text)" }}>
                    {p.url.replace(/^https?:\/\//, "")} <ArrowUpRight />
                  </a>
                ) : (
                  <span style={{ color: "var(--muted)" }}>—</span>
                )}
              </dd>
            </div>
          </dl>
          <div className="cs-media reveal">
            <ProjectMedia project={p} locale={locale} large />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container cs-grid">
          <nav className="cs-toc" aria-label={p.name}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>

          <div>
            <div className="cs-block" id="overview">
              <h2>{c.overview}</h2>
              <p>{t(p.summary, locale)}</p>
              {(p.note || p.confidential) && (
                <div className="notice" style={{ marginTop: 20 }}>
                  {p.confidential ? <Lock size={16} /> : <Info />}
                  <span>{p.note ? t(p.note, locale) : d.projects.confidential}</span>
                </div>
              )}
            </div>

            {(p.problem || p.solution) && (
              <div className="cs-block" id="problem">
                <h2>
                  {c.problem} → {c.solution}
                </h2>
                <div className="ps">
                  {p.problem && (
                    <div className="card">
                      <h3>{c.problem}</h3>
                      <p>{t(p.problem, locale)}</p>
                    </div>
                  )}
                  {p.solution && (
                    <div className="card card--glow">
                      <h3>{c.solution}</h3>
                      <p>{t(p.solution, locale)}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {p.workflow && (
              <div className="cs-block" id="workflow">
                <h2>{c.workflow}</h2>
                <ol className="wf">
                  {tl(p.workflow, locale).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            )}

            {(p.architecture || p.stack) && (
              <div className="cs-block" id="architecture">
                <h2>{c.architecture}</h2>
                {p.architecture && (
                  <ul className="bullets" style={{ marginBottom: 20 }}>
                    {tl(p.architecture, locale).map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                )}
                {p.stack && (
                  <>
                    <h3 style={{ fontSize: 14, color: "var(--muted)", fontWeight: 600, margin: "0 0 10px" }}>{c.stack}</h3>
                    <div className="chips">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {(p.features || p.modules) && (
              <div className="cs-block" id="features">
                <h2>{p.modules ? c.modules : c.features}</h2>
                {p.modules ? (
                  <div className="modgrid">
                    {p.modules.map((m) => (
                      <div key={m.title.fr} className="card">
                        <h3>{t(m.title, locale)}</h3>
                        <div className="chips">
                          {tl(m.items, locale).map((x) => (
                            <span key={x} className="chip">
                              {x}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="chips">
                    {tl(p.features!, locale).map((x) => (
                      <span key={x} className="chip">
                        <span className="chip__ico" aria-hidden="true">
                          ✓
                        </span>
                        {x}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {p.role && (
              <div className="cs-block" id="role">
                <h2>{c.role}</h2>
                <div className="chips">
                  {tl(p.role, locale).map((r) => (
                    <span key={r} className="chip">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {p.value && (
              <div className="cs-block" id="value">
                <h2>{c.value}</h2>
                <p>{t(p.value, locale)}</p>
              </div>
            )}

            <nav className="pager" aria-label={`${c.prev} / ${c.next}`}>
              <Link href={href(locale, `/projects/${prev.slug}`)}>
                <small>← {c.prev}</small>
                <strong>{prev.name}</strong>
              </Link>
              <Link href={href(locale, `/projects/${next.slug}`)}>
                <small>{c.next} →</small>
                <strong>{next.name}</strong>
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <ContactCta locale={locale} title={c.cta} text={c.ctaText} />
    </>
  );
}
