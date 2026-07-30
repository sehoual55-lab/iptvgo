import type { Metadata } from "next";
import { BlogPostPage } from "@/components/pages/blog-post-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export function generateStaticParams() {
  return en.blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = en.blog.posts.find((p) => p.slug === slug);
  return buildMetadata({
    locale: "en",
    title: post ? post.title : "Blog",
    description: post?.excerpt ?? "",
    path: `/blog/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostPage lang="en" slug={slug} />;
}
