import { ContactForm } from "@/components/ContactForm";
import { GitHub, LinkedIn, Mail, Phone, Shop, WhatsApp } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  return buildMetadata(locale, "/contact", d.contact.pageTitle, d.contact.text);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const d = getDict(locale);
  const c = profile.contact;
  const links = [
    { label: "Email", value: c.email, href: `mailto:${c.email}`, icon: <Mail />, ext: false },
    { label: "WhatsApp", value: c.phone, href: c.whatsapp, icon: <WhatsApp />, ext: true },
    { label: d.contact.phone, value: c.phone, href: c.phoneHref, icon: <Phone />, ext: false },
    { label: "LinkedIn", value: "romaric-bombade", href: c.linkedin, icon: <LinkedIn />, ext: true },
    { label: "GitHub", value: "ELNINO1er", href: c.github, icon: <GitHub />, ext: true },
    { label: "Chariow", value: "RoroDev", href: c.chariow, icon: <Shop />, ext: true },
  ];
  return (
    <>
      <PageHero eyebrow={d.contact.eyebrow} title={d.contact.title} text={d.contact.text}>
        <p className="reveal" style={{ marginTop: 18 }}>
          <span className="status">{t(profile.availability, locale)}</span>
        </p>
      </PageHero>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <div className="card reveal" style={{ padding: "clamp(22px, 4vw, 36px)" }}>
            <ContactForm locale={locale} />
          </div>
          <div className="reveal" style={{ ["--d" as string]: "100ms" }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, margin: "4px 0 14px" }}>{d.contact.direct}</h2>
            <ul className="clist">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className="clist__ico" aria-hidden="true">
                      {l.icon}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <small>{l.label}</small>
                      <strong>{l.value}</strong>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
