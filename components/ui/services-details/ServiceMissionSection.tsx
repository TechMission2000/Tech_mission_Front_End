"use client";

import React from "react";

import { ShieldCheck } from "lucide-react";

interface MissionProps {
  initialCategory?: string;
  servicesData: {
    id: number;
    category: string;
    article?: {
      title: string;
      description: string;
      image: string;
    };
    coreText?: {
      title: string;
      video: string;
      features: string[];
    };
    benefits?: {
      title: string;
      description: string;
      icon: string;
    }[];
    whatMakesUsDifferent?: {
      title: string;
      description: string;
    }[];
    mission?: {
      imageUrl: string;
      items: string[];
    };
    technologies?: {
      frontend: string[];
      backend: string[];
      database: string[];
      devops: string[];
      uiux: string[];
      security: string[];
      languages: string[];
    };
  }[];
}

const ServiceMissionSection: React.FC<MissionProps> = ({
  servicesData,
  initialCategory,
}) => {
  // const activeCategory = useAppSelector(
  //   (state) => state.service.activeCategory
  // );

  const selectedCategory = initialCategory || servicesData[0]?.category;
  const selectedService = servicesData.find(
    (service: any) => service.category === selectedCategory
  );

  if (!selectedService) {
    return (
      <p className="text-gray-600">No benefits available for this service.</p>
    );
  }

  const { imageUrl, items } = selectedService?.mission || {
    imageUrl: "",
    items: [],
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-white">
      <div className="w-full flex flex-col items-center gap-8">
        {/* Mission Title Section */}
        <div className="hidden lg:flex w-full max-w-4xl flex-col justify-start items-center gap-4">
          <div className="text-blue-600 text-4xl font-semibold text-center">
            Our Mission
          </div>
          <div className="self-stretch text-center text-zinc-800 text-xl font-semibold font-['Lato'] leading-normal">
            Tech Mission is to solve challenging technical problems in
            partnership with our clients.
          </div>
          <div className="flex justify-center items-center space-x-1 mt-4">
            <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
            <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
          </div>
        </div>

        {/* Mobile and Desktop Content Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Image Section - First on mobile, Left on desktop */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <img
              className="w-full max-w-md h-auto rounded-xl shadow-lg"
              src={imageUrl}
              alt="Our Mission"
            />
          </div>

          {/* Mobile Title - Shows only on mobile between image and items */}
          <div className="lg:hidden w-full flex flex-col justify-start items-center gap-4">
            <div className="text-blue-600 text-3xl font-semibold text-center">
              Our Mission
            </div>
            <div className="self-stretch text-center text-zinc-800 text-lg font-semibold font-['Lato'] leading-normal">
              Tech Mission is to solve challenging technical problems in
              partnership with our clients.
            </div>
            <div className="flex justify-center items-center space-x-1 mt-4">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
              <div className="w-10 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
            </div>
          </div>

          {/* Mission Items - Last on mobile, Right on desktop */}
          <div className="w-full lg:w-3/5 flex flex-col justify-start items-start gap-6">
            {items.map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex justify-start items-start gap-4 sm:gap-6"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1">
                  <ShieldCheck className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md" />
                </div>
                <div className="flex-1 text-black text-base sm:text-xl">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMissionSection;
