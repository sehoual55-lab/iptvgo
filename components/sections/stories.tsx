import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Real portrait photos (order matches the testimonials list).
const avatars = [
  "https://i.pravatar.cc/160?img=12",
  "https://i.pravatar.cc/160?img=45",
  "https://i.pravatar.cc/160?img=15",
  "https://i.pravatar.cc/160?img=44",
  "https://i.pravatar.cc/160?img=47",
  "https://i.pravatar.cc/160?img=49",
];

export function Stories({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle, testimonials } = dict.stories;

  return (
    <section id="stories" className="section relative">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="relative flex h-full flex-col rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-white/[0.06]" />
                <div className="flex gap-1" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={s < t.rating ? "h-4 w-4 fill-teal-300 text-teal-300" : "h-4 w-4 text-mist-600"}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-mist-400">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative h-11 w-11 flex-none overflow-hidden rounded-full ring-2 ring-white/10">
                    <Image
                      src={avatars[i % avatars.length]}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                      unoptimized
                    />
                  </span>
                  <span>
                    <span className="block font-medium text-mist">{t.name}</span>
                    <span className="block text-xs text-mist-500">{t.city}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
