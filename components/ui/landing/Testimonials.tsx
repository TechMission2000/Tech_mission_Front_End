"use client";
import React from "react";
import Image from "next/image";

// --- Testimonials Data ---
const testimonialData = [
  {
    name: "Aisha Khan",
    title: "CTO, Fintech Startup",
    image: "https://i.pravatar.cc/150?u=aisha-khan",
    quote:
      "The AI & ML service transformed our platform. Their predictive analytics model reduced our fraud detection time by 60%, leading to faster decision-making and significant cost savings. Truly data-driven innovation.",
  },
  {
    name: "Marcus Chen",
    title: "Product Lead, E-commerce",
    image: "https://i.pravatar.cc/150?u=marcus-chen",
    quote:
      "We needed a seamless mobile experience. The App Development team delivered a high-performance app with a flawless UI/UX. The launch was smooth, and user engagement has soared past our initial goals.",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "https://i.pravatar.cc/150?u=sarah-johnson",
    quote:
      "Their Digital Marketing strategies were revolutionary. We saw a 40% increase in qualified leads within the first quarter. Their focused approach to SEO and paid media is second to none.",
  },
  {
    name: "Daria Linney",
    title: "Founder, SaaS Platform",
    image: "https://i.pravatar.cc/150?u=daria-linney",
    quote:
      "Our old website was slow and clunky. The Website Development team rebuilt it from the ground up—it's now incredibly fast, secure, and visually responsive. A massive uplift in conversion rates!",
  },
  {
    name: "Samuel Karl",
    title: "VP of Operations",
    image: "https://i.pravatar.cc/150?u=samuel-karl",
    quote:
      "We sleep better knowing our data is protected. Their Cyber Security audit and implementation plan were thorough and proactive, securing critical infrastructure against modern threats with minimal disruption.",
  },
  {
    name: "John Anderson",
    title: "Brand Manager",
    image: "https://i.pravatar.cc/150?u=john-anderson",
    quote:
      "The Graphics Design team perfectly captured our vision. They developed a comprehensive design system that elevated our brand identity across all digital touchpoints. Professional, creative, and fast!",
  },
];

// --- Testimonial Card Component ---
interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  quote: string;
}

function TestimonialCard({ image, name, title, quote }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 h-full flex flex-col w-[450px] 00px]">
      {/* Header with avatar and quote icon */}
      <div className="flex items-start justify-between mb-4 ">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Blue quotation mark */}
        <div className="text-blue-500 text-5xl font-bold leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1000"
            width="1000"
            viewBox="0 0 1000 1000"
            className="w-8 h-8"
          >
            <path
              d="M602.1 132.1h266.69999999999993c37.90000000000009 0 68.70000000000005 30.80000000000001 68.70000000000005 68.70000000000002v242.5c0 114.59999999999997-23.799999999999955 204.99999999999994-71.5 271.2-38.700000000000045 53.700000000000045-99.79999999999995 102.39999999999998-183.29999999999995 146-33.60000000000002 17.5-76.30000000000007 2.3999999999999773-94-31.100000000000023l-23.200000000000045-43.89999999999998c-17.700000000000045-33.5-4-73.29999999999995 28.799999999999955-92.39999999999998 39.200000000000045-22.800000000000068 68.10000000000002-45.5 86.80000000000007-68.20000000000005 13.799999999999955-16.799999999999955 24.5-35.19999999999993 32.10000000000002-55.10000000000002 12.599999999999909-33.09999999999991-17.40000000000009-62.39999999999998-55.30000000000007-62.39999999999998h-55.799999999999955c-37.89999999999998 0-68.70000000000005-30.799999999999955-68.70000000000005-68.69999999999999v-238c0-37.89999999999998 30.800000000000068-68.69999999999999 68.70000000000005-68.6z m-470.90000000000003 0h266.7c37.900000000000034 0 68.70000000000005 30.80000000000001 68.70000000000005 68.70000000000002v242.5c0 114.59999999999997-23.80000000000001 204.99999999999994-71.5 271.2-38.700000000000045 53.700000000000045-99.80000000000001 102.39999999999998-183.3 146-33.60000000000002 17.5-76.30000000000001 2.3999999999999773-94.00000000000001-31.100000000000023l-23.200000000000003-43.89999999999998c-17.69999999999999-33.5-4-73.29999999999995 28.80000000000001-92.39999999999998 39.19999999999999-22.800000000000068 68.1-45.5 86.79999999999998-68.20000000000005 13.800000000000011-16.799999999999955 24.5-35.19999999999993 32.10000000000002-55.10000000000002 12.599999999999994-33.09999999999991-17.400000000000006-62.39999999999998-55.30000000000001-62.39999999999998h-55.80000000000001c-37.89999999999999 0-68.69999999999999-30.799999999999955-68.69999999999999-68.69999999999999v-238c0-37.89999999999998 30.799999999999997-68.69999999999999 68.69999999999999-68.6z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Quote text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
        {quote}
      </p>

      {/* Author info */}
      <div>
        <p className="text-blue-600 font-semibold text-sm">{name}</p>
        <p className="text-gray-500 text-xs">{title}</p>
      </div>
    </div>
  );
}

