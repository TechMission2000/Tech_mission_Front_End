import { Search, Lightbulb, Volume2 } from "lucide-react";

export default function LatestPostUpdates() {
  return (
    <div className="relative w-full min-h-[400px] mb-12 bg-white overflow-hidden flex items-center justify-center py-16">
      {/* Decorative Elements */}
      {/* Top left large rotated rectangle */}
      <div className="absolute -top-10 -left-32 w-96 h-80 rotate-[35deg] border border-blue-400/50 rounded-2xl hidden md:block" />

      {/* Bottom right large rotated rectangle */}
      <div className="absolute -bottom-20 -right-32 w-96 h-80 rotate-[35deg] border border-blue-400/50 rounded-2xl hidden md:block" />

      <div className="absolute top-16 right-16 hidden md:block">
        <div className="relative">
          <Lightbulb className="w-8 h-8 text-blue-500 fill-blue-100" />
          {/* Light rays around bulb */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-60" />
          <div className="absolute -top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-40" />
          <div className="absolute top-1 -right-2 w-1 h-1 bg-blue-400 rounded-full opacity-40" />
        </div>
      </div>

      <div className="absolute bottom-20 left-16 hidden md:block">
        <Volume2 className="w-8 h-8 text-orange-500 fill-orange-100 rotate-12" />
      </div>

      <div className="absolute top-20 left-8 hidden md:block">
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          className="text-blue-300"
        >
          <path
            d="M10 10 Q 40 60 70 110"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Curved flowing line - top left area */}
      <div className="absolute top-24 left-12 hidden md:block">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          className="text-blue-300"
        >
          <path
            d="M20 20 Q 60 10 100 30 Q 80 50 60 70 Q 40 80 20 60"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Oval curved element - top right area */}
      <div className="absolute top-40 right-32 hidden md:block">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          className="text-blue-300"
        >
          <ellipse
            cx="40"
            cy="30"
            rx="35"
            ry="25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Flowing S-curve - bottom area */}
      <div className="absolute bottom-40 right-16 hidden md:block">
        <svg
          width="140"
          height="80"
          viewBox="0 0 140 80"
          className="text-blue-300"
        >
          <path
            d="M10 60 Q 40 20 70 40 Q 100 60 130 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="absolute top-32 left-4 w-16 h-16 border border-blue-300/40 rounded-full hidden md:block" />
      <div className="absolute bottom-32 right-8 w-24 h-24 border border-blue-300/30 rounded-full hidden md:block" />

      <div className="absolute bottom-16 right-20 hidden md:block">
        <svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          className="text-blue-300"
        >
          <path
            d="M90 10 Q 50 40 10 70"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12 max-w-md mx-auto px-4 z-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold leading-10">
            <span className="text-black font-[family-name:var(--font-raleway)]">
              Latest Post
            </span>
            <br />
            <span className="text-sky-700 font-[family-name:var(--font-raleway)]">
              Updates
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-neutral-500 text-xl font-medium font-[family-name:var(--font-poppins)] leading-9">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-sm relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 bg-neutral-200 rounded-[10px] pl-10 pr-4 text-zinc-500 text-base font-normal font-[family-name:var(--font-poppins)] leading-loose focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-blue-500/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
