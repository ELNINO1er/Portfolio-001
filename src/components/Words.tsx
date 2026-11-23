import type { ElementType } from "react";

/**
 * Titre révélé mot par mot, comme dans la maquette : chaque mot monte depuis
 * un masque (bas des lettres coupé pendant la montée), en partant translucide
 * et légèrement flou — les mots suivants sont plus bas et plus clairs (effet vague).
 */
export function Words({
  text,
  as: Tag = "h2",
  className = "h2",
  id,
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** délai de départ en ms */
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={`${className} words`} id={id} aria-label={text} style={delay ? { ["--d0" as string]: `${delay}ms` } : undefined}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="wm">
            <span className="w" style={{ ["--i" as string]: i }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

/** Badge : un point qui s'étire en pilule, puis le texte apparaît. */
export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`eyebrow eyebrow--anim${dark ? " eyebrow--dark" : ""}`} data-inview>
      <span className="eyebrow__dot" aria-hidden="true" />
      <span className="eyebrow__txt">{children}</span>
    </span>
  );
}
