import { profile } from "@/data/profile";
import { Lines } from "@/components/Lines";
import { getDict } from "@/data/ui";
import { t, type Locale } from "@/lib/i18n";
import { AbidjanClock } from "../AbidjanClock";
import { Pin } from "../Icons";
import { Eyebrow, Words } from "../Words";
import { Globe } from "./Globe";

/**
 * Section épinglée : le titre remonte et s'efface pendant que le globe
 * monte du bas de l'écran et grossit jusqu'au centre (progression --p).
 */
export function GlobeSection({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="globe-sec stack" data-scrub="pin" aria-labelledby="globe-title">
      <div className="globe-pin">
        <div className="stars" aria-hidden="true" />
        <div className="container globe-head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="reveal">
              <Eyebrow>{d.globe.eyebrow}</Eyebrow>
            </div>
            <Words id="globe-title" text={d.globe.title} />
            <Lines text={t(profile.signature, locale)} delay={400} />
          </div>
        </div>
        <div className="globe-stage">
          <Globe />
        </div>
        <div className="globe-facts">
          <span className="chip">
            <Pin size={14} style={{ color: "var(--accent)" }} />
            {t(profile.location, locale)} · {profile.coordinates.label}
          </span>
          <span className="chip">
            {d.globe.localTime} · <AbidjanClock label="" locale={locale} compact /> {profile.timezoneLabel}
          </span>
          <span className="chip">
            {d.globe.languages} · {profile.languages.map((l) => t(l.name, locale)).join(" / ")}
          </span>
        </div>
      </div>
    </section>
  );
}
