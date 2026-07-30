"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePrefix, type Locale } from "@/i18n/config";
import type { MediaItem } from "@/lib/tmdb";

function localize(href: string, lang: Locale) {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  return href === "" ? p || "/" : `${p}${href}`;
}

type TabKey = "movies" | "sport" | "kids" | "docs" | "intl";

export function Showcase({
  dict,
  posters,
  lang,
}: {
  dict: Dictionary;
  posters: MediaItem[];
  lang: Locale;
}) {
  const { eyebrow, title, subtitle, tabs, sport, kids, docs, intl, countLabel, cta } = dict.showcase;
  const [active, setActive] = useState<TabKey>("movies");

  const chipData: Record<Exclude<TabKey, "movies">, readonly string[]> = { sport, kids, docs, intl };
  const eight = posters.slice(0, 8);

  const tabList: { key: TabKey; label: string }[] = [
    { key: "movies", label: tabs.movies },
    { key: "sport", label: tabs.sport },
    { key: "kids", label: tabs.kids },
    { key: "docs", label: tabs.docs },
    { key: "intl", label: tabs.intl },
  ];

  return (
    <section id="showcase" className="section relative">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === tab.key
                  ? "bg-aurora text-ink-950 shadow-glow"
                  : "border border-white/10 bg-white/[0.03] text-mist-400 hover:border-teal/40 hover:text-mist"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="mt-10 min-h-[24rem]">
          <AnimatePresence mode="wait">
            {active === "movies" ? (
              <motion.div
                key="movies"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
              >
                {eight.map((m) => (
                  <div
                    key={m.id}
                    className="group relative aspect-[2/3] overflow-hidden rounded-2xl glass"
                  >
                    <Image
                      src={m.poster}
                      alt={`${m.title} — IPTVGO`}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="flex items-center gap-1 text-xs font-semibold text-teal-300">
                        <Star className="h-3.5 w-3.5 fill-teal-300" /> {m.rating.toFixed(1)}
                      </div>
                      <div className="mt-0.5 truncate text-sm font-medium text-mist">{m.title}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {chipData[active].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-2xl glass px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-card-hover"
                  >
                    <span className="h-2.5 w-2.5 flex-none rounded-full bg-aurora" />
                    <span className="truncate text-sm font-medium text-mist">{name}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer: count + CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="chip">{countLabel}</p>
          <Link href={localize("#pricing", lang)} className="btn-primary">
            {cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
