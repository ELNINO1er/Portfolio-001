import Link from "next/link";
import { Lines } from "@/components/Lines";
import { ContactCta } from "@/components/ContactCta";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import { Explore } from "@/components/Explore";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { GlobeSection } from "@/components/home/GlobeSection";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Pillars } from "@/components/home/Pillars";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ArrowRight } from "@/components/Icons";
import { Preloader } from "@/components/Preloader";
import { ServicesPricing } from "@/components/ServicesPricing";
import { Eyebrow, Words } from "@/components/Words";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";

/*
 * Page d'accueil — chaque section `.stack` glisse par-dessus la précédente,
 * comme dans la maquette vidéo.
 */
export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <Preloader />
      <Hero locale={locale} />
      <Intro locale={locale} />
      <Pillars locale={locale} />
      <GlobeSection locale={locale} />
      <SkillsSection locale={locale} />
      <FeaturedProjects locale={locale} />

      <section className="section stack" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <Eyebrow>{d.services.eyebrow}</Eyebrow>
            </div>
            <Words id="services-title" text={d.services.title} />
            <Lines text={d.services.subtitle} delay={400} />
          </div>
          <ServicesPricing locale={locale} />
        </div>
      </section>

      <section className="section stack" aria-labelledby="xp-title">
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <Eyebrow>{d.experience.eyebrow}</Eyebrow>
            </div>
            <Words id="xp-title" text={d.experience.title} />
          </div>
          <ExperienceAccordion locale={locale} />
          <p className="reveal" style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="link-arrow" href={href(locale, "/experience")}>
              {d.experience.all} <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <ContactCta locale={locale} stack />
      <Explore locale={locale} stack />
    </>
  );
}
