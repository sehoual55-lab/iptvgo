"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePrefix, type Locale } from "@/i18n/config";

function localize(href: string, lang: Locale) {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  return href === "" ? p || "/" : `${p}${href}`;
}

export function Faq({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { eyebrow, title, subtitle, viewAll, items } = dict.faq;
  const [open, setOpen] = useState<number | null>(0);
  const shown = items.slice(0, 6);

  return (
    <section id="faq" className="section relative">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {shown.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl glass transition-colors duration-300 ${
                  isOpen ? "border-teal/30" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-mist md:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-teal-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-mist-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={localize("/faq", lang)} className="btn-ghost">
            {viewAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
