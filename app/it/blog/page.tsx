import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({ locale: "it", title: it.meta.blog.title, description: it.meta.blog.description, path: "/blog" });

export default function Page() {
  return <BlogIndexPage lang="it" />;
}
