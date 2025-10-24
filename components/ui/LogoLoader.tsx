// "use client";

// export function LogoLoader() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-transparent">
//       <svg
//         className="h-16 w-16 md:h-24 md:w-24"
//         viewBox="0 0 1152 1152"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <style>{`
//             @keyframes bounce {
//               0%, 100% {
//                 transform: translateY(0);
//               }
//               50% {
//                 transform: translateY(-20px);
//               }
//             }

//             @keyframes slideDown {
//               0% {
//                 transform: translateY(0);
//                 opacity: 1;
//               }
//               50% {
//                 transform: translateY(-140px);
//                 opacity: 1;
//               }
//               100% {
//                 transform: translateY(0);
//                 opacity: 1;
//               }
//             }

//             @keyframes slideUp {
//               0% {
//                 transform: translateY(0);
//                 opacity: 1;
//               }
//               50% {
//                 transform: translateY(140px);
//                 opacity: 1;
//               }
//               100% {
//                 transform: translateY(0);
//                 opacity: 1;
//               }
//             }

//             .bounce-circle-1 {
//               animation: bounce 1.5s ease-in-out infinite;
//               animation-delay: 0s;
//             }

//             .bounce-circle-2 {
//               animation: bounce 1.5s ease-in-out infinite;
//               animation-delay: 0.2s;
//             }

//             .bounce-circle-3 {
//               animation: bounce 1.5s ease-in-out infinite;
//               animation-delay: 0.4s;
//             }

//             .slide-dot-1 {
//               animation: slideDown 2s ease-in-out infinite;
//               animation-delay: 0s;
//             }

//             .slide-dot-2 {
//               animation: slideUp 2s ease-in-out infinite;
//               animation-delay: 0s;
//             }

//             .st0 {
//               fill: none;
//               stroke: #106CD8;
//               stroke-miterlimit: 10;
//               stroke-width: 2px;
//             }

//             .st1 {
//               fill: #106CD8;
//             }
//           `}</style>
//         </defs>

//         {/* M Shape - Static */}
//         <path
//           className="st1"
//           d="M625.6,482.1c-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5-3.7-13.3-9.6-25.8-17.2-37,0,0,0-.1-.1-.2h0c-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8-.4-.4-.8-.8-1.2-1.3-4.9-5.1-10.2-9.8-15.9-14-20.9-15.5-46.9-24.8-75-24.8h-40.2c-68.9,0-124.7,55.8-124.7,124.7v213.9l101.7-101.7v-107.7c0-19.6,15.9-35.4,35.4-35.4h11c22.7,0,41.2,18.4,41.2,41.2v202.8l101.5-101.5v-110.4c0-.4,0-.9,0-1.3h0ZM603.5,588.1l-57.1,57.1v-147.2c0-17.8-6.8-34.1-18.1-46.3-12.5-13.6-30.4-22.1-50.3-22.1s-33.6,7.2-45.1,18.7c-11.5,11.6-18.7,27.5-18.7,45.1v95.6l-57.1,57.1v-167.4c0-54.9,44.5-99.5,99.5-99.5h51.7c19.2,0,37.1,5.7,52.1,15.5,5.8,3.8,11.2,8.2,16,13.2,16.7,17.1,27.1,40.6,27.1,66.5v113.7h0Z"
//         />
//         <path
//           className="st1"
//           d="M816,482.9v110.4l-101.5,101.5v-202.8c0-6.7-1.6-13.1-4.5-18.7-6.8-13.3-20.7-22.5-36.7-22.5h-11c-15.8,0-31.9,16.1-36.8,31.2-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5.9-.6,2-1.3,2.4-1.6,11.5-11.5,27.5-18.7,45.1-18.7s44.4,12,56.7,30.2c4,5.9,7.1,12.4,9.1,19.5,1.7,6,2.6,12.2,2.6,18.7v147.2l57.1-57.1v-113.7c0-14.9-3.4-29.1-9.6-41.6-3-6.3-6.8-12.2-11.1-17.6-17.4-21.9-44.3-35.9-74.5-35.9h-10.6c-6.3-.4-12.2-.4-17.6,0-46.1,3-64.8,30.2-66.9,33.6-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8,0,0,.2-.2.2-.2.6-1.1,1.2-2.1,1.8-3.2,21.5-34.3,91.5-37.2,91.5-37.2h5c38.8,0,73.5,17.6,96.6,45.1,4.4,5.3,8.4,10.9,11.9,16.9,11.1,18.7,17.4,40.5,17.4,63.9h0Z"
//         />
//         <path
//           className="st1"
//           d="M428.1,453.7c-8.3,10.3-13.4,23.3-13.9,37.4l-57.1,50.7v-25l71.1-63.1h0Z"
//         />
//         <path
//           className="st1"
//           d="M784.4,432.3l-50.2,46.5c-2-7-5.1-13.6-9.1-19.5l48.1-44.6c4.3,5.4,8.1,11.3,11.1,17.6Z"
//         />

