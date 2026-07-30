import { Globe, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site.config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/** Fixed dot positions (percent) scattered over the globe visual. */
const DOTS = [
  { top: "28%", left: "34%" },
  { top: "42%", left: "58%" },
  { top: "55%", left: "40%" },
  { top: "36%", left: "70%" },
  { top: "64%", left: "62%" },
  { top: "48%", left: "24%" },
];

export function Coverage({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, note, countriesLabel, regions } = dict.coverage;

  return (
    <section id="coverage" className="section relative aurora-bg">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Stylised globe visual */}
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-4xl glass-strong p-8">
              <div className="glow-border absolute inset-0 rounded-4xl" />
              <div className="relative h-full w-full">
                <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
                  <defs>
                    <radialGradient id="globeGlow" cx="50%" cy="45%" r="60%">
                      <stop offset="0%" stopColor="rgba(25,217,192,0.25)" />
                      <stop offset="100%" stopColor="rgba(25,217,192,0)" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="86" fill="url(#globeGlow)" />
                  <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" />
                  <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />
                  <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                  {/* latitude lines */}
                  {[26, 52, 78, 104, 130, 156, 174].map((y) => (
                    <line key={y} x1="20" y1={y} x2="180" y2={y} stroke="rgba(111,242,224,0.08)" strokeWidth="0.5" />
                  ))}
                  {/* longitude ellipses */}
                  {[20, 45, 70].map((rx) => (
                    <ellipse key={rx} cx="100" cy="100" rx={rx} ry="82" fill="none" stroke="rgba(183,164,253,0.10)" strokeWidth="0.5" />
                  ))}
                </svg>

                {/* pulsing coverage dots */}
                {DOTS.map((d, i) => (
                  <span key={i} className="status-dot absolute" style={{ top: d.top, left: d.left }} />
                ))}

                {/* centre countries badge */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl border border-white/10 bg-ink-900/70 px-6 py-4 text-center backdrop-blur-md">
                  <Globe className="mb-2 h-6 w-6 text-teal-300" />
                  <div className="font-display text-3xl font-bold text-aurora">{siteConfig.stats.countries}</div>
                  <div className="text-xs uppercase tracking-widest text-mist-500">
                    {note} {countriesLabel}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Regions */}
          <div className="grid gap-3 sm:grid-cols-2">
            {regions.map((region, i) => (
              <Reveal key={region.name} delay={i * 0.06}>
                <div className="group flex items-center gap-3 rounded-2xl glass px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-teal/10 text-teal-300 transition-colors group-hover:bg-teal/20">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-mist">{region.name}</span>
                    <span className="block text-xs text-mist-500">{region.tag}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
