"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServiceSlider = ({ services }: { services: Service[] }) => {
  return (
    <div className="mt-12">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={5}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        centeredSlides
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1440: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide
            key={service.id}
            className="!flex justify-center items-center"
          >
            {({ isActive, isPrev, isNext }) => {
              let scale = 0.9;
              if (isActive) scale = 1.1;
              else if (isPrev || isNext) scale = 0.9;

              return (
                <motion.div
                  style={{ scale }}
                  className={`my-10 flex-shrink-0 w-72 h-52 rounded-[20px] p-6 flex flex-col items-center bg-[#F1F2FA] text-center transition-all duration-500
          ${
            isActive
              ? "   shadow-lg "
              : isPrev || isNext
              ? " text-black "
              : " text-black/70 "
          }`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mb-3 object-contain"
                  />
                  <h3 className="text-center justify-start text-black text-lg font-normal font-['Lato'] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-center justify-start text-neutral-600 text-sm font-normal font-['Lato'] leading-none m-2">
                    {service.description}
                  </p>
                </motion.div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
