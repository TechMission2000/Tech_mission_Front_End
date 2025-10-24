"use client";

import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "../CustomButton";

function Blog() {
  const router = useRouter();

  const handleReadMore = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  // Show only first 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            Our Blog
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Latest Posts
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              {...post}
              onReadMore={handleReadMore}
              delay={index * 100} // optional stagger animation
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 flex justify-center">
          <CustomButton variant="primary" onClick={() => router.push("/blogs")}>
            View More
          </CustomButton>
          {/* <button
            onClick={handleViewMore}
            className="px-6 py-3  text-white font-semibold rounded-lg  transition-all duration-300"
          >
            View More
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
