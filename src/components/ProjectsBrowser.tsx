"use client";

import { useState } from "react";
import { projectGroups, projects, type ProjectGroup } from "@/data/projects";
import { getDict } from "@/data/ui";
import { t, type Locale } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

export function ProjectsBrowser({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const [filter, setFilter] = useState<"all" | ProjectGroup>("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.group === filter);

  return (
    <>
      <div className="filters" role="group" aria-label={d.projects.filter}>
        {projectGroups.map((g) => {
          const count = g.key === "all" ? projects.length : projects.filter((p) => p.group === g.key).length;
          return (
            <button key={g.key} type="button" className="filter" aria-pressed={filter === g.key} onClick={() => setFilter(g.key)}>
              {t(g.label, locale)} <span style={{ opacity: 0.6 }}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {list.length} {d.projects.pageTitle.toLowerCase()}
      </p>
      {list.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--muted)" }}>{d.projects.empty}</p>
      ) : (
        <div className="ucgrid">
          {list.map((p) => (
            <div key={p.slug} style={{ display: "grid" }}>
              <ProjectCard project={p} locale={locale} headingLevel={2} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
