import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Shell } from "@/components/shell";
import { InstallationTimeline } from "@/components/sections/installation-timeline";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePrefix, type Locale } from "@/i18n/config";
import { buildWhatsAppLink } from "@/config/site.config";

export function InstallationPage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { eyebrow, title, subtitle } = dict.installation;
  const homeHref = `${localePrefix(lang) || ""}/#pricing`;

  return (
    <Shell dict={dict} lang={lang}>
      <section className="section aurora-bg relative pb-0">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-mist md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
          </div>
        </div>
      </section>

      <InstallationTimeline dict={dict} />

      <section className="section pt-0">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl glass-strong p-8 text-center sm:flex-row sm:justify-center">
            <Link href={homeHref} className="btn-primary">
              {dict.hero.ctaSecondary} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4" /> {dict.nav.support}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
