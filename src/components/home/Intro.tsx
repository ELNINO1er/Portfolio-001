import Link from "next/link";
import { Lines } from "@/components/Lines";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { href, t, tl, type Locale } from "@/lib/i18n";
import { ArrowRight } from "../Icons";
import { Eyebrow, Words } from "../Words";

export function Portrait({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <div className="portrait">
      {profile.assets.photo ? (
        <img src={profile.assets.photo} alt={profile.name} />
      ) : (
        <div className="portrait__ph">
          <span className="portrait__avatar" aria-hidden="true">
            RB
          </span>
          <span>{d.intro.photo}</span>
        </div>
      )}
      <p className="portrait__name portrait__in">{d.intro.cardTitle}</p>
      <p className="portrait__meta portrait__in">
        {t(profile.title, locale)} · {t(profile.location, locale)}
      </p>
    </div>
  );
}

export function Intro({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  // Première phrase de l'intro en titre, le reste dans le panneau
  const full = t(profile.intro, locale);
  const cut = full.indexOf(". ");
  const introHead = cut > 0 ? full.slice(0, cut + 1) : full;
  const introRest = cut > 0 ? full.slice(cut + 2) : "";
  return (
    <section className="section tone-light stack" data-sequence data-sequence-offset="0.3" aria-labelledby="intro-title">
      <div className="container">
        <div className="section-head">
          <div className="reveal">
            <Eyebrow dark>{d.intro.eyebrow}</Eyebrow>
          </div>
          <Words id="intro-title" text={introHead} delay={120} />
        </div>
        <div className="intro__grid">
          <div className="reveal reveal--rise" style={{ ["--d" as string]: "340ms" }}>
            <Portrait locale={locale} />
          </div>
          <div className="intro__panel reveal reveal--rise" style={{ ["--d" as string]: "500ms" }}>
            <Lines className="intro__quote" text={introRest || full} delay={600} />
            <Lines className="intro__bio" text={t(profile.availability, locale)} delay={820} />
            <div className="intro__sectors">
              <h3>{d.intro.sectors}</h3>
              <div className="chips chips--slide" data-inview>
                {tl(profile.sectors, locale).map((s, i) => (
                  <span key={s} className="chip" style={{ ["--i" as string]: i }}>
                    <span className="chip__ico" aria-hidden="true">
                      {s.slice(0, 1)}
                    </span>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <Link href={href(locale, "/about")} className="link-arrow">
                {d.intro.more} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
