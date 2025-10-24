// import { cn } from "@/lib/utils";
// import { Sparkles } from "lucide-react";
// import Image from "next/image";
// import star from "../../../public/service/Star 1.svg";
// interface SectionTitleProps {
//   title: string;
//   className?: string;
//   textAlign?: "left" | "center" | "right";
// }

// export function SectionTitle({
//   title,
//   className,
//   textAlign = "center",
// }: SectionTitleProps) {
//   const textAlignClass = {
//     left: "text-left",
//     center: "text-center",
//     right: "text-right",
//   }[textAlign];

//   return (
//     <div
//       className={cn(
//         "relative w-96  flex  items-center  py-4 px-4", // reduced py-8 to py-4
//         className
//       )}
//     >
//       {/* Top-left decorative line */}
//       <div className="absolute -top-1 left-0 inline-flex items-center gap-2">
//         {" "}
//         {/* changed top-0 to -top-1 */}
//         <div className="w-20 h-0 outline-[3px] outline-offset-[-1.50px] outline-neutral-800"></div>
//         <div className="flex items-center gap-1">
//           <div
//             className="w-3.5 h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95" // reduced size
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           />
//           <Image src={star} alt="Star Icon" width={28} height={28} />
//           {/* <div
//             className="w-2.5 h-2.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           /> */}
//           <div
//             className="w-3.5 h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           />
//           <div className="w-20 h-0 outline-[3px] outline-offset-[-1.50px] outline-neutral-800"></div>
//         </div>
//       </div>

//       {/* Title text */}
//       <h2
//         className={cn(
//           "text-gray-900 my-8 text-xl w-full font-semibold font-sans",
//           textAlignClass
//         )}
//       >
//         {title}
//       </h2>

//       {/* Bottom-right decorative line */}
//       <div className="absolute -bottom-1 right-0 inline-flex items-center gap-2">
//         {" "}
//         <div className="w-20 h-0 outline-[3px] outline-offset-[-1.50px] outline-neutral-800"></div>
//         <div className="flex items-center gap-1">
//           <div
//             className="w-3.5 h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           />
//           <Image src={star} alt="Star Icon" width={28} height={28} />
//           {/* <div
//             className="w-2.5 h-2.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           /> */}
//           <div
//             className="w-3.5 h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
//             style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
//           />
//         </div>
//         <div className="w-20 h-0 outline-[3px] outline-offset-[-1.50px] outline-neutral-800"></div>
//       </div>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import Image from "next/image";
import star from "../../../public/service/Star 1.svg";

interface SectionTitleProps {
  title: string;
  className?: string;
  textAlign?: "left" | "center" | "right";
  titleClassName?: string;
}

export function SectionTitle({
  title,
  className,
  textAlign = "center",
  titleClassName,
}: SectionTitleProps) {
  const textAlignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlign];

  return (
    <div
      className={cn(
        "relative w-full max-w-md sm:max-w-xl mx-auto flex items-center py-4  lg:px-0 px-4",
        className
      )}
    >
      {/* Top-left decorative line */}
      <div className="absolute -top-1 left-0 inline-flex items-center gap-1 sm:gap-2">
        <div className="w-12 sm:w-20 h-0 outline-[2px] sm:outline-[3px] outline-offset-[-1.5px] outline-neutral-800"></div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <Image
            src={star}
            alt="Star Icon"
            width={20}
            height={20}
            className="sm:w-7 sm:h-7"
          />
          <div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div className="w-12 sm:w-20 h-0 outline-[2px] sm:outline-[3px] outline-offset-[-1.5px] outline-neutral-800"></div>
        </div>
      </div>

      {/* Title text */}
      <h2
        className={cn(
          // "text-gray-900 my-6 sm:my-8 text-lg sm:text-xl lg:text-2xl w-full font-semibold font-sans",
          "text-gray-900 my-6 sm:my-8  w-full font-semibold font-sans",
          textAlignClass,
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Bottom-right decorative line */}
      <div className="absolute -bottom-1 right-0 inline-flex items-center gap-1 sm:gap-2">
        <div className="w-12 sm:w-20 h-0 outline-[2px] sm:outline-[3px] outline-offset-[-1.5px] outline-neutral-800"></div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <Image
            src={star}
            alt="Star Icon"
            width={20}
            height={20}
            className="sm:w-7 sm:h-7"
          />
          <div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-gradient-to-b from-sky-700 via-sky-800/95 to-sky-950/95"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>
        <div className="w-12 sm:w-20 h-0 outline-[2px] sm:outline-[3px] outline-offset-[-1.5px] outline-neutral-800"></div>
      </div>
    </div>
  );
}
