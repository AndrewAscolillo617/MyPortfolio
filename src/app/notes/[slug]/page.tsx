// src/app/notes/[slug]/page.tsx
import BlogPostOne from "components/BlogPostOne";
import BlogPostTwo from "components/BlogPostTwo";
import { notFound } from "next/navigation";

//This pre-renders the dynamic routes as HTML files during build
export async function generateStaticParams() {
  return [{ slug: "dsa-notes" }, { slug: "nextjs-routing" }];
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  switch (slug) {
    case "dsa-notes":
      return <BlogPostOne />;
    case "nextjs-routing":
      return <BlogPostTwo />;
    default:
      return notFound();
  }
}
