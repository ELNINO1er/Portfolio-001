import { ContactCta } from "@/components/ContactCta";
import { Explore } from "@/components/Explore";
import { PageHero } from "@/components/PageHero";
import { ServicesPricing } from "@/components/ServicesPricing";
import { getDict } from "@/data/ui";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/services", d.services.pageTitle, `${d.services.title}. ${d.services.subtitle}`);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <PageHero eyebrow={d.services.eyebrow} title={d.services.title} text={d.services.subtitle} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <ServicesPricing locale={locale} />
        </div>
      </section>
      <ContactCta locale={locale} title={d.services.custom} />
      <Explore locale={locale} exclude="services" />
    </>
  );
}
