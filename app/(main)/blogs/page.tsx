import BlogGrid from "@/components/blog/BlogGrid";
import BlogSideBar from "@/components/blog/BlogSideBar";
import LatestPostUpdates from "@/components/blog/LatestPostUpdates";
import { blogPosts } from "@/data/blogData";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  // ✅ Await searchParams
  const params = await searchParams;
  const selectedCategory = params?.category || "All";

  return (
    <div className="max-w-[1140px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Latest updates */}
      <LatestPostUpdates />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-6">
        {/* Sidebar with categories */}
        <BlogSideBar initialCategory={selectedCategory} />

        {/* Blog list area */}
        <div className="ml-5 col-span-2">
          <div className="mx-auto p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Our Blog
              </h2>
              <p className="text-gray-600">
                Showing posts in{" "}
                <span className="font-semibold">{selectedCategory}</span>
              </p>
            </div>

            {blogPosts.length > 0 ? (
              <BlogGrid
                blogPosts={blogPosts}
                selectedCategory={selectedCategory}
              />
            ) : (
              <p className="text-gray-500 italic">
                No posts found for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
