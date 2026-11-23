import { experiences } from "@/data/experience";
import { getDict } from "@/data/ui";
import { t, tl, type Locale } from "@/lib/i18n";
import { Chevron } from "./Icons";

export function ExperienceAccordion({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <div className="acc">
      {experiences.map((e, i) => (
        <details key={e.company} className="reveal" style={{ ["--d" as string]: `${i * 110}ms` }} open={i === 0}>
          <summary>
            <Chevron />
            <span className="acc__title">
              {e.company}
              {e.role && <small>{t(e.role, locale)}</small>}
            </span>
            <span className="acc__period">
              {e.current && <span className="status status--live" style={{ marginRight: 10 }}>{d.experience.current}</span>}
              {t(e.period, locale)}
            </span>
          </summary>
          <div className="acc__body">
            <ul>
              {tl(e.points, locale).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
