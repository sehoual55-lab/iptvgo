"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site.config";
import { localePrefix, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

function localize(href: string, lang: Locale) {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  return href === "" ? p || "/" : `${p}${href}`;
}

export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const h = dict.hero;

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28 pb-10 text-center">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.3]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-aurora opacity-20 blur-[120px]" />
        <div className="absolute inset-10 animate-spin-slow rounded-full border border-white/[0.06]" />
        <div className="absolute inset-24 animate-spin-slow rounded-full border border-teal/10" style={{ animationDirection: "reverse" }} />
        <div className="absolute inset-40 rounded-full border border-violet/10" />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
          <span aria-hidden>🇬🇧</span> {h.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-mist text-balance sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          {h.titleTop} <span className="text-aurora">{h.titleAurora}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-400"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href={localize("#pricing", lang)} className="btn-primary text-base">
            {h.ctaPrimary} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base">
            <Play className="h-4 w-4 fill-current" /> {h.ctaSecondary}
          </a>
        </motion.div>

        {/* live chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-mist-400"
        >
          <span className="status-dot" /> {h.liveLabel} · <Sparkles className="h-3.5 w-3.5 text-violet-300" /> {h.dashboard.now}
        </motion.div>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-4"
        >
          {h.stats.map((s) => (
            <div key={s.label} className="bg-ink-900/40 px-6 py-6">
              <div className="font-display text-2xl font-extrabold text-mist md:text-3xl">{s.value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-mist-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
