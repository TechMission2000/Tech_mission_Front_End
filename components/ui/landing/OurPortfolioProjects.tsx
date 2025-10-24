"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LogoLoader } from "../LogoLoader";
import {
  BrainCircuit,
  Briefcase,
  Brush,
  Code,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { FaAndroid } from "react-icons/fa";

// --- Reusable Button Component ---

const FilterButton = ({
  text,
  icon,
  isActive,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const activeClasses =
    "bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white";
  const inactiveClasses =
    "bg-white text-gray-800 border border-[#106CD8] hover:bg-blue-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

// --- Reusable Portfolio Card Component ---

const PortfolioCard = ({
  category,
  imageUrl,
}: {
  category: string;
  imageUrl?: string;
}) => (
  <div className="group relative w-full h-[350px] bg-gray-200/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-2 left-0 bg-white shadow-lg rounded-r-full py-2 px-6 z-10">
      <span className="text-gray-800 text-lg font-semibold tracking-wide">
        <div className="flex items-center gap-1">
          <LogoLoader logoColor="#155DFC" customClass="h-6 w-6"></LogoLoader>
          <p
            className="text-sm font-bold m-0 p-0 translate-y-1 text-blue-600"
            style={{
              fontFamily: "BellMT, 'Bell MT'",
            }}
          >
            TechMission
          </p>
        </div>
      </span>
    </div>
    <Image
      src={imageUrl || "/placeholder.jpg"}
      alt={`${category} project`}
      width={400}
      height={300}
      className="w-full h-full object-cover p-6 pt-16 transform group-hover:scale-105 transition-transform duration-300"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src =
          "https://placehold.co/400x300/e2e8f0/334155?text=Image+Error";
      }}
    />
  </div>
);

// --- Main Portfolio Component ---

function OurPortfolioProjects() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: <Briefcase className="h-6 w-6" /> },
    { name: "AI & ML Services", icon: <BrainCircuit className="h-6 w-6" /> },
    { name: "App Development", icon: <FaAndroid className="h-6 w-6" /> },
    { name: "Website Development", icon: <Code className="h-6 w-6" /> },
    { name: "Digital Marketing", icon: <Megaphone className="h-6 w-6" /> },
    { name: "Graphics Design", icon: <Brush className="h-6 w-6" /> },
    { name: "Custom Software", icon: <Briefcase className="h-6 w-6" /> },
  ];

  // Filter portfolio data based on active filter
  const filteredData = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioData;
    }
    return portfolioData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Show only 3 items
  const displayedData = filteredData.slice(0, 3);

  // Handle View More button click
  const handleViewMore = () => {
    // Redirect to portfolio page with the active filter as a query parameter
    if (activeFilter === "All") {
      router.push("/work");
    } else {
      router.push(`/work?category=${encodeURIComponent(activeFilter)}`);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#F2F2F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="text-center">
          <h1
            className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Explore Our Portfolio
          </h1>
          <p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Work
          </p>
        </div>

        {/* Filter Buttons Section */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <FilterButton
              key={filter.name}
              text={filter.name}
              icon={filter.icon}
              isActive={activeFilter === filter.name}
              onClick={() => setActiveFilter(filter.name)}
            />
          ))}
        </div>

        {/* Portfolio Grid Section */}
        <div className="w-full">
          {displayedData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {displayedData.map((item, index) => (
                <PortfolioCard
                  key={index}
                  category={item.category}
                  imageUrl={item?.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* View More Button */}
          {filteredData.length > 3 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleViewMore}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>View More Projects</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurPortfolioProjects;
