"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

import BlogPagination from "./BlogPagination";

export default function BlogGrid({ blogPosts }: { blogPosts: any[] }) {
  const postsPerPage = 6;
  const [currentPosts, setCurrentPosts] = useState(
    blogPosts.slice(0, postsPerPage)
  );

  const handlePageChange = (page: number, [start, end]: number[]) => {
    setCurrentPosts(blogPosts.slice(start, end));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {currentPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            date={post.date}
            href={post.href}
          />
        ))}
      </div>

      {/* Pagination */}
      <BlogPagination
        totalPosts={blogPosts.length}
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
