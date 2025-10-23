// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";

// interface BlogCardProps {
//   image: string;
//   category: string;
//   title: string;
//   date: string;
//   href?: string;
//   slug?: string;
//   delay?: number;
//   onReadMore?: (slug: string) => void;
// }

// export default function BlogCard({
//   image,
//   category,
//   title,
//   date,
//   href = "#",
//   slug = "",
//   delay = 0,
//   onReadMore,
// }: BlogCardProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const blogLink = slug ? `/blogs/${slug}` : href;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
//         });
//       },
//       { threshold: 0.1, rootMargin: "50px" }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => {
//       if (cardRef.current) observer.unobserve(cardRef.current);
//     };
//   }, [delay]);

//   return (
//     <div
//       ref={cardRef}
//       className={`w-full bg-white shadow-[3px_4px_30px_0px_rgba(136,136,136,0.10)] flex flex-col rounded-lg transition-all duration-700 transform ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//       } hover:shadow-xl hover:-translate-y-1`}
//     >
//       <div className="w-full h-64 overflow-hidden relative">
//         <img
//           className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
//           src={image || "/placeholder.svg"}
//           alt={title}
//         />
//       </div>

//       <div className="w-full h-52 bg-white p-6 flex flex-col justify-between">
//         <div className="flex flex-col gap-6">
//           <div className="flex flex-col gap-1.5">
//             <div className="text-zinc-500 text-base font-semibold font-['Lato'] leading-none">
//               {category}
//             </div>
//             <h3 className="text-sky-700 text-xl font-semibold font-['Lato'] leading-normal truncate transition-colors group-hover:text-pink-500">
//               {title}
//             </h3>
//             <div className="text-gray-400 text-sm font-normal font-['Lato'] leading-none">
//               {date}
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <div className="w-full h-px bg-zinc-400"></div>
//             {onReadMore ? (
//               <button
//                 onClick={() => slug && onReadMore(slug)}
//                 className="flex justify-between items-center group text-neutral-600 hover:text-sky-700 transition-colors font-semibold text-base font-['Lato']"
//               >
//                 <span>Read More</span>
//                 <ArrowRight className="w-5 h-5 transition-colors" />
//               </button>
//             ) : (
//               <a
//                 href={blogLink}
//                 className="flex justify-between items-center group text-neutral-600 hover:text-sky-700 transition-colors font-semibold text-base font-['Lato']"
//               >
//                 <span>Read More</span>
//                 <ArrowRight className="w-5 h-5 transition-colors" />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// BlogCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  slug?: string;
  onReadMore: (slug: string) => void;
  href?: string;
}

interface BlogCardProps extends BlogPost {
  delay?: number;
  onReadMore: (slug: string) => void;
  slug?: string;
  href?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  date,
  title,
  slug,
  href = "#",
  delay = 0,
  onReadMore,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  // const blogLink = slug ? `/blogs/${slug}` : href;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <article
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm font-medium mb-2">{category}</p>
        <h3 className="text-lg font-bold text-sky-700 mb-2 leading-tight group-hover:text-pink-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mb-4">{date}</p>
        <div className="border-t border-gray-300 pt-4">
          <button
            onClick={() => slug && onReadMore(slug)}
            className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-sky-700 transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-5 h-5 transform transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
