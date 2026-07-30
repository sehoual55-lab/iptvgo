import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  title: it.meta.home.title,
  description: it.meta.home.description,
  path: "",
  keywords: ["iptvgo", "iptvgo italia", "iptvgo app", "iptvgo player", "abbonamento iptvgo"],
});

export default function Page() {
  return <HomePage lang="it" />;
}
