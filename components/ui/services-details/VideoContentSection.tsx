"use client";

import React, { useRef, useState, useEffect } from "react";

import { BadgeCheck, Play } from "lucide-react";

interface Props {
  servicesData: any[];
  initialCategory?: string;
}

const VideoContentSection: React.FC<Props> = ({
  servicesData,
  initialCategory,
}) => {
  // const activeCategory = useAppSelector(
  //   (state) => state.service.activeCategory
  // );

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOverlayButton, setShowOverlayButton] = useState(false);

  const selectedCategory = initialCategory || servicesData[0]?.category;
  const selectedService = servicesData.find(
    (service) => service.category === selectedCategory
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlayButton(true);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  if (!selectedService) {
    return (
      <p className="text-gray-600">No video available for this service.</p>
    );
  }

  const coreText = selectedService.coreText;

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlayButton(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-16 py-16 bg-white">
      {/* Left Side - Video */}
      <div className="w-full lg:w-1/2 relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          playsInline
        >
          <source src={coreText.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Circular Play Button */}
        {showOverlayButton && !isPlaying && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={handlePlay}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] shadow-lg hover:scale-110 transition-transform"
            >
              <Play size={40} className="text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 mt-8 lg:mt-0 text-left px-2 sm:px-4">
        {/* Title */}
        <div className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold font-['Raleway'] leading-snug">
          {coreText.title}
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {coreText.features.map((feature: string, index: number) => (
            <div
              key={index}
              className="inline-flex justify-start items-center gap-2"
            >
              <div className="w-8 h-8 relative flex-shrink-0">
                <BadgeCheck className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600/90 text-white rounded-full left-[3.20px] top-[3.20px] absolute" />
                {/* <div className="w-6 h-6 left-[3.20px] top-[3.20px] absolute  rounded-full" /> */}
              </div>
              <div className="text-sky-950 text-base sm:text-lg md:text-2xl font-normal font-['Lato'] leading-relaxed">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContentSection;
