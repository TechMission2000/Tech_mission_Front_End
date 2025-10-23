"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import star from "../../public/service/Star 1.svg";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// --- SVG Icon Components ---
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
    className="text-pink-500"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- Sidebar Components ---

const RecentPostsWidget = () => {
  const posts = [
    {
      date: "September 14, 2023",
      title: "The reasons why we love web design agency",
      image: "https://placehold.co/80x80",
    },
    {
      date: "September 14, 2023",
      title: "A guide to running an effective meeting",
      image: "https://placehold.co/80x80",
    },
    {
      date: "September 14, 2023",
      title: "How to make your design stand out",
      image: "https://placehold.co/80x80",
    },
  ];
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Recent Posts
      </h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src="/blogdetailsimg.png"
              alt={post.title}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div>
              <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                <CalendarIcon /> {post.date}
              </p>
              <h4 className="font-semibold text-gray-700 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesWidget = ({ initialCategory }: { initialCategory: string }) => {
  const router = useRouter();

  const categoryList = [
    { id: 1, name: "AI & ML Services", active: true },
    { id: 2, name: "App Development", active: false },
    { id: 3, name: "Website Development", active: false },
    { id: 4, name: "Digital Marketing", active: false },
    { id: 5, name: "Graphics Design", active: false },
    { id: 6, name: "Custom Software", active: false },
  ];

  // Default selected category for UI display
  const selectedCategory = initialCategory || categoryList[0].name;
  //    const selectedCategory = initialCategory || categoryList[0].name;

  //   const selectedService = servicesData?.find(
  //     (service) => service.category === selectedCategory
  //   );

  const handleServiceClick = (category: string) => {
    router.push(`/blogs?category=${encodeURIComponent(category)}`);
  };
  return (
    <div className=" ">
      {/* Desktop: Left Column Categories */}
      <div className="hidden lg:flex w-96 p-2  mx-auto bg-neutral-50 rounded-lg flex-col gap-3">
        <div className="text-black text-2xl font-medium font-['Inter'] flex items-center gap-2">
          <Image src={star} alt="Star Icon" width={24} height={24} />
          All Services
        </div>
        {categoryList.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleServiceClick(cat.name)}
            className={`w-90 h-14 relative rounded outline cursor-pointer transition 
              ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600 text-white outline-zinc-500"
                  : "bg-white text-gray-900 outline-blue-600"
              } flex items-center justify-between px-5`}
          >
            <span className="text-xl font-normal font-['Lato']">
              {cat.name}
            </span>
            <ArrowRight
              size={24}
              className={`transition ${
                selectedCategory === cat.name ? "text-white" : "text-gray-600"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full lg:hidden p-4 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600 text-white flex justify-between items-center rounded-none">
          <span className="text-xl font-normal text-center font-['Lato'] flex-1">
            {selectedCategory}
          </span>
          <ChevronDown size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] mt-0 bg-gradient-to-r from-blue-900/50 via-blue-500/50 to-blue-600/50 border-0 rounded-none"
          align="start"
          sideOffset={0}
        >
          {categoryList.map((cat) => (
            <DropdownMenuItem
              key={cat.id}
              onClick={() => handleServiceClick(cat.name)}
              className="w-full rounded-none text-center justify-center hover:bg-gradient-to-r hover:from-blue-900/70 hover:via-blue-500/70 hover:to-blue-600/70 text-white hover:border-y-2 hoher:border-zinc-600 transition-all duration-200"
            >
              {cat.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const TagsWidget = () => {
  const tags = ["Development", "Solution", "Marketing"];
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <a
            key={index}
            href="#"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

const FollowUsWidget = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
      Follow Us
    </h3>
    <div className="flex justify-center gap-4">
      <p>comming...</p>
    </div>
  </div>
);

export const Sidebar = ({ initialCategory }: { initialCategory: string }) => (
  <aside className="lg:col-span-1 space-y-8">
    {/* <SearchWidget /> */}
    <ServicesWidget initialCategory={initialCategory} />
    <RecentPostsWidget />
    <TagsWidget />
    <FollowUsWidget />
  </aside>
);

export default function BlogSideBar({
  initialCategory,
}: {
  initialCategory: string;
}) {
  return (
    <div>
      <Sidebar initialCategory={initialCategory} />
    </div>
  );
}
