"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { getDict } from "@/data/ui";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight } from "./Icons";

/**
 * Rangée « email » du footer (équivalent de la rangée « s'abonner » de la maquette).
 * Site statique : l'email est transmis au formulaire de contact, pré-rempli.
 */
export function FooterQuickContact({ locale }: { locale: Locale }) {
  const d = getDict(locale).footer;
  const router = useRouter();
  const id = useId();
  const [email, setEmail] = useState("");

  return (
    <form
      className="quick"
      onSubmit={(e) => {
        e.preventDefault();
        const v = email.trim();
        router.push(href(locale, "/contact") + (v ? `?email=${encodeURIComponent(v)}` : ""));
      }}
    >
      <label className="quick__title" htmlFor={id}>
        {d.quickTitle}
      </label>
      <span className="quick__field">
        <input id={id} type="email" autoComplete="email" placeholder={d.quickPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={200} />
        <button type="submit" className="quick__btn">
          <ArrowRight />
          <span className="sr-only">{d.quickSend}</span>
        </button>
      </span>
    </form>
  );
}
