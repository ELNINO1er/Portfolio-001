import { Eyebrow, Words } from "./Words";
import { Lines } from "@/components/Lines";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="beam" aria-hidden="true" />
      <div className="container">
        <div className="reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <Words as="h1" id="page-title" className="h1 text-gradient" text={title} />
        {text && <Lines text={text} delay={500} />}
        {children}
      </div>
    </section>
  );
}
