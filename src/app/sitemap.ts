import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL, href, locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", "/projects", "/about", "/experience", "/skills", "/contact", ...projects.map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((path) =>
    locales.map((l) => ({
      url: `${SITE_URL}${href(l, path)}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.6 : 0.8,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${SITE_URL}${href(x, path)}`])) },
    })),
  );
}
