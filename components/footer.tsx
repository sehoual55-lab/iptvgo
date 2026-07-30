import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";
import { localePrefix, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

function localize(href: string, lang: Locale): string {
  if (href.startsWith("#")) return `${localePrefix(lang) || ""}/${href}`.replace("//", "/");
  const p = localePrefix(lang);
  if (href === "") return p || "/";
  return `${p}${href}`;
}

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const year = 2026;
  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-ink-900/50">
      <div className="h-0.5 w-full bg-aurora opacity-70" />
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-500">{dict.footer.tagline}</p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal-300 transition hover:bg-teal/20"
            >
              <MessageCircle className="h-4 w-4" /> {dict.footer.supportCta}
            </a>
            <p className="mt-2 text-sm text-mist-600">{dict.footer.availability}</p>
          </div>

          {Object.values(dict.footer.cols).map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-mist">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={localize(l.href, lang)} className="text-sm text-mist-500 transition-colors hover:text-teal-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Country landing pages */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-8">
          {[
            { href: "/iptvgo-uk", flag: "🇬🇧", name: "IPTVGO UK" },
            { href: "/iptvgo-italia", flag: "🇮🇹", name: "IPTVGO Italia" },
            { href: "/iptvgo-france", flag: "🇫🇷", name: "IPTVGO France" },
          ].map((co) => (
            <Link
              key={co.href}
              href={co.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-mist-400 transition hover:border-teal/40 hover:text-mist"
            >
              <span aria-hidden>{co.flag}</span> {co.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-8 text-sm text-mist-600">
          © {year} {siteConfig.brand.name}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
