"use client";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayOpacity?: number; // Optional opacity (default 0.5)
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle = "",
  backgroundImage,
  overlayOpacity = 0.5,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-[400px] overflow-hidden"
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center">
        <h1
          className="text-white text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-white text-2xl mt-4"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