//         {/* Top 3 Circles - Bouncing Animation */}
//         <circle className="st1 bounce-circle-1" cx="441.7" cy="276.9" r="36" />
//         <circle className="st1 bounce-circle-2" cx="576.4" cy="276.9" r="36" />
//         <circle className="st1 bounce-circle-3" cx="711" cy="276.9" r="36" />

//         {/* Vertical Lines - Static */}
//         <line className="st0" x1="477.1" y1="497.8" x2="477.1" y2="646.1" />
//         <line className="st0" x1="672.2" y1="497.8" x2="672.2" y2="646.1" />

//         {/* Bottom Dots - Sliding Down Animation */}
//         <circle className="st1 slide-dot-1" cx="477.1" cy="655.9" r="9.8" />
//         <circle className="st1 slide-dot-2" cx="672.2" cy="497.8" r="9.8" />
//       </svg>
//     </div>
//   );
// }

// TODO:with gradient

// "use client";

// import React from "react";

// interface LogoLoaderProps {
//   customClass?: string; // made optional for flexibility
//   logoColor?: string;
// }

// export const LogoLoader: React.FC<LogoLoaderProps> = ({
//   customClass = "h-16 w-16 md:h-24 md:w-24",
//   logoColor = "#106CD8",
// }) => {
//   console.log(logoColor, "locor");
//   return (
//     <div className="flex m-0 p-0 items-center justify-center bg-transparent">
//       <svg
//         // className={customClass}
//         viewBox="300 220 550 500"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-16 w-16"
//       >
//         <defs>
//           {/* Gradient for smooth color rendering */}
//           <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="100%" stopColor={logoColor} />
//           </linearGradient>

//           {/* Animations */}
//           <style>{`
//             @keyframes bounce {
//               0%, 100% { transform: translateY(0); }
//               50% { transform: translateY(-20px); }
//             }

//             @keyframes slideDown {
//               0% { transform: translateY(0); opacity: 1; }
//               50% { transform: translateY(-140px); opacity: 1; }
//               100% { transform: translateY(0); opacity: 1; }
//             }

//             @keyframes slideUp {
//               0% { transform: translateY(0); opacity: 1; }
//               50% { transform: translateY(140px); opacity: 1; }
//               100% { transform: translateY(0); opacity: 1; }
//             }

//             .bounce-circle-1 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0s; }
//             .bounce-circle-2 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0.2s; }
//             .bounce-circle-3 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0.4s; }
//             .slide-dot-1 { animation: slideDown 2s ease-in-out infinite; }
//             .slide-dot-2 { animation: slideUp 2s ease-in-out infinite; }

//             .st0 {
//               /* fill: url(#blueGradient); */
//               /* stroke: url(#blueGradient); */
//               fill: none;
//               stroke:${logoColor};
//               stroke-miterlimit: 10;
//               stroke-width: 4px;
//             }

//             .st1 { fill: ${logoColor};  }
//           `}</style>
//         </defs>

