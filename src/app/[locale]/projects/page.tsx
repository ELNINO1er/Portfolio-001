import { ContactCta } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { getDict } from "@/data/ui";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/projects", d.projects.pageTitle, d.projects.pageSubtitle);
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <PageHero eyebrow={d.projects.pageTitle} title={d.projects.title} text={d.projects.pageSubtitle} />
      <section className="section tone-light">
        <div className="container">
          <ProjectsBrowser locale={locale} />
        </div>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}
