"use client";

import React from "react";
import ExpandableSection from "./ExpandableSection";
import CustomButton from "../CustomButton";
import { useAppSelector } from "@/app/redux/hooks";

const BenefitsDifferentiatorsSection = ({
  servicesData,
  initialCategory,
}: any) => {
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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-start items-start gap-12 py-12 sm:py-16 bg-white">
      {/* Left Column - Benefits */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6">
        <div className="text-black text-xl sm:text-2xl lg:text-3xl font-semibold font-['Raleway'] leading-snug">
          Benefits With Our Service
        </div>
        <div className="flex flex-col justify-center items-start gap-4 sm:gap-5 w-full">
          {selectedService.benefits.map((benefit: any, index: number) => (
            <div
              key={index}
              className="w-full relative bg-gradient-to-b from-neutral-50 to-neutral-50 rounded-md overflow-hidden"
            >
              <div className="w-full px-4 sm:px-6 lg:px-9 py-4 sm:py-5 flex justify-start items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Icon Box */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 p-3 sm:p-4 bg-gradient-to-bl from-blue-700/20 to-lime-400/0 rounded-md flex justify-center items-center">
                  <div className="w-5 h-7 sm:w-6 sm:h-8 lg:w-7 lg:h-9 bg-sky-700 rounded" />
                </div>

                {/* Texts */}
                <div className="flex-1 flex flex-col justify-start items-start gap-1 sm:gap-2">
                  <div className="text-gray-900 text-base sm:text-lg lg:text-xl font-semibold font-['Lato'] leading-snug">
                    {benefit.title}
                  </div>
                  <div className="text-neutral-600 text-xs sm:text-sm lg:text-base font-normal font-['Lato'] leading-snug">
                    {benefit.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - What Makes Us Different */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 sm:gap-8 mt-8 lg:mt-0">
        <ExpandableSection servicesData={servicesData} />
        <div className="w-full flex justify-center my-6 sm:my-8">
          <div className="w-full sm:w-80 lg:w-96 h-auto sm:h-[360px] lg:h-[400px] relative bg-white rounded-xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6">
              {/* Image */}
              <img
                className="w-full h-28 sm:h-32 lg:h-36 object-cover rounded-lg"
                src="https://placehold.co/273x142"
                alt="Contact us"
              />

              {/* Texts */}
              <div className="w-full flex flex-col justify-center items-center gap-2 sm:gap-4">
                <div className="text-black text-xs sm:text-sm font-normal font-['Lato']">
                  Contact Us Now
                </div>
                <div className="w-full text-center text-black text-lg sm:text-xl lg:text-2xl font-bold font-['Raleway'] leading-snug">
                  You Need Help?
                </div>
                <CustomButton variant="primary">Get In Touch</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsDifferentiatorsSection;
