import { Shell } from "@/components/shell";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function LegalPage({ lang, doc }: { lang: Locale; doc: "privacy" | "refund" | "terms" | "dmca" }) {
  const dict = getDictionary(lang);
  const { updated } = dict.legal;
  const { title, intro, sections } = dict.legal[doc];

  return (
    <Shell dict={dict} lang={lang}>
      <section className="section aurora-bg relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{title}</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-mist md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-mist-500">{updated}</p>
            <p className="mt-6 text-lg leading-relaxed text-mist-400">{intro}</p>

            <div className="mt-12 space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-2xl font-semibold text-mist">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-mist-400">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
