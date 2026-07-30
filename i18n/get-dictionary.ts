import { en, type Dictionary } from "@/i18n/dictionaries/en";
import { it } from "@/i18n/dictionaries/it";
import { fr } from "@/i18n/dictionaries/fr";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { en, it, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
