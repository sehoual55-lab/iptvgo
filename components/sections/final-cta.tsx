import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buildWhatsAppLink } from "@/config/site.config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePrefix, type Locale } from "@/i18n/config";

function localize(href: string, lang: Locale) {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  return href === "" ? p || "/" : `${p}${href}`;
}

export function FinalCta({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { title, subtitle, primary, secondary } = dict.finalCta;

  return (
    <section id="get-started" className="section relative">
      <div className="container relative z-10">
        <Reveal>
          <div className="glow-border relative overflow-hidden rounded-5xl border border-white/[0.08] bg-ink-900/70 px-6 py-16 text-center md:px-16 md:py-20">
            {/* explicit glows (no backdrop-blur to avoid seams) */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal/25 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet/25 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.15]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-mist-400">
                <span className="text-base" aria-hidden>🇬🇧</span> IPTVGO
              </span>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                <span className="text-aurora">{title}</span>
              </h2>
              <p className="mt-5 text-balance text-lg text-mist-400">{subtitle}</p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={localize("#pricing", lang)} className="btn-primary">
                  {primary} <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <MessageCircle className="h-4 w-4" /> {secondary}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
