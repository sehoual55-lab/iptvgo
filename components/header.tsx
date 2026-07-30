"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, MessageCircle, Check } from "lucide-react";
import { Logo } from "@/components/logo";
import { buildWhatsAppLink } from "@/config/site.config";
import { locales, localePrefix, localeMeta, defaultLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

function localize(href: string, lang: Locale): string {
  if (href.startsWith("#")) return href;
  const p = localePrefix(lang);
  if (href === "") return p || "/";
  return `${p}${href}`;
}

/** Strip any locale prefix from a pathname to get the language-agnostic rest. */
function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname === "/" ? "" : pathname;
}

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const rest = stripLocale(pathname || "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link href={localize("", lang)} aria-label="IPTVGO home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {dict.nav.links.map((item) => (
            <li key={item.label}>
              <Link
                href={localize(item.href, lang)}
                className="rounded-full px-4 py-2 text-sm font-medium text-mist-400 transition-colors hover:text-mist"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-mist-400 transition hover:text-mist"
              aria-label={dict.common.language}
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{localeMeta[lang].flag}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="glass-strong absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl p-1.5"
                >
                  {locales.map((l) => (
                    <li key={l}>
                      <Link
                        href={(localePrefix(l) + rest) || "/"}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-white/5",
                          l === lang ? "text-teal-300" : "text-mist-400"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span>{localeMeta[l].flag}</span> {localeMeta[l].label}
                        </span>
                        {l === lang && <Check className="h-4 w-4" />}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href={localize("#pricing", lang)} className="btn-primary hidden text-sm lg:inline-flex">
            {dict.nav.getStarted}
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {dict.nav.links.map((item) => (
                <li key={item.label}>
                  <Link href={localize(item.href, lang)} className="block rounded-xl px-4 py-3 text-base font-medium text-mist-400 hover:bg-white/5">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-2">
                <Link href={localize("#pricing", lang)} className="btn-primary w-full">
                  {dict.nav.getStarted}
                </Link>
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                  <MessageCircle className="h-4 w-4" /> {dict.nav.support}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
