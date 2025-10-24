interface ServicBannerProps {
  videoUrl: string;
  title: string;
  subtitle: string;
}

export default function ServicBanner({
  videoUrl,
  title,
  subtitle,
}: ServicBannerProps) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold font-['Roboto_Condensed'] mb-2">
          {title}
        </h1>
        <div className="flex gap-2 text-2xl font-['Raleway']">
          {subtitle.split("/").map((text, index) => (
            <span
              key={index}
              className={`${
                index === 1
                  ? "font-bold font-['Roboto_Condensed']"
                  : "font-normal"
              }`}
            >
              {text.trim()}
              {index === 0 && " /"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