// --- Main Testimonials Component ---
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerSlide = 3; // Show 2 items on desktop, 1 on mobile

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - itemsPerSlide : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonialData.length - itemsPerSlide ? 0 : prev + 1
    );
  };

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const slider = setTimeout(handleNext, 5000);
    return () => clearTimeout(slider);
  }, [currentIndex]);

  return (
    <div className="bg-white font-raleway py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col justify-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#072D5B]">
            From our Customers
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Testimonials
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex gap-1 md:gap-2 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerSlide)
                }%)`,
              }}
            >
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4">
          {/* Previous Button */}
          {/* <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button> */}

          {/* Dots Navigation */}
          <div className="flex items-center gap-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-600 w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          {/* <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import { SectionTitle } from "../careers/SectionTitle";

// // --- Data for the story sections ---
// const storyData = [
//   {
//     name: "Samuel Karl",
//     title: "Design",
//     image: "/avater.png",
//     quote:
//       "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
//   },
//   {
//     name: "Samuel Karl",
//     title: "Design",
//     image: "/avater.png",
//     quote:
//       "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
//   },
//   {
//     name: "Samuel Karl",
//     title: "Design",
//     image: "/avater.png",
//     quote:
//       "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
//   },

// ];

// --- Story Item Component ---
// import Image from "next/image";

// interface TestimonialCardProps {
//   image: string;
//   name: string;
//   title: string;
//   quote: string;
// }

// function TestimonialCard({ image, name, title, quote }: TestimonialCardProps) {
//   return (
//     <div className="bg-slate-50 rounded-lg p-8 max-w-2xl">
//       {/* Header with avatar and quote icon */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//           <Image
//             src={image || "/placeholder.svg"}
//             alt={name}
//             width={64}
//             height={64}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         {/* Blue quotation mark */}
//         <div className="text-blue-600 text-5xl font-bold leading-none">"</div>
//       </div>

//       {/* Quote text */}
//       <p className="text-gray-700 text-base leading-relaxed mb-6">{quote}</p>

//       {/* Author info */}
//       <div>
//         <p className="text-blue-600 font-semibold text-sm">{name}</p>
//         <p className="text-gray-500 text-sm">{title}</p>
//       </div>
//     </div>
//   );
// }

// const StoryItem = ({
//   number,
//   title,
//   content,
// }: {
//   number: string;
//   title: string;
//   content: string;
// }) => (
// <div className="p-8 md:p-12 h-full border border-blue-200 rounded-lg bg-white/80 backdrop-blur-sm">
//   <div className="flex items-end gap-4 mb-8">
//     <span className="text-4xl md:text-6xl text-[#387FD2] font-['Roboto_Condensed'] leading-none">
//       {number}
//     </span>
//     <h3 className="flex-1 text-2xl md:text-3xl text-[#387FD2] font-raleway pb-4 border-b border-blue-200">
//       {title}
//     </h3>
//   </div>
//   <p className="text-[#8A8A8A] text-lg font-lato leading-relaxed">
//     {content}
//   </p>
// </div>
// );

// --- Main OurStory Component ---
// export default function OurStory() {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const handlePrev = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? storyData.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const handleNext = () => {
//     const isLastSlide = currentIndex === storyData.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   React.useEffect(() => {
//     const slider = setTimeout(handleNext, 5000); // Auto-slide every 5 seconds
//     return () => clearTimeout(slider);
//   }, [currentIndex]);

//   return (
//     <div
//       className="bg-white font-raleway py-20"
//       style={{
//         backgroundImage: `url(/ourstory.png)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Title Section */}
//         <div className="flex flex-col justify-center mb-12">
//           {/* <div className="flex items-center justify-center gap-2">
//             <div className="w-14 h-1 bg-zinc-800"></div>
//             <div className="w-14 h-1 bg-zinc-800"></div>
//           </div> */}
//           <h2 className="text-4xl text-center font-semibold text-brand-secondary text-[#072D5B] font-raleway">
//             {" "}
//             Testimonials{" "}
//           </h2>

//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-2">
//             From our Customers
//           </p>
//           {/* <div className="flex items-center justify-center gap-2">
//             <div className="w-14 h-1 bg-zinc-800"></div>
//             <div className="w-14 h-1 bg-zinc-800"></div>
//           </div> */}
//           {/* <SectionTitle
//             title="From our Customers"
//             textAlign="center"
//             className=" mx-0 "
//             titleClassName="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway"
//           /> */}
//         </div>

//         {/* Manual Slider */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {storyData.map((story, index) => (
//                 <div key={index} className="w-full flex-shrink-0 p-2">
//                   {/* <StoryItem
//                     number={story.number}
//                     title={story.title}
//                     content={story.content}
//                   /> */}
//                   <TestimonialCard {...story} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-center items-center mt-8 gap-4">
//           <button
//             onClick={handlePrev}
//             className="p-3 rounded-full bg-white/50 hover:bg-white transition text-gray-700 shadow-md"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               ></path>
//             </svg>
//           </button>
//           <div className="flex items-center gap-2">
//             {storyData.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentIndex === index
//                     ? "bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90  w-6"
//                     : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleNext}
//             className="p-3 rounded-full bg-white/50 hover:bg-white transition text-gray-700 shadow-md"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