//         {/* ---- MAIN LOGO SHAPE ---- */}
//         <path
//           className="st1"
//           d="M625.6,482.1c-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5-3.7-13.3-9.6-25.8-17.2-37,0,0,0-.1-.1-.2h0c-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8-.4-.4-.8-.8-1.2-1.3-4.9-5.1-10.2-9.8-15.9-14-20.9-15.5-46.9-24.8-75-24.8h-40.2c-68.9,0-124.7,55.8-124.7,124.7v213.9l101.7-101.7v-107.7c0-19.6,15.9-35.4,35.4-35.4h11c22.7,0,41.2,18.4,41.2,41.2v202.8l101.5-101.5v-110.4c0-.4,0-.9,0-1.3h0ZM603.5,588.1l-57.1,57.1v-147.2c0-17.8-6.8-34.1-18.1-46.3-12.5-13.6-30.4-22.1-50.3-22.1s-33.6,7.2-45.1,18.7c-11.5,11.6-18.7,27.5-18.7,45.1v95.6l-57.1,57.1v-167.4c0-54.9,44.5-99.5,99.5-99.5h51.7c19.2,0,37.1,5.7,52.1,15.5,5.8,3.8,11.2,8.2,16,13.2,16.7,17.1,27.1,40.6,27.1,66.5v113.7h0Z"
//         />
//         <path
//           className="st1"
//           d="M816,482.9v110.4l-101.5,101.5v-202.8c0-6.7-1.6-13.1-4.5-18.7-6.8-13.3-20.7-22.5-36.7-22.5h-11c-15.8,0-31.9,16.1-36.8,31.2-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5.9-.6,2-1.3,2.4-1.6,11.5-11.5,27.5-18.7,45.1-18.7s44.4,12,56.7,30.2c4,5.9,7.1,12.4,9.1,19.5,1.7,6,2.6,12.2,2.6,18.7v147.2l57.1-57.1v-113.7c0-14.9-3.4-29.1-9.6-41.6-3-6.3-6.8-12.2-11.1-17.6-17.4-21.9-44.3-35.9-74.5-35.9h-10.6c-6.3-.4-12.2-.4-17.6,0-46.1,3-64.8,30.2-66.9,33.6-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8,0,0,.2-.2.2-.2.6-1.1,1.2-2.1,1.8-3.2,21.5-34.3,91.5-37.2,91.5-37.2h5c38.8,0,73.5,17.6,96.6,45.1,4.4,5.3,8.4,10.9,11.9,16.9,11.1,18.7,17.4,40.5,17.4,63.9h0Z"
//         />
//         <path
//           className="st1"
//           d="M428.1,453.7c-8.3,10.3-13.4,23.3-13.9,37.4l-57.1,50.7v-25l71.1-63.1h0Z"
//         />
//         <path
//           className="st1"
//           d="M784.4,432.3l-50.2,46.5c-2-7-5.1-13.6-9.1-19.5l48.1-44.6c4.3,5.4,8.1,11.3,11.1,17.6Z"
//         />

//         {/* ---- BOUNCING DOTS ---- */}
//         <circle className="st1 bounce-circle-1" cx="441.7" cy="276.9" r="36" />
//         <circle className="st1 bounce-circle-2" cx="576.4" cy="276.9" r="36" />
//         <circle className="st1 bounce-circle-3" cx="711" cy="276.9" r="36" />

//         {/* ---- CONNECTING LINES ---- */}
//         <line className="st0" x1="477.1" y1="497.8" x2="477.1" y2="646.1" />
//         <line className="st0" x1="672.2" y1="497.8" x2="672.2" y2="646.1" />

//         {/* ---- SLIDING DOTS ---- */}
//         <circle className="st1 slide-dot-1" cx="477.1" cy="655.9" r="9.8" />
//         <circle className="st1 slide-dot-2" cx="672.2" cy="497.8" r="9.8" />
//       </svg>
//     </div>
//   );
// };

// LogoLoader.tsx - Updated Code

import React from "react";

interface LogoLoaderProps {
  customClass?: string;
  logoColor?: string;
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({
  customClass = "h-10 w-10 md:h-14 md:w-14",
  logoColor = "#106CD8", // Default color
}) => {
  return (
    <div className="bg-transparent">
      <svg
        // Use the customClass prop on the SVG element
        className={customClass}
        viewBox="300 220 550 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* REMOVED the <style> block and the global .st0/.st1 definitions.
            We keep the keyframe animations if they are still required: 
          */}
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }

