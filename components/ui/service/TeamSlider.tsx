"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import backpGroundImage from "../../../public/service/teamImageBackground.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Asifur Rahman",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Scadjscn jk nd ojifeo naqf fd a dkacolaadadn kl a dfsaf sdfvsdfvwerf qwefjhasdbcf jkfcajcasdf sfgv.",
  },
  {
    name: "Moniruzzaman",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    description:
      "Experienced in MERN stack, TypeScript, Prisma, PostgreSQL, and building scalable applications.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://placehold.co/140x140",
    description:
      "Designs intuitive, user-friendly interfaces and focuses on accessibility & modern design trends.",
  },
  {
    name: "Asifur Rahman",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Scadjscn jk nd ojifeo naqf fd a dkacolaadadn kl a dfsaf sdfvsdfvwerf qwefjhasdbcf jkfcajcasdf sfgv.",
  },
  {
    name: "Moniruzzaman",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    description:
      "Experienced in MERN stack, TypeScript, Prisma, PostgreSQL, and building scalable applications.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://placehold.co/140x140",
    description:
      "Designs intuitive, user-friendly interfaces and focuses on accessibility & modern design trends.",
  },
  {
    name: "Asifur Rahman",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Scadjscn jk nd ojifeo naqf fd a dkacolaadadn kl a dfsaf sdfvsdfvwerf qwefjhasdbcf jkfcajcasdf sfgv.",
  },
  {
    name: "Moniruzzaman",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    description:
      "Experienced in MERN stack, TypeScript, Prisma, PostgreSQL, and building scalable applications.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://placehold.co/140x140",
    description:
      "Designs intuitive, user-friendly interfaces and focuses on accessibility & modern design trends.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://placehold.co/140x140",
    description:
      "Designs intuitive, user-friendly interfaces and focuses on accessibility & modern design trends.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://placehold.co/140x140",
    description:
      "Designs intuitive, user-friendly interfaces and focuses on accessibility & modern design trends.",
  },
];

const TeamSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full mx-auto py-12 ">
      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={4}
        spaceBetween={40}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 50 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {teamMembers.map((member, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index ===
            (activeIndex - 1 + teamMembers.length) % teamMembers.length;
          const isNext = index === (activeIndex + 1) % teamMembers.length;

          let scale = 0.8;
          if (isActive) scale = 1.0;
          else if (isPrev || isNext) scale = 0.9;

          return (
            <SwiperSlide key={index} className="flex justify-center pb-5">
              <motion.div
                style={{ scale }}
                className={`w-80 relative mx-auto flex flex-col justify-start items-center gap-6 transition-all duration-500  rounded-[20px] shadow-lg`}
              >
                {/* Top Blue Background */}
                <div
                  className={`w-80 h-44 ${
                    isActive
                      ? "bg-blue-600 relative rounded-bl-[100px]  rounded-br-[100px] border"
                      : ""
                  }  overflow-hidden`}
                ></div>

                {/* Background Image + Avatar */}
                <div className="w-80 -mt-34 relative mx-auto flex flex-col justify-start items-center gap-4">
                  <div className="w-80 h-44 relative overflow-hidden">
                    <Image
                      src={backpGroundImage}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Avatar */}
                  <img
                    className="w-28 h-28 relative -mt-38 rounded-full border-[5px] border-blue-600 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                {/* Content */}
                <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex flex-col justify-start items-center gap-8">
                    <div className="px-6 pb-6">
                      <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold font-raleway text-gray-800">
                          {member.name}
                        </h1>
                        <p className="text-xl font-semibold text-blue-600 mt-1">
                          {member.role}
                        </p>

                        <div className="flex justify-center items-center space-x-1 mt-4">
                          <div className="w-14 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
                          <div className="w-5 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
                        </div>
                      </div>

                      <div className="self-stretch text-center text-black text-lg font-normal font-['Lato'] leading-tight">
                        {member.description}
                      </div>

                      {/* Social Icons */}
                      {/* Social Icons */}
                      <div className="flex justify-center py-5 space-x-4">
                        {/* Twitter */}
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.07 9.07 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.8 12.8 0 013 2.89a4.52 4.52 0 001.4 6.03 4.51 4.51 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.23 3.14A9.05 9.05 0 012 19.54a12.77 12.77 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.01-.63A9.18 9.18 0 0023 3z" />
                          </svg>
                        </div>

                        {/* GitHub */}
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                        </div>

                        {/* LinkedIn */}
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                          </svg>
                        </div>

                        {/* Dribbble */}
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.6 4.61a8.5 8.5 0 011.93 5.31c-.28-.05-3.1-.63-5.94-.27-.07-.14-.12-.29-.18-.44a25.4 25.4 0 00-.56-1.23c3.14-1.28 4.57-3.12 4.76-3.36zM12 3.48c2.17 0 4.15.81 5.66 2.15-.15.22-1.44 1.94-4.48 3.08-1.4-2.57-2.95-4.68-3.19-5A8.69 8.69 0 0112 3.48z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
