import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Experience({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, colA, colB, rows } = dict.experience;

  return (
    <section id="experience" className="section relative">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-4xl glass-strong md:block">
            <div className="grid grid-cols-[1.5fr_1fr_1fr]">
              <div className="border-b border-white/[0.06] p-5" />
              <div className="relative border-b border-l border-white/[0.06] bg-teal/[0.06] p-5 text-center">
                <span className="font-display text-lg font-bold text-teal-300">{colA}</span>
              </div>
              <div className="border-b border-l border-white/[0.06] p-5 text-center">
                <span className="font-display text-lg font-semibold text-mist-500">{colB}</span>
              </div>

              {rows.map((row, i) => (
                <div key={row.feature} className="contents">
                  <div className={`p-5 text-[15px] font-medium text-mist-400 ${i < rows.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                    {row.feature}
                  </div>
                  <div className={`flex items-center justify-center gap-2 border-l border-white/[0.06] bg-teal/[0.06] p-5 text-center text-sm ${i < rows.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                    <Check className="h-4 w-4 flex-none text-teal-300" strokeWidth={2.6} />
                    <span className="text-mist">{row.a}</span>
                  </div>
                  <div className={`flex items-center justify-center gap-2 border-l border-white/[0.06] p-5 text-center text-sm ${i < rows.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                    <X className="h-4 w-4 flex-none text-mist-600" strokeWidth={2.4} />
                    <span className="text-mist-500">{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stacked cards */}
          <div className="space-y-4 md:hidden">
            {rows.map((row, i) => (
              <Reveal key={row.feature} delay={i * 0.05}>
                <div className="rounded-2xl glass p-5">
                  <p className="font-display text-base font-semibold text-mist">{row.feature}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-teal/20 bg-teal/[0.07] p-3">
                      <div className="text-xs uppercase tracking-wide text-teal-300">{colA}</div>
                      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-mist">
                        <Check className="h-4 w-4 flex-none text-teal-300" strokeWidth={2.6} /> {row.a}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-xs uppercase tracking-wide text-mist-500">{colB}</div>
                      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-mist-500">
                        <X className="h-4 w-4 flex-none text-mist-600" strokeWidth={2.4} /> {row.b}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
