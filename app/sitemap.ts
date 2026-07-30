import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { locales, localePrefix } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date("2026-07-30");

  const paths: { path: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, freq: "daily" },
    { path: "/installation", priority: 0.8, freq: "monthly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
    ...en.blog.posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, freq: "monthly" as const })),
    { path: "/privacy", priority: 0.3, freq: "monthly" },
    { path: "/refund", priority: 0.3, freq: "monthly" },
    { path: "/terms", priority: 0.3, freq: "monthly" },
    { path: "/dmca", priority: 0.3, freq: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of paths) {
      entries.push({
        url: `${base}${localePrefix(l)}${p.path}` || base,
        lastModified: now,
        changeFrequency: p.freq,
        priority: p.priority,
      });
    }
  }

  // Dedicated country landing pages (single URL each)
  for (const cp of ["/iptvgo-uk", "/iptvgo-italia", "/iptvgo-france"]) {
    entries.push({ url: `${base}${cp}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  }

  return entries;
}
