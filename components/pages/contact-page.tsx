import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Shell } from "@/components/shell";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { buildWhatsAppLink, buildPhoneLink, siteConfig } from "@/config/site.config";

export function ContactPage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <Shell dict={dict} lang={lang}>
      <section className="section aurora-bg relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{dict.nav.support}</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-mist md:text-5xl lg:text-6xl">
              {dict.meta.contact.title}
            </h1>
            <p className="mt-4 text-balance text-lg text-mist-400">{dict.meta.contact.description}</p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl glass-strong glow-border p-8 md:p-10">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle className="h-5 w-5" /> {dict.nav.support}
            </a>

            <div className="mt-8 space-y-5">
              <a
                href={buildPhoneLink()}
                className="flex items-center gap-4 rounded-2xl glass p-5 transition-colors hover:border-teal/30"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-aurora text-ink-950">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-semibold text-mist">
                  {siteConfig.contact.phone}
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 rounded-2xl glass p-5 transition-colors hover:border-teal/30"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-aurora text-ink-950">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-semibold text-mist">
                  {siteConfig.contact.email}
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-aurora text-ink-950">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="text-[15px] text-mist-400">{dict.footer.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
