"use client";

import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

interface ArticleVideoSectionProps {
  title: string;
  description: string;
  videoUrl: string;
}

export default function CareerArticleVideoSection({
  title,
  description,
  videoUrl,
}: ArticleVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOverlayButton, setShowOverlayButton] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setIsPlaying(true);
    setShowOverlayButton(false);
  };

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

  return (
    <div className="w-full max-w-[1140px] mx-auto flex flex-col lg:flex-row justify-between items-center  gap-8 mt-40">
      {/* Article Column */}
      <div className="w-full lg:w-[569px] flex flex-col gap-6">
        <SectionTitle title={title} textAlign="left" />
        <p className="text-zinc-800 text-lg font-normal font-['Lato'] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Video Column */}
      <div className="w-full lg:w-[522px] relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Circular Play Button Overlay */}
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
    </div>
  );
}
