// BlogGrid.tsx
"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import BlogPostPage from "@/app/(main)/blogs/[slug]/page";
import { useRouter } from "next/navigation";

export default function BlogGrid({
  blogPosts,
  selectedCategory,
}: {
  blogPosts: any[];
  selectedCategory: string;
}) {
  const postsPerPage = 6;
  const router = useRouter();

  // 1️⃣ Handle "All" case or mismatched categories
  const filteredPosts =
    selectedCategory === "All" || !selectedCategory
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // 2️⃣ State for current page posts
  const [currentPosts, setCurrentPosts] = useState(
    filteredPosts.slice(0, postsPerPage)
  );

  // 3️⃣ Reset posts when category changes
  useEffect(() => {
    setCurrentPosts(filteredPosts.slice(0, postsPerPage));
  }, [selectedCategory, blogPosts]);

  // 4️⃣ Handle pagination
  const handlePageChange = (_page: number, [start, end]: number[]) => {
    setCurrentPosts(filteredPosts.slice(start, end));
  };

  const handleClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <BlogCard
              onReadMore={handleClick}
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              href={post.href}
              slug={post.slug}
            />
          ))
        ) : (
          <p className="text-gray-500 italic">
            No posts found for this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      <BlogPagination
        totalPosts={filteredPosts.length} // ✅ Only count filtered posts
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
