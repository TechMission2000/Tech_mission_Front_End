import React from "react";

interface TechMissionLogoProps {
  className?: string; // allow custom Tailwind size and color
  fillColor?: string;
  parentClassName?: string;
  textClassName?: string; // optional prop for custom color (fallback: currentColor)
}

const TechMissionLogo: React.FC<TechMissionLogoProps> = ({
  parentClassName = "", // default size and color
  fillColor = "currentColor",
  textClassName = "", // default color controlled by text color
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -12 437.98 80"
      className={parentClassName}
    >
      <text
        transform="translate(0 65.41) scale(1.04 1)"
        className={textClassName}
        style={{
          fontFamily: "BellMT, 'Bell MT'",

          //   fontSize: "79.97px",
          //   fill: fillColor,
        }}
      >
        TechMission
      </text>
    </svg>
  );
};

export default TechMissionLogo;
