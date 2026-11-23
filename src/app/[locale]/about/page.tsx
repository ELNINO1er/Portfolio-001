import { ContactCta } from "@/components/ContactCta";
import { Explore } from "@/components/Explore";
import { Download } from "@/components/Icons";
import { Portrait } from "@/components/home/Intro";
import { PageHero } from "@/components/PageHero";
import { Words } from "@/components/Words";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { t, tl, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/about", d.about.pageTitle, t(profile.bio, locale));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  const a = d.about;
  return (
    <>
      <PageHero eyebrow={a.pageTitle} title={t(profile.headline, locale)} />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container about-grid">
          <div className="reveal" style={{ display: "grid", gap: 16 }}>
            <Portrait locale={locale} />
            <dl className="facts">
              <div>
                <dt>{a.location}</dt>
                <dd>{t(profile.location, locale)}</dd>
              </div>
              <div>
                <dt>{a.nationality}</dt>
                <dd>{t(profile.nationality, locale)}</dd>
              </div>
              {profile.languages.map((l) => (
                <div key={l.name.fr}>
                  <dt>{t(l.name, locale)}</dt>
                  <dd>{t(l.level, locale)}</dd>
                </div>
              ))}
            </dl>
            {profile.assets.cv ? (
              <a className="btn btn--primary btn--block" href={profile.assets.cv} download>
                <Download /> {a.cv}
              </a>
            ) : (
              <span className="btn btn--soft btn--block" aria-disabled="true">
                <Download /> {a.cvSoon}
              </span>
            )}
          </div>
          <div className="reveal" style={{ ["--d" as string]: "100ms" }}>
            <p style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)", lineHeight: 1.5, letterSpacing: "-0.015em", margin: "0 0 24px" }}>
              {t(profile.bio, locale)}
            </p>
            <p style={{ color: "var(--muted)", margin: "0 0 32px" }}>{t(profile.intro, locale)}</p>
            <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-text)", margin: "0 0 14px" }}>
              {a.sectors}
            </h2>
            <div className="chips">
              {tl(profile.sectors, locale).map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-light" aria-labelledby="pillars-h">
        <div className="container">
          <div className="section-head">
            <Words id="pillars-h" text={a.pillars} />
          </div>
          <div className="grid-3">
            {profile.pillars.map((p, i) => (
              <article key={p.key} className="card reveal" style={{ ["--d" as string]: `${i * 80}ms`, background: "var(--surface)" }}>
                <span className="num">0{i + 1}</span>
                <h3>{t(p.title, locale)}</h3>
                <p>{t(p.text, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <div className="section-head">
            <Words id="values-h" text={a.values} />
          </div>
          <div className="grid-2">
            {profile.values.map((v, i) => (
              <article key={v.key} className={`card reveal${i % 3 === 0 ? " card--glow" : ""}`} style={{ ["--d" as string]: `${(i % 2) * 80}ms` }}>
                <h3>{t(v.title, locale)}</h3>
                <p>{t(v.text, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta locale={locale} />
      <Explore locale={locale} exclude="about" />
    </>
  );
}
