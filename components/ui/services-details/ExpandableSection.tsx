"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const ExpandableSection = ({ servicesData }: any) => {
  const service = servicesData;
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6 px-3 sm:px-6">
      {/* Title */}
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch justify-start text-black text-2xl sm:text-3xl font-semibold font-['Raleway'] leading-tight sm:leading-9">
          What Makes Us Different
        </div>
        <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-blue-600"></div>
      </div>

      {/* Accordion Items */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {service.whatMakesUsDifferent.map((item: any, index: number) => (
          <div
            key={index}
            className="self-stretch flex flex-col justify-start items-end gap-3.5"
          >
            {/* Accordion Header */}
            <div
              className="self-stretch h-12 sm:h-14 relative bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white font-bold rounded overflow-hidden cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 inline-flex justify-between items-center w-[calc(100%-32px)] sm:w-[calc(100%-48px)]">
                <div className="justify-center text-white text-sm sm:text-lg font-bold font-['Raleway'] leading-snug">
                  {item.title}
                </div>
                {/* Icon */}
                <div className="text-white transition-transform duration-300">
                  {activeIndex === index ? <Minus /> : <Plus />}
                </div>
              </div>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div className="w-full justify-start text-black text-sm sm:text-base font-normal font-['Lato'] leading-snug p-3 sm:p-4 bg-gray-50 rounded-lg">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableSection;
