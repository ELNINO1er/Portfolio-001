/** Texte qui s'éclaire mot par mot au fil du scroll (variable CSS --p fournie par le moteur). */
export function ScrubText({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={`scrub-text ${className ?? ""}`} data-scrub="enter" data-end="0.35" style={{ ["--n" as string]: words.length }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className="sw" style={{ ["--i" as string]: i }}>
            {w}{" "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
