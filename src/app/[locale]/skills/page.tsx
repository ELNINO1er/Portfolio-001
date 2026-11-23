import { ContactCta } from "@/components/ContactCta";
import { Explore } from "@/components/Explore";
import { PageHero } from "@/components/PageHero";
import { skillGroups, skillLabel, skillTints } from "@/data/skills";
import { getDict } from "@/data/ui";
import { t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/skills", d.skills.eyebrow, `${d.skills.title}. ${d.skills.subtitle}`);
}

export default async function SkillsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <PageHero eyebrow={d.skills.eyebrow} title={d.skills.title} text={d.skills.subtitle} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container skgrid">
          {skillGroups.map((g, i) => (
            <article
              key={g.key}
              className={`card reveal${g.key === "architecture" ? " card--glow" : ""}`}
              style={{ ["--d" as string]: `${(i % 2) * 80}ms`, gridColumn: g.key === "architecture" ? "1 / -1" : undefined }}
            >
              <h2>
                <span className="tab__ico" style={{ background: skillTints[g.key][0], color: skillTints[g.key][1] }} aria-hidden="true">
                  {g.short}
                </span>
                {t(g.title, locale)}
              </h2>
              <div className="chips">
                {g.items.map((x) => (
                  <span key={skillLabel(x, locale)} className="chip">
                    {skillLabel(x, locale)}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCta locale={locale} />
      <Explore locale={locale} exclude="skills" />
    </>
  );
}
