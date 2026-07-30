import { Shell } from "@/components/shell";
import { FaqAccordion } from "@/components/pages/faq-accordion";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function FaqPage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { eyebrow, title, subtitle, items } = dict.faq;

  return (
    <Shell dict={dict} lang={lang}>
      <JsonLd data={faqJsonLd(items)} />
      <section className="section aurora-bg relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-mist md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
          </div>

          <FaqAccordion items={items} />
        </div>
      </section>
    </Shell>
  );
}
