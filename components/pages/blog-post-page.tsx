import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Shell } from "@/components/shell";
import { JsonLd } from "@/components/jsonld";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePrefix, type Locale } from "@/i18n/config";
import { buildWhatsAppLink, siteConfig } from "@/config/site.config";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Render inline **bold** segments within a line. */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-mist">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Small markdown renderer: ## / ### headings, - bullet lists, paragraphs. */
function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  let key = 0;

  const flushList = () => {
    if (list.length === 0) return;
    const items = list;
    blocks.push(
      <ul key={`ul-${key++}`} className="my-5 space-y-2 pl-5">
        {items.map((it, i) => (
          <li key={i} className="list-disc text-[15px] leading-relaxed text-mist-400 marker:text-teal-300">
            {renderInline(it)}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "") {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${key++}`} className="mt-8 font-display text-xl font-semibold text-mist">
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${key++}`} className="mt-10 font-display text-2xl font-bold text-mist md:text-3xl">
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flushList();
      blocks.push(
        <p key={`p-${key++}`} className="mt-4 text-[15px] leading-relaxed text-mist-400">
          {renderInline(line)}
        </p>
      );
    }
  }
  flushList();

  return <div>{blocks}</div>;
}

export function BlogPostPage({ lang, slug }: { lang: Locale; slug: string }) {
  const dict = getDictionary(lang);
  const post = dict.blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const blogHref = `${localePrefix(lang)}/blog`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.brand.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/favicon.svg` },
    },
    mainEntityOfPage: `${siteConfig.url}${localePrefix(lang)}/blog/${post.slug}`,
  };

  return (
    <Shell dict={dict} lang={lang}>
      <JsonLd data={articleJsonLd} />
      <article className="section aurora-bg relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <Link
              href={blogHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
            >
              <ArrowLeft className="h-4 w-4" /> {dict.blog.viewAll}
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs text-mist-500">
              <span className="chip border-teal/30 bg-ink-900/70 text-teal-300">{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl glass">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="mt-10">
              <Markdown content={post.content} />
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl glass-strong p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-[15px] text-mist-400">{dict.footer.availability}</p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-none"
              >
                <MessageCircle className="h-4 w-4" /> {dict.nav.support}
              </a>
            </div>
          </div>
        </div>
      </article>
    </Shell>
  );
}