            @keyframes slideDown {
              0% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(-140px); opacity: 1; }
              100% { transform: translateY(0); opacity: 1; }
            }

            @keyframes slideUp {
              0% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(140px); opacity: 1; }
              100% { transform: translateY(0); opacity: 1; }
            }

            .bounce-circle-1 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0s; }
            .bounce-circle-2 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0.2s; }
            .bounce-circle-3 { animation: bounce 1.5s ease-in-out infinite; animation-delay: 0.4s; }
            .slide-dot-1 { animation: slideDown 2s ease-in-out infinite; }
            .slide-dot-2 { animation: slideUp 2s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ---- MAIN LOGO SHAPE (Paths and Circles need fill) ---- */}
        <path
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          d="M625.6,482.1c-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5-3.7-13.3-9.6-25.8-17.2-37,0,0,0-.1-.1-.2h0c-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8-.4-.4-.8-.8-1.2-1.3-4.9-5.1-10.2-9.8-15.9-14-20.9-15.5-46.9-24.8-75-24.8h-40.2c-68.9,0-124.7,55.8-124.7,124.7v213.9l101.7-101.7v-107.7c0-19.6,15.9-35.4,35.4-35.4h11c22.7,0,41.2,18.4,41.2,41.2v202.8l101.5-101.5v-110.4c0-.4,0-.9,0-1.3h0ZM603.5,588.1l-57.1,57.1v-147.2c0-17.8-6.8-34.1-18.1-46.3-12.5-13.6-30.4-22.1-50.3-22.1s-33.6,7.2-45.1,18.7c-11.5,11.6-18.7,27.5-18.7,45.1v95.6l-57.1,57.1v-167.4c0-54.9,44.5-99.5,99.5-99.5h51.7c19.2,0,37.1,5.7,52.1,15.5,5.8,3.8,11.2,8.2,16,13.2,16.7,17.1,27.1,40.6,27.1,66.5v113.7h0Z"
        />
        <path
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          d="M816,482.9v110.4l-101.5,101.5v-202.8c0-6.7-1.6-13.1-4.5-18.7-6.8-13.3-20.7-22.5-36.7-22.5h-11c-15.8,0-31.9,16.1-36.8,31.2-.1-11.1-1.7-21.9-4.5-32.1,0-.2,0-.3-.1-.5.9-.6,2-1.3,2.4-1.6,11.5-11.5,27.5-18.7,45.1-18.7s44.4,12,56.7,30.2c4,5.9,7.1,12.4,9.1,19.5,1.7,6,2.6,12.2,2.6,18.7v147.2l57.1-57.1v-113.7c0-14.9-3.4-29.1-9.6-41.6-3-6.3-6.8-12.2-11.1-17.6-17.4-21.9-44.3-35.9-74.5-35.9h-10.6c-6.3-.4-12.2-.4-17.6,0-46.1,3-64.8,30.2-66.9,33.6-3.1-4.6-6.5-8.9-10.3-13-.5-.6-1-1.2-1.6-1.8,0,0,.2-.2.2-.2.6-1.1,1.2-2.1,1.8-3.2,21.5-34.3,91.5-37.2,91.5-37.2h5c38.8,0,73.5,17.6,96.6,45.1,4.4,5.3,8.4,10.9,11.9,16.9,11.1,18.7,17.4,40.5,17.4,63.9h0Z"
        />
        <path
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          d="M428.1,453.7c-8.3,10.3-13.4,23.3-13.9,37.4l-57.1,50.7v-25l71.1-63.1h0Z"
        />
        <path
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          d="M784.4,432.3l-50.2,46.5c-2-7-5.1-13.6-9.1-19.5l48.1-44.6c4.3,5.4,8.1,11.3,11.1,17.6Z"
        />

        {/* ---- BOUNCING DOTS ---- */}
        <circle
          className="bounce-circle-1"
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          cx="441.7"
          cy="276.9"
          r="36"
        />
        <circle
          className="bounce-circle-2"
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          cx="576.4"
          cy="276.9"
          r="36"
        />
        <circle
          className="bounce-circle-3"
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          cx="711"
          cy="276.9"
          r="36"
        />

        {/* ---- CONNECTING LINES (Need stroke) ---- */}
        <line
          style={{ stroke: logoColor }} // <-- FIX: Apply color inline
          strokeMiterlimit="10"
          strokeWidth="4px"
          fill="none"
          x1="477.1"
          y1="497.8"
          x2="477.1"
          y2="646.1"
        />
        <line
          style={{ stroke: logoColor }} // <-- FIX: Apply color inline
          strokeMiterlimit="10"
          strokeWidth="4px"
          fill="none"
          x1="672.2"
          y1="497.8"
          x2="672.2"
          y2="646.1"
        />

        {/* ---- SLIDING DOTS ---- */}
        <circle
          className="slide-dot-1"
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          cx="477.1"
          cy="655.9"
          r="9.8"
        />
        <circle
          className="slide-dot-2"
          style={{ fill: logoColor }} // <-- FIX: Apply color inline
          cx="672.2"
          cy="497.8"
          r="9.8"
        />
      </svg>
    </div>
  );
};
