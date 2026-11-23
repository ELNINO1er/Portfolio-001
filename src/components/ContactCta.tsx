import Link from "next/link";
import { Lines } from "@/components/Lines";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { WhatsApp } from "./Icons";
import { Words } from "./Words";

/** Bloc contact : la lueur orange monte et s'intensifie au fil du scroll (--p). */
export function ContactCta({ locale, title, text, stack = false }: { locale: Locale; title?: string; text?: string; stack?: boolean }) {
  const d = getDict(locale);
  return (
    <section className={`section section--tight${stack ? " stack" : ""}`} aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-glow" data-scrub="enter" data-end="0.15" data-sequence data-sequence-offset="0.25">
          <span className="cta-glow__light" aria-hidden="true" />
          <Words id="cta-title" text={title ?? d.contact.title} delay={160} />
          <Lines text={text ?? d.contact.text} delay={400} />
          <div className="cta-glow__actions reveal" style={{ ["--d" as string]: "760ms" }}>
            <Link className="btn btn--invert" href={href(locale, "/contact")}>
              {d.contact.cta}
            </Link>
            <a className="btn btn--ghost" href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{ background: "var(--bg)" }}>
              <WhatsApp size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
