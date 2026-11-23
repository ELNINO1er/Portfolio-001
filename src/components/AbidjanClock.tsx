"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n";

function format(locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: profile.timezone,
  }).format(new Date());
}

export function AbidjanClock({ label, locale, compact = false }: { label: string; locale: Locale; compact?: boolean }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    setNow(format(locale));
    const id = setInterval(() => setNow(format(locale)), 1000);
    return () => clearInterval(id);
  }, [locale]);

  if (compact) return <time suppressHydrationWarning>{now ?? "--:--:--"}</time>;

  return (
    <span className="clock">
      <span>
        {label} · {profile.timezoneLabel}
      </span>
      <time suppressHydrationWarning>{now ?? "--:--:--"}</time>
    </span>
  );
}
