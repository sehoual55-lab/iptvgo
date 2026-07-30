import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({ locale: "en", title: en.meta.blog.title, description: en.meta.blog.description, path: "/blog" });

export default function Page() {
  return <BlogIndexPage lang="en" />;
}
