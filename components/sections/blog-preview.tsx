import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePrefix, type Locale } from "@/i18n/config";

function localize(href: string, lang: Locale) {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  return href === "" ? p || "/" : `${p}${href}`;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function BlogPreview({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { eyebrow, title, subtitle, readMore, viewAll, posts } = dict.blog;

  return (
    <section id="blog" className="section relative">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                  <span className="chip absolute left-4 top-4 border-teal/30 bg-ink-900/70 text-teal-300">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-mist-500">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-mist transition-colors group-hover:text-teal-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mist-400">{post.excerpt}</p>
                  <Link
                    href={localize(`/blog/${post.slug}`, lang)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
                  >
                    {readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={localize("/blog", lang)} className="btn-ghost">
            {viewAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
