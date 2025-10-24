import React from "react";
import { SectionTitle } from "../ui/careers/SectionTitle";

// --- Icon Components ---
const VisionIcon = () => (
  <svg
    width="36"
    height="32"
    viewBox="0 0 36 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 0L35.3205 24H0.679491L18 0Z"
      fill="url(#paint0_linear_vision)"
    />
    <path
      d="M18 32L35.3205 8H0.679491L18 32Z"
      fill="url(#paint1_linear_vision)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_vision"
        x1="18"
        y1="0"
        x2="18"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1963B9" />
        <stop offset="1" stopColor="#0B2C53" stopOpacity="0.97" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_vision"
        x1="18"
        y1="8"
        x2="18"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1963B9" />
        <stop offset="1" stopColor="#0B2C53" stopOpacity="0.97" />
      </linearGradient>
    </defs>
  </svg>
);

const GoalsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="4" fill="url(#paint0_linear_goals)" />
    <circle
      cx="24"
      cy="24"
      r="8.44"
      fill="white"
      stroke="url(#paint1_linear_goals)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_goals"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1963B9" />
        <stop offset="1" stopColor="#0B2C53" stopOpacity="0.97" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_goals"
        x1="24"
        y1="14"
        x2="24"
        y2="34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1963B9" />
        <stop offset="1" stopColor="#0B2C53" stopOpacity="0.97" />
      </linearGradient>
    </defs>
  </svg>
);

const MissionsIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 0L29.2279 12.7721L42 21L29.2279 29.2279L21 42L12.7721 29.2279L0 21L12.7721 12.7721L21 0Z"
      fill="url(#paint0_linear_missions)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_missions"
        x1="21"
        y1="0"
        x2="21"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1963B9" />
        <stop offset="1" stopColor="#0B2C53" stopOpacity="0.97" />
      </linearGradient>
    </defs>
  </svg>
);

export default function OurMission() {
  return (
    <div
      style={{
        backgroundImage: `url(/ourmission.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="font-raleway overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">
            {/* <h2 className="text-5xl md:text-6xl text-[#16192C] font-normal my-3">Our Mission</h2> */}
            <SectionTitle
              title="Our Mission"
              textAlign="center"
              className=" mx-0 md:mb-20 mb-10"
              titleClassName="text-5xl md:text-6xl"
            />

            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:translate-x-20">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#16192C] rounded-lg flex items-center justify-center -rotate-45">
                  <div className="rotate-45">
                    <VisionIcon />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl text-[#1963B9]">Vision</h3>
                  <p className="mt-2 text-[#0D1C17] text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                    At Tech-Mission, we deliver innovative technology solutions
                    that uphold Islamic values of fairness, transparency, and
                    social responsibility. We aim to drive positive change
                    through sustainability and continuous learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:-translate-x-10">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#16192C] rounded-lg flex items-center justify-center -rotate-45">
                  <div className="rotate-45">
                    <GoalsIcon />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl text-[#1963B9]">Goals</h3>
                  <p className="mt-2 text-[#0D1C17] text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                    To deliver cutting-edge technology solutions that drive
                    business growth and innovation, while ensuring ethical
                    practices and long-term sustainability. We aim to empower
                    businesses through transformative technology that creates
                    lasting impact.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:translate-x-20">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#16192C] rounded-lg flex items-center justify-center -rotate-45">
                  <div className="rotate-45">
                    <MissionsIcon />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl text-[#1963B9]">Missions</h3>
                  <p className="mt-2 text-[#0D1C17] text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                    We aspire to be a leading global tech partner, recognized
                    for our commitment to ethical practices, sustainability, and
                    innovation, setting new standards for excellence and
                    responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-1/2 h-[720px] relative mt-12 lg:mt-0">
            <img
              src="/ourmissionsideimg.png"
              alt="Our Mission"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
