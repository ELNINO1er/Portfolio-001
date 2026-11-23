import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import { t, type Locale } from "@/lib/i18n";
import { Eyebrow, Words } from "../Words";

const [product, saas, delivery] = profile.pillars;
const [entre, ai, approach, problem] = profile.values;

export function Pillars({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const fr = locale === "fr";
  return (
    <section className="section stack" aria-labelledby="pillars-title">
      <div className="container">
        <div className="section-head">
          <div className="reveal">
            <Eyebrow>{d.pillars.eyebrow}</Eyebrow>
          </div>
          <Words id="pillars-title" text={d.pillars.title} />
        </div>

        <div className="bento">
          {/* Vision produit */}
          <article className="card card--glow b-4 reveal reveal--card">
            <h3>{t(product.title, locale)}</h3>
            <p>{t(product.text, locale)}</p>
            <div className="card__visual" aria-hidden="true">
              <div className="flow">
                {(fr ? ["Idée", "Besoins", "Workflows", "Rôles", "Modules", "Produit"] : ["Idea", "Needs", "Workflows", "Roles", "Modules", "Product"]).map(
                  (s, i, arr) => (
                    <span key={s} style={{ display: "contents" }}>
                      <span className={`flow__step${i === arr.length - 1 ? " flow__step--hot" : ""}`}>{s}</span>
                      {i < arr.length - 1 && <span className="flow__sep" />}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>

          {/* Ingénierie SaaS */}
          <article className="card b-2 reveal reveal--card" style={{ ["--d" as string]: "80ms" }}>
            <h3>{t(saas.title, locale)}</h3>
            <p>{t(saas.text, locale)}</p>
            <div className="card__visual" aria-hidden="true">
              <div className="tiles">
                {["Tenant", "RBAC", "Auth", "API", "Pay", "Docs", "Notif", "Audit"].map((x, i) => (
                  <span key={x} className="tile" style={{ ["--i" as string]: i }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Livraison moderne */}
          <article className="card b-2 reveal reveal--card">
            <h3>{t(delivery.title, locale)}</h3>
            <p>{t(delivery.text, locale)}</p>
            <div className="card__visual" aria-hidden="true">
              <div className="code">
                <span className="k">$</span> <span className="s">git push</span>
                {"\n"}
                <span className="k">›</span> CI/CD{"\n"}
                <span className="k">›</span> docker build{"\n"}
                <span className="k">✓</span> <span className="s">deploy</span>
              </div>
            </div>
          </article>

          {/* IA appliquée */}
          <article className="card card--glow b-2 reveal reveal--card" style={{ ["--d" as string]: "80ms" }}>
            <h3>{t(ai.title, locale)}</h3>
            <p>{t(ai.text, locale)}</p>
            <div className="card__visual" aria-hidden="true">
              <div className="ai-orbit">
                <span className="ai-orbit__core">AI</span>
                <span className="ai-orbit__sat" style={{ left: "4%", top: "8%" }}>ChatGPT</span>
                <span className="ai-orbit__sat" style={{ right: "4%", top: "14%" }}>Claude</span>
                <span className="ai-orbit__sat" style={{ left: "8%", bottom: "6%" }}>Gemini</span>
                <span className="ai-orbit__sat" style={{ right: "8%", bottom: "2%" }}>Cursor</span>
              </div>
            </div>
          </article>

          {/* Entrepreneuriat */}
          <article className="card b-2 reveal reveal--card" style={{ ["--d" as string]: "160ms" }}>
            <h3>{t(entre.title, locale)}</h3>
            <p>{t(entre.text, locale)}</p>
          </article>

          {/* Approche produit */}
          <article className="card b-3 reveal reveal--card">
            <h3>{t(approach.title, locale)}</h3>
            <p>{t(approach.text, locale)}</p>
            <div className="card__visual" aria-hidden="true">
              <div className="flow">
                {(fr ? ["Qui l'utilise ?", "De quoi a-t-il besoin ?", "Comment circulent les données ?"] : ["Who uses it?", "What do they need?", "How does data flow?"]).map(
                  (s, i) => (
                    <span key={s} style={{ display: "contents" }}>
                      <span className={`flow__step${i === 2 ? " flow__step--hot" : ""}`}>{s}</span>
                      {i < 2 && <span className="flow__sep" />}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>

          {/* Résolution de problèmes */}
          <article className="card card--glow b-3 reveal reveal--card" style={{ ["--d" as string]: "80ms" }}>
            <h3>{t(problem.title, locale)}</h3>
            <p>{t(problem.text, locale)}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
