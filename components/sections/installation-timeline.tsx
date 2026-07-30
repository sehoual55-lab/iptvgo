import { CreditCard, Zap, Download, PlayCircle, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

const icons: LucideIcon[] = [CreditCard, Zap, Download, PlayCircle];

export function InstallationTimeline({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, steps } = dict.installation;

  return (
    <section id="installation" className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[560px] -translate-x-1/2 rounded-full bg-teal/8 blur-[130px]" />
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  {/* top accent */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-aurora opacity-60" />
                  {/* watermark number */}
                  <span className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl font-extrabold leading-none text-white/[0.04]">
                    {i + 1}
                  </span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora text-ink-950 shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="relative mt-5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-mist">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-mist-400">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
