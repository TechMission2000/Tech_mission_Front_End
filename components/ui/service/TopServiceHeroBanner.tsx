// "use client";
// import { useRouter } from "next/navigation";
// import CustomButton from "../CustomButton";

// interface TopServiceHeroBannerProps {
//   title: string;
//   description: string;
//   buttonText?: string;
//   imageUrl: string;
//   backgroundColor?: string;
//   category?: string;
//   reverse?: boolean;
//   // if true, image left, text right (desktop only)
// }

// const TopServiceHeroBanner: React.FC<TopServiceHeroBannerProps> = ({
//   title,
//   category,
//   description,
//   buttonText = "Read More",
//   imageUrl,
//   backgroundColor = "bg-white",
//   reverse = false,
// }) => {
//   const router = useRouter();
//   const handleClick = (category: string) => {
//     router.push(`/services-details?category=${encodeURIComponent(category)}`);
//   };
//   return (
//     <div className={`w-full py-10 ${backgroundColor}`}>
//       <div
//         className={`max-w-[1140px]  flex flex-col md:flex-row items-center gap-8 ${
//           reverse ? "md:flex-row-reverse mx-auto" : "justify-between"
//         }`}
//       >
//         {/* Image - show first on mobile */}
//         <div className="flex-1 flex justify-center md:justify-end order-1 md:order-none">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain"
//           />
//         </div>

//         {/* Text Content - always left aligned */}
//         <div className="flex-1 flex flex-col gap-6 text-left order-2 md:order-none">
//           <h2 className="text-blue-600 text-3xl md:text-4xl font-['Roboto_Condensed'] font-medium leading-tight">
//             {title}
//           </h2>
//           <p className="text-zinc-800 text-lg sm:text-2xl font-['Lato'] leading-relaxed">
//             {description}
//           </p>
//           <div>
//             <CustomButton
//               variant="primary"
//               onClick={() => {
//                 handleClick(category || title);
//               }}
//             >
//               {buttonText}
//             </CustomButton>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopServiceHeroBanner;

"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component
import CustomButton from "../CustomButton";

interface TopServiceHeroBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  backgroundColor?: string;
  category?: string;
  reverse?: boolean;
}

const TopServiceHeroBanner: React.FC<TopServiceHeroBannerProps> = ({
  title,
  category,
  description,
  buttonText = "Read More",
  imageUrl,
  backgroundColor = "bg-white",
  reverse = false,
}) => {
  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/services-details?category=${encodeURIComponent(category)}`);
  };

  return (
    // Increased vertical padding (py-12 md:py-20) for better spacing
    <div className={`w-full  ${backgroundColor}`}>
      <div
        className={`max-w-[1140px] mx-auto  flex flex-col md:flex-row items-center justify-between gap-12 md:gap-28 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={500} // Base width for optimization
            height={400} // Base height to maintain aspect ratio
            className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain drop-shadow-sm"
            priority={false} // Set to true if this is the very top banner
          />
        </div>

        {/* Text Content Section */}
        <div className="flex-1 flex flex-col gap-6 text-left items-start w-full">
          <h2 className="text-blue-600 text-3xl md:text-4xl font-['Roboto_Condensed'] font-medium leading-tight">
            {title}
          </h2>
          <p className="text-zinc-800 text-lg sm:text-xl font-['Lato'] leading-relaxed">
            {description}
          </p>
          <div>
            <CustomButton
              variant="primary"
              onClick={() => {
                handleClick(category || title);
              }}
            >
              {buttonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServiceHeroBanner;
