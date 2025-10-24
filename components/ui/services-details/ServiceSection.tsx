"use client";

import React from "react";
import star from "../../../public/service/Star 1.svg";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // ShadCN Dropdown
import CustomButton from "@/components/ui/CustomButton";

interface Category {
  id: number;
  name: string;
}

interface Service {
  id: number;
  category: string;
  article?: {
    title: string;
    description: string;
    image: string;
  };
}

interface Props {
  categoryList: Category[];
  servicesData?: Service[];
  initialCategory?: string; // New prop for initial category
}

const ServiceSection: React.FC<Props> = ({
  categoryList,
  servicesData,
  initialCategory,
}) => {
  const router = useRouter();

  // Default selected category for UI display
  const selectedCategory = initialCategory || categoryList[0].name;

  const selectedService = servicesData?.find(
    (service) => service.category === selectedCategory
  );

  const handleServiceClick = (category: string) => {
    router.push(`/services-details?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="mx-auto max-w-7xl lg:px-8 flex flex-col lg:flex-row justify-between items-center">
      {/* Desktop: Left Column Categories */}
      <div className="hidden lg:flex w-96 p-2 mt-20 mx-auto bg-neutral-50 rounded-lg flex-col gap-3 py-5">
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

      {/* Right Column: Service Detail */}
      <div className="w-full lg:w-[685px] mt-0 lg:mt-20 flex flex-col gap-5">
        {selectedService ? (
          <>
            <img
              src={selectedService?.article?.image}
              alt={selectedService?.article?.title}
              className="w-full h-80 lg:h-96 object-cover rounded"
            />

            <div className="flex flex-col gap-3 px-2 lg:p-0">
              <h2 className="text-black text-4xl font-semibold font-['Raleway']">
                {selectedService?.article?.title}
              </h2>
              <p className="text-neutral-600 text-xl font-normal font-['Lato'] leading-snug">
                {selectedService?.article?.description}
              </p>

              {/* View Details Button */}
              {/* <div className="mt-4">
                <CustomButton
                  variant="primary"
                  onClick={() => handleServiceClick(selectedService.category)}
                >
                  View Details
                </CustomButton>
              </div> */}
            </div>
          </>
        ) : (
          <p className="text-gray-600">Select a service to see details.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
