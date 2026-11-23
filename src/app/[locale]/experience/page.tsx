import { ContactCta } from "@/components/ContactCta";
import { Explore } from "@/components/Explore";
import { PageHero } from "@/components/PageHero";
import { Words } from "@/components/Words";
import { education, experiences } from "@/data/experience";
import { getDict } from "@/data/ui";
import { t, tl, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/experience", d.experience.pageTitle, d.experience.pageSubtitle);
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <PageHero eyebrow={d.experience.eyebrow} title={d.experience.pageTitle} text={d.experience.pageSubtitle} />

      <section className="section" style={{ paddingTop: 20 }} aria-labelledby="xp-h">
        <div className="container">
          <h2 id="xp-h" className="sr-only">
            {d.experience.title}
          </h2>
          <div className="tl">
            {experiences.map((e, i) => (
              <article key={e.company} className="tl__item reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <div>
                  <p className="tl__period" style={{ margin: 0 }}>
                    {t(e.period, locale)}
                  </p>
                  {e.current && (
                    <span className="status status--live" style={{ marginTop: 8 }}>
                      {d.experience.current}
                    </span>
                  )}
                </div>
                <div>
                  <h3>{e.company}</h3>
                  {e.role ? <p className="tl__role">{t(e.role, locale)}</p> : <div style={{ height: 12 }} />}
                  <ul className="bullets">
                    {tl(e.points, locale).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone-light" aria-labelledby="edu-h">
        <div className="container">
          <div className="section-head">
            <Words id="edu-h" text={d.experience.education} />
          </div>
          <div className="tl">
            {education.map((e, i) => (
              <article key={e.title.fr} className="tl__item reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <p className="tl__period" style={{ margin: 0 }}>
                  {t(e.period, locale)}
                </p>
                <div>
                  <h3>{t(e.title, locale)}</h3>
                  <p className="tl__role" style={{ marginBottom: e.detail ? 6 : 0 }}>
                    {e.school}
                  </p>
                  {e.detail && <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{t(e.detail, locale)}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta locale={locale} />
      <Explore locale={locale} exclude="experience" />
    </>
  );
}
