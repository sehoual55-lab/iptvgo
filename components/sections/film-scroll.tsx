import Image from "next/image";
import { Star } from "lucide-react";
import type { MediaItem } from "@/lib/tmdb";
import type { Dictionary } from "@/i18n/dictionaries/en";

function Row({ items, reverse }: { items: MediaItem[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 gap-4 pr-4 animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((m, i) => (
          <div
            key={`${m.id}-${i}`}
            className="group relative h-52 w-36 shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-800 sm:h-60 sm:w-40"
          >
            <Image
              src={m.poster}
              alt={`${m.title} — IPTVGO`}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-gradient-to-t from-ink-950 to-transparent p-2 pt-6">
              <span className="truncate text-[11px] font-medium text-mist">{m.title}</span>
              <span className="flex shrink-0 items-center gap-0.5 text-[10px] font-semibold text-teal-300">
                <Star className="h-3 w-3 fill-teal-300 text-teal-300" /> {m.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FilmScroll({ posters, dict }: { posters: MediaItem[]; dict: Dictionary }) {
  const row = posters.slice(0, 16);

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.04] to-transparent" />
      <div className="container relative z-10 mb-8 text-center">
        <span className="eyebrow">{dict.showcase.eyebrow}</span>
        <h2 className="mt-4 font-display text-2xl font-bold text-mist md:text-3xl">
          {dict.showcase.countLabel}
        </h2>
      </div>
      <div className="relative z-10">
        <Row items={row} />
      </div>
    </section>
  );
}
