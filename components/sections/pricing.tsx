"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Plus, Crown, Sparkles } from "lucide-react";
import {
  plans, planFeatureKeys, calcPrice, calcFullPrice, formatPrice, connectionConfig, type Plan,
} from "@/config/pricing.config";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

function Selector({ value, onChange, dict }: { value: number; onChange: (v: number) => void; dict: Dictionary }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900/60 p-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(connectionConfig.min, value - 1))}
        disabled={value <= connectionConfig.min}
        aria-label={dict.pricing.removeConnection}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-mist transition hover:bg-white/10 disabled:opacity-30"
      >
        <Minus className="h-4 w-4" />
      </button>
      <div className="text-center">
        <span className="font-display text-lg font-bold text-mist">{value}</span>
        <span className="ml-1.5 text-xs text-mist-500">{value === 1 ? dict.pricing.connection : dict.pricing.connections}</span>
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(connectionConfig.max, value + 1))}
        disabled={value >= connectionConfig.max}
        aria-label={dict.pricing.addConnection}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal/15 text-teal-300 transition hover:bg-teal/25 disabled:opacity-30"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

function Card({ plan, index, dict }: { plan: Plan; index: number; dict: Dictionary }) {
  const [connections, setConnections] = useState(plan.connections);
  const total = calcPrice(plan.price, connections);
  const full = calcFullPrice(plan.price, connections);
  const savings = Math.round((full - total) * 100) / 100;
  const hasDiscount = connections > 1 && savings > 0;
  const sym = siteConfig.locale.currencySymbol;

  const monthsLabel = (n: number) => dict.pricing.monthsTemplate.replace("{n}", String(n));
  const bonusLabel = (n: number) => dict.pricing.bonusTemplate.replace("{n}", String(n));
  const unit = connections === 1 ? dict.pricing.connection : dict.pricing.connections;
  const durationLabel = `${monthsLabel(plan.months)}${plan.bonusMonths ? " · " + bonusLabel(plan.bonusMonths) : ""}`;
  const orderMsg = dict.pricing.orderTemplate
    .replace("{plan}", plan.name)
    .replace("{duration}", durationLabel)
    .replace("{conns}", String(connections))
    .replace("{unit}", unit)
    .replace("{price}", formatPrice(total, sym));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn("relative flex flex-col rounded-3xl p-6 md:p-7", (plan.popular || plan.bestValue) && "pt-9 md:pt-10", plan.highlight ? "glass-strong glow-border shadow-glow" : "glass")}
    >
      {(plan.popular || plan.bestValue) && (
        <div className={cn(
          "absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-950 shadow-lg",
          plan.popular ? "bg-aurora" : "bg-teal-gradient"
        )}>
          {plan.popular ? <Crown className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
          {plan.popular ? dict.pricing.badgePopular : dict.pricing.badgeValue}
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-display text-xl font-bold text-mist">{plan.name}</h3>
        <p className="mt-1 text-sm text-mist-500">
          {monthsLabel(plan.months)}
          {plan.bonusMonths ? <span className="ml-1.5 font-medium text-teal-300">{bonusLabel(plan.bonusMonths)}</span> : null}
        </p>
      </div>

      <div className="mb-1.5 flex items-end gap-1.5">
        <span className="font-display text-4xl font-extrabold leading-none text-mist">{formatPrice(total, sym)}</span>
        <span className="mb-0.5 whitespace-nowrap text-sm text-mist-500">{dict.pricing.per} {monthsLabel(plan.months)}</span>
      </div>

      <div className="mb-4 flex min-h-[1.5rem] flex-wrap items-center gap-2">
        {hasDiscount && (
          <>
            <span className="text-sm text-mist-600 line-through">{formatPrice(full, sym)}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal-300">
              −15% · {dict.pricing.save} {formatPrice(savings, sym)}
            </span>
          </>
        )}
      </div>

      <div className="mb-5">
        <Selector value={connections} onChange={setConnections} dict={dict} />
        <p className="mt-2 text-center text-xs text-mist-600">{dict.pricing.connectionNote}</p>
      </div>

      <ul className="mb-6 space-y-2.5">
        {planFeatureKeys.map((k) => (
          <li key={k} className="flex items-start gap-2.5 text-sm text-mist-400">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-teal-300" : "text-teal-400")} />
            <span>
              {k === "moviesSeries" ? `${plan.movies} ${dict.pricing.features.moviesSeries}` : dict.pricing.features[k]}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(orderMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-auto flex w-full items-center justify-center rounded-full px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5",
          plan.highlight ? "bg-aurora text-ink-950 shadow-glow" : plan.bestValue ? "bg-teal-gradient text-ink-950" : "border border-white/10 bg-white/[0.04] text-mist hover:bg-white/10"
        )}
      >
        {dict.pricing.order}
      </a>
    </motion.div>
  );
}

export function Pricing({ dict }: { dict: Dictionary }) {
  return (
    <section id="pricing" className="section relative scroll-mt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]" />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="eyebrow">{dict.pricing.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-mist text-balance sm:text-4xl md:text-5xl">{dict.pricing.title}</h2>
          <p className="mt-5 text-lg text-mist-400">{dict.pricing.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Card key={plan.id} plan={plan} index={i} dict={dict} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-mist-600">{dict.pricing.footnote}</p>
      </div>
    </section>
  );
}
