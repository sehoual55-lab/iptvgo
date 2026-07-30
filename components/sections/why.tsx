import { Gauge, MonitorPlay, Zap, MonitorSmartphone, Headphones, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

const icons: LucideIcon[] = [Gauge, MonitorPlay, Zap, MonitorSmartphone, Headphones, ShieldCheck];

export function Why({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, cards } = dict.why;

  return (
    <section id="why" className="section relative">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aurora shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-ink-950" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-mist">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mist-400">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
