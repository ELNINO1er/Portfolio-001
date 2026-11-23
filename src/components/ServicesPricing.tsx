import Link from "next/link";
import { profile } from "@/data/profile";
import { formatFCFA, services, whatsappLink } from "@/data/services";
import { getDict } from "@/data/ui";
import { href, t, tl, type Locale } from "@/lib/i18n";
import { ArrowUpRight, Check, Info, WhatsApp } from "./Icons";

export function ServicesPricing({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const amount = (n: number) => formatFCFA(n).replace(" FCFA", "");
  return (
    <>
      <div className="pricing">
        {services.map((s, i) => (
          <article key={s.key} className={`price reveal reveal--price${i === 1 ? " price--hot" : ""}`} style={{ ["--d" as string]: `${i === 1 ? 0 : 160 + i * 60}ms`, ["--y" as string]: i === 1 ? "50px" : "110px" }}>
            <div className="price__head">
              <h3 className="price__name" style={{ margin: 0 }}>
                {t(s.name, locale)}
              </h3>
              <span className="price__tier">{s.tier}</span>
              <p className="price__amount">
                {amount(s.price)} <small>FCFA</small>
              </p>
              <span className="price__delay">
                {d.services.delay} · {t(s.delay, locale)}
              </span>
            </div>

            <div className="price__media">
              {s.demoVideo ? (
                <video src={s.demoVideo} muted loop playsInline controls preload="metadata" aria-label={t(s.name, locale)} />
              ) : (
                <span>{d.services.demo}</span>
              )}
            </div>

            <ul className="price__list">
              {tl(s.features, locale).map((f) => (
                <li key={f}>
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {s.note && (
              <p className="price__note" style={{ margin: 0, display: "flex", gap: 8 }}>
                <Info style={{ flex: "none", marginTop: 2 }} />
                {t(s.note, locale)}
              </p>
            )}

            <div className="price__ctas">
              {s.orderUrl ? (
                <a className={`btn btn--block ${i === 1 ? "btn--primary" : "btn--soft"}`} href={s.orderUrl} target="_blank" rel="noopener noreferrer">
                  {d.services.order} <ArrowUpRight />
                </a>
              ) : (
                <a className={`btn btn--block ${i === 1 ? "btn--primary" : "btn--soft"}`} href={profile.contact.chariow} target="_blank" rel="noopener noreferrer">
                  {d.services.shop} <ArrowUpRight />
                </a>
              )}
              <a className="btn btn--ghost btn--block" href={whatsappLink(profile.contact.whatsapp, s, locale)} target="_blank" rel="noopener noreferrer">
                <WhatsApp size={16} /> {d.services.whatsapp}
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="pricing-foot reveal">
        {d.services.custom} <Link href={href(locale, "/contact")}>{d.services.customCta}</Link>
      </p>
    </>
  );
}
