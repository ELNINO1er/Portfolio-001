"use client";

import { useEffect, useId, useState } from "react";
import { profile } from "@/data/profile";
import { getDict } from "@/data/ui";
import type { Locale } from "@/lib/i18n";
import { Send } from "./Icons";

type Errors = Partial<Record<"name" | "email" | "type" | "message", string>>;

/**
 * Formulaire de contact (site statique) : à l'envoi, ouvre la messagerie de
 * l'utilisateur avec le message pré-rempli vers l'adresse du profil.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const f = getDict(locale).contact.form;
  const id = useId();
  const [values, setValues] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const msg = params.get("message");
    const email = params.get("email");
    if (msg || email)
      setValues((v) => ({
        ...v,
        message: msg ? msg.slice(0, 2000) : v.message,
        email: email ? email.slice(0, 200) : v.email,
      }));
  }, []);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = f.required;
    if (!values.email.trim()) e.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = f.invalidEmail;
    if (!values.type) e.type = f.required;
    if (!values.message.trim()) e.message = f.required;
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const subject = `[${values.type}] ${values.name}`;
    const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
    window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (k: keyof typeof values) => ({
    id: `${id}-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined,
    required: true,
  });

  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? (
      <span className="field__err" id={`${id}-${k}-err`}>
        {errors[k]}
      </span>
    ) : null;

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor={`${id}-name`}>{f.name}</label>
          <input type="text" autoComplete="name" {...field("name")} />
          <Err k="name" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>{f.email}</label>
          <input type="email" autoComplete="email" {...field("email")} />
          <Err k="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${id}-type`}>{f.type}</label>
        <select {...field("type")}>
          <option value="">{f.choose}</option>
          {f.types.map((tp) => (
            <option key={tp} value={tp}>
              {tp}
            </option>
          ))}
        </select>
        <Err k="type" />
      </div>
      <div className="field">
        <label htmlFor={`${id}-message`}>{f.message}</label>
        <textarea {...field("message")} maxLength={2000} />
        <Err k="message" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button type="submit" className="btn btn--primary">
          {f.submit} <Send style={{ transform: "rotate(90deg)" }} />
        </button>
        <p className="form__note">{f.note}</p>
      </div>
      <p className="form__ok" role="status" aria-live="polite" style={{ margin: 0 }}>
        {sent ? f.sent : ""}
      </p>
    </form>
  );
}
