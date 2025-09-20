"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { technologyData } from "@/data/technologyData";

interface TechnologySectionProps {
  servicesData: any[];
  initialCategory?: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  servicesData,
  initialCategory,
}) => {
  // ✅ Hooks always at top
  const [selectedTechCategory, setSelectedTechCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(12); // default for large screens

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(6); // mobile/tablet
      } else {
        setItemsPerPage(12); // large screens
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get active service category from Redux
  // const activeCategory = useAppSelector(
  //   (state) => state.service.activeCategory
  // );
  const selectedCategory = initialCategory || servicesData[0]?.category;

  // Find selected service
  const selectedService = servicesData.find(
    (service) => service.category === selectedCategory
  );

  // Extract technologies
  const technologies = selectedService?.technologies || {};

  // Categories (dynamic)
  const categories = Object.keys(technologies).map((key) => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    color: "from-blue-900 via-blue-500 to-blue-600/90",
  }));

  // Normalize technologies with unique IDs
  const normalizeTechs = (category: string, techArray: string[]) =>
    techArray.map((name, idx) => {
      const tech = technologyData[
        category as keyof typeof technologyData
      ]?.find((t) => t.name === name);
      return { id: `${category}-${idx}`, name, icon: tech?.icon || "💻" };
    });

  const normalizedTechnologies: Record<string, any[]> = {};
  for (const [key, value] of Object.entries(technologies)) {
    normalizedTechnologies[key] = normalizeTechs(key, value as string[]);
  }

  const filteredTechnologies =
    selectedTechCategory === "All"
      ? Object.values(normalizedTechnologies).flat()
      : normalizedTechnologies[selectedTechCategory] || [];

  const totalPages = Math.ceil(filteredTechnologies.length / itemsPerPage);
  const currentItems = filteredTechnologies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedTechCategory(category);
    setCurrentPage(1);
  };
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // ✅ Conditional rendering without breaking hooks
  if (!selectedService) {
    return (
      <p className="text-gray-600">
        No technologies available for this service.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-start items-center gap-12 py-16 bg-white">
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-4">
        <div className="text-sky-700 text-2xl font-semibold">
          Technology We Use
        </div>
        <div className="text-gray-900 text-4xl font-semibold text-center">
          Innovative Tools Driving Our Solutions
        </div>
        <div className="text-neutral-600 text-xl text-center">
          Tech-Mission's {selectedService.category} team delivers fast,
          high-quality solutions using the latest technologies.
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:h-full">
          <div className="p-4 bg-neutral-50 rounded-lg w-full h-full flex flex-col">
            <div className="text-black text-2xl font-medium mb-4">
              Filter by Category
            </div>

            <div
              onClick={() => handleCategoryChange("All")}
              className={`w-full h-14 rounded flex items-center outline justify-between px-4 mb-3 cursor-pointer transition ${
                selectedTechCategory === "All"
                  ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600/90 text-white"
                  : "bg-white text-gray-900 outline-blue-600"
              }`}
            >
              <span>All Technologies</span>
              <ChevronRight
                size={24}
                className={
                  selectedTechCategory === "All"
                    ? "text-white"
                    : "text-blue-600"
                }
              />
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`w-full h-14 rounded flex outline items-center justify-between px-4 mb-3 cursor-pointer transition ${
                  selectedTechCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : "bg-white text-gray-900 outline-blue-600"
                }`}
              >
                <span>{category.name}</span>
                <ChevronRight
                  size={24}
                  className={
                    selectedTechCategory === category.id
                      ? "text-white"
                      : "text-blue-600"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="w-full lg:w-2/3 flex-1">
          <div className="grid grid-cols-2  lg:grid-cols-3 gap-6">
            {currentItems.map((tech) => (
              <div
                key={tech.id}
                className="w-full h-28 bg-indigo-50 rounded-lg border border-indigo-100 flex flex-col items-center justify-center p-4 hover:shadow-md transition"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="text-lg font-semibold text-gray-900">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
