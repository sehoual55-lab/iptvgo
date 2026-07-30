import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

export function Shell({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>{children}</main>
      <Footer dict={dict} lang={lang} />
      <WhatsAppFloat label={dict.nav.support} />
    </>
  );
}
