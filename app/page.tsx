import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: en.meta.home.title,
  description: en.meta.home.description,
  path: "",
  keywords: ["iptvgo", "iptvgo uk", "iptvgo app", "iptvgo player", "best iptvgo subscription", "iptvgo installation"],
});

export default function Page() {
  return <HomePage lang="en" />;
}
