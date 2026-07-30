import { Sparkles, Wand2, History, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

const featureIcons: LucideIcon[] = [Wand2, History, TrendingUp];

const picks = [
  { title: "Tonight’s Match", meta: "Live Sport", match: 98 },
  { title: "Trending Series", meta: "Drama · 4K", match: 95 },
  { title: "For You", meta: "Curated film", match: 92 },
];

export function AiSection({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, features, picksLabel } = dict.ai;

  return (
    <section id="ai" className="section relative aurora-bg">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy + feature rows */}
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-lg text-mist-400">{subtitle}</p>

            <div className="mt-8 space-y-5">
              {features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div key={feature.title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet/15 text-violet-300 shadow-glow-violet">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-mist">{feature.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-mist-400">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* AI panel mockup */}
          <Reveal delay={0.15}>
            <div className="glow-border relative rounded-4xl glass-strong p-6 shadow-glow-violet">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora text-ink-950">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold text-mist">{picksLabel}</span>
                </div>
                <span className="status-dot" />
              </div>

              <div className="mt-6 space-y-3">
                {picks.map((pick, i) => (
                  <div
                    key={pick.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-teal/30"
                    style={{ animation: `fade-up 0.6s ease-out ${0.3 + i * 0.15}s both` }}
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-aurora-soft font-display text-lg font-bold text-ink-950">
                      {pick.title.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium text-mist">{pick.title}</div>
                      <div className="text-xs text-mist-500">{pick.meta}</div>
                      {/* sparkline */}
                      <svg viewBox="0 0 100 20" className="mt-1.5 h-4 w-full" preserveAspectRatio="none" aria-hidden="true">
                        <polyline
                          points="0,14 15,10 30,12 45,5 60,9 75,3 90,7 100,2"
                          fill="none"
                          stroke="rgba(111,242,224,0.7)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-none rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-xs font-semibold text-teal-300">
                      {pick.match}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-2/3 rounded-full bg-aurora" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
