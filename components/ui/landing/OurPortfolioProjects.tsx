'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// --- Icon Components (using SVG for better performance and scalability) ---

const DigitalMarketingIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 15h4v-4H3v4zM17 3h4v4h-4V3zM10 3h4v4h-4V3zM3 3h4v4H3V3zM10 15h4v-4h-4v4z" />
    <path d="M17 10h4v4h-4v-4zM21 10V3M7 21v-8m7 8v-8m-7-4v4m0 4v4m7-4v4" />
  </svg>
);

const WebsiteDevelopmentIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 12.5 8 15l-4-4" />
    <path d="M14 12.5 16 15l4-4" />
    <path d="M20 21v-4.5a2.5 2.5 0 0 0-2.5-2.5H6.5A2.5 2.5 0 0 0 4 16.5V21" />
    <path d="M12 14v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 1-2.5-2.5V3h12v4.5a2.5 2.5 0 0 1-2.5 2.5h-1A2.5 2.5 0 0 0 12 12.5Z" />
  </svg>
);

const GraphicsDesignIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a9 9 0 0 1 0-18c7 0 9 7 9 9s-2 9-9 9z" />
    <path d="M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0z" />
    <path d="m14.5 7-5 5" />
    <path d="m12 12 5 5" />
    <path d="M7 17l5-5" />
  </svg>
);

const SoftwareDevelopmentIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);


// --- Reusable Button Component ---

const FilterButton = ({ text, icon, isActive, onClick }: { text: string; icon: React.ReactNode; isActive: boolean; onClick: () => void }) => {
  const baseClasses = "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const activeClasses = "bg-[#4089E0] text-white";
  const inactiveClasses = "bg-white text-gray-800 border border-[#106CD8] hover:bg-blue-50";

  return (
    <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {icon}
      <span>{text}</span>
    </button>
  );
};


// --- Reusable Portfolio Card Component ---

const PortfolioCard = ({ category, imageUrl }: { category: string; imageUrl: string }) => (
  <div className="group relative w-full h-[350px] bg-gray-200/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-2 left-0 bg-white shadow-lg rounded-r-full py-2 px-6 z-10">
      <span className="text-gray-800 text-lg font-semibold tracking-wide">{category}</span>
    </div>
    <Image
      src={imageUrl}
      alt={`${category} project`}
      width={400}
      height={300}
      className="w-full h-full object-cover p-6 pt-16 transform group-hover:scale-105 transition-transform duration-300"
      
    />
  </div>
);


// --- Main Portfolio Component ---

function OurPortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState('Digital Marketing');

  const portfolioItems = [
    { category: 'LOGO', imageUrl: '/portfolio1.png' },
    { category: 'BRANDING',  imageUrl: '/portfolio2.png' },
    { category: 'DESIGN',  imageUrl: '/portfolio3.png' },
    { category: 'MARKETING',  imageUrl: '/portfolio1.png' },
    { category: 'WEB',  imageUrl: '/portfolio3.png' },
    { category: 'SOFTWARE',  imageUrl: '/portfolio2.png' },
  ];

  const filters = [
    { name: 'Digital Marketing', icon: <DigitalMarketingIcon /> },
    { name: 'Website Development', icon: <WebsiteDevelopmentIcon /> },
    { name: 'Graphics Design', icon: <GraphicsDesignIcon /> },
    { name: 'Software Development', icon: <SoftwareDevelopmentIcon /> },
  ];

  return (
    <section className="w-full min-h-screen bg-[#F2F2F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#072D5B] leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Explore Our Portfolio
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-gray-700" style={{ fontFamily: "'Lato', sans-serif" }}>
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} category={item.category} imageUrl={item.imageUrl} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurPortfolioProjects;
