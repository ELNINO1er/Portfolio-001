/**
 * Logo animé RoroDev (préchargeur + footer), d'après la maquette :
 * point → anneau + disque → l'anneau s'ouvre et le disque devient la marque « R »
 * → les lettres apparaissent une à une, du gris au blanc.
 * L'animation est pilotée en CSS par la classe du parent (.preloader ou .is-in).
 */
import { profile } from "@/data/profile";

export function LogoMark({ word, className = "", wordOnly = false }: { word: string; className?: string; wordOnly?: boolean }) {
  return (
    <span className={`lm ${className}`} aria-hidden="true">
      {!wordOnly && (
        <span className="lm__mark">
          <svg viewBox="0 0 100 100" className="lm__svg">
            <circle className="lm__ring" cx="50" cy="50" r="44" pathLength={100} />
            <circle className="lm__disc" cx="50" cy="50" r="30" />
          </svg>
          <span className="lm__r">
            <img className="lm__image" src={profile.assets.logo} alt="" />
          </span>
        </span>
      )}
      <span className="lm__word">
        {word.split("").map((l, i) => (
          <span key={i} className="lm__l" style={{ ["--i" as string]: i }}>
            {l === " " ? " " : l}
          </span>
        ))}
      </span>
    </span>
  );
}
