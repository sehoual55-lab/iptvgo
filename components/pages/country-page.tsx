import Link from "next/link";
import { ArrowRight, MessageCircle, Check, MapPin } from "lucide-react";
import { Shell } from "@/components/shell";
import { Reveal } from "@/components/reveal";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd, productJsonLd, organizationJsonLd } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePrefix, type Locale } from "@/i18n/config";
import { buildWhatsAppLink } from "@/config/site.config";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { key: "uk", path: "/iptvgo-uk", flag: "🇬🇧", name: "United Kingdom" },
  { key: "italia", path: "/iptvgo-italia", flag: "🇮🇹", name: "Italia" },
  { key: "france", path: "/iptvgo-france", flag: "🇫🇷", name: "France" },
] as const;

const langToKey: Record<Locale, string> = { en: "uk", it: "italia", fr: "france" };

export function CountryPage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const c = dict.country;
  const currentKey = langToKey[lang];
  const p = localePrefix(lang);

  return (
    <Shell dict={dict} lang={lang}>
      <JsonLd data={[organizationJsonLd(), faqJsonLd(dict.faq.items.slice(0, 6)), productJsonLd({ name: "Gold", price: 49.99, description: c.intro })]} />

      {/* Country hero */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden pt-28 pb-10 text-center">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.3]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-20 blur-[120px]" />
        <div className="container relative z-10 flex flex-col items-center">
          <Reveal>
            <span className="eyebrow"><span aria-hidden>{c.flag}</span> {c.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-mist text-balance sm:text-6xl md:text-7xl">
              <span className="text-aurora">{c.h1}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 text-lg font-medium text-mist-500">{c.tagline}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-400">{c.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={`${p}/#pricing`} className="btn-primary text-base">
                {dict.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base">
                <MessageCircle className="h-4 w-4" /> {dict.nav.support}
              </a>
            </div>
          </Reveal>

          {/* stat row */}
          <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-4">
            {dict.hero.stats.map((s) => (
              <div key={s.label} className="bg-ink-900/40 px-6 py-6">
                <div className="font-display text-2xl font-extrabold text-mist md:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-mist-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local benefits */}
      <section className="section relative">
        <div className="container relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-mist md:text-4xl">{c.whyHeading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.localPoints.map((pt, i) => (
              <Reveal key={pt.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-aurora text-ink-950 shadow-glow">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-mist">{pt.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist-400">{pt.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* cities */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-mist-500">{c.citiesLabel} {c.fullName}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {c.cities.map((city) => (
                <span key={city} className="chip"><MapPin className="h-3 w-3 text-teal-300" /> {city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Pricing dict={dict} />
      <Faq dict={dict} lang={lang} />

      {/* Country switcher */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl glass p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-mist-500">{c.otherLabel}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {COUNTRIES.map((co) => (
                <Link
                  key={co.key}
                  href={co.path}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                    co.key === currentKey
                      ? "border-teal/40 bg-teal/10 text-teal-300"
                      : "border-white/10 bg-white/[0.03] text-mist-400 hover:border-white/20 hover:text-mist"
                  )}
                >
                  <span aria-hidden>{co.flag}</span> {co.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta dict={dict} lang={lang} />
    </Shell>
  );
}
