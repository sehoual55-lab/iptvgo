export const locales = ["en", "it", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Path prefix for a locale ("" for the default English at root). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export const localeMeta: Record<Locale, { label: string; flag: string; ogLocale: string; htmlLang: string }> = {
  en: { label: "English", flag: "🇬🇧", ogLocale: "en_GB", htmlLang: "en-GB" },
  it: { label: "Italiano", flag: "🇮🇹", ogLocale: "it_IT", htmlLang: "it-IT" },
  fr: { label: "Français", flag: "🇫🇷", ogLocale: "fr_FR", htmlLang: "fr-FR" },
};
