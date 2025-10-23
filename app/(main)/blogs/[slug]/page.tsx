"use client";

import BlogDetailsPage from "../blogdetails/page";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogDetailsPage initialSlug={params.slug} />;
}
