// 'use client';
// import Image from 'next/image';
// import React, { JSX } from 'react';

// // Define the type for a single testimonial item
// type Testimonial = {
//   name: string;
//   title: string;
//   quote: string;
// };

// const testimonialData: Testimonial[] = [
//   {
//     name: 'Samuel Karl',
//     title: 'CEO, Company Inc.',
//     quote: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',

//   },
//   {
//     name: 'Daria Linney',
//     title: 'Founder, Startup Co.',
//     quote: 'The team at Tech Mission transformed our vision into a stunning reality. Their attention to detail and commitment to excellence are second to none. We couldn\'t be happier with the final product.',
//   },
//   {
//     name: 'John Anderson',
//     title: 'Marketing Director',
//     quote: 'Working with them was a seamless experience from start to finish. Their expertise in the digital landscape helped us achieve significant growth in a very short amount of time. Highly recommended!',
//   },
// ];

// const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
//   <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
//     <div className="bg-gray-100 p-8 rounded-lg h-full relative">
//        <div className="absolute top-6 right-6 text-blue-500 text-5xl opacity-20">

//        </div>
//       <div className="flex items-center gap-4 mb-4">
//         <Image
//           src={'/avater.png'}
//           alt="Avatar"
//           width={50}
//           height={50}
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <h3 className="font-raleway font-bold text-lg text-blue-700">{testimonial.name}</h3>
//           <p className="font-raleway font-medium text-sm text-blue-600">{testimonial.title}</p>
//         </div>
//       </div>
//       <p className="font-raleway text-gray-600 leading-relaxed">
//         {testimonial.quote}
//       </p>
//     </div>
//   </div>
// );

// function Testimonials(): JSX.Element {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
//   };

//   // A simple auto-slide effect
//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       handleNext();
//     }, 5000); // Change slide every 5 seconds
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <section className="bg-white py-16 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-raleway font-bold text-4xl text-[#072D5B]">
//             From Our Customers
//           </h2>
//           <p className="font-lato font-semibold text-2xl text-gray-700 mt-2">
//             Testimonials
//           </p>
//         </div>

//         {/* Carousel Wrapper */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-8"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {testimonialData.map((testimonial, index) => (
//                 <TestimonialCard key={index} testimonial={testimonial} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center items-center mt-8 gap-3">
//             <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-600">
//                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//             </button>
//           {testimonialData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
//             />
//           ))}
//            <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-600">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//             </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

"use client";
import React from "react";
import { SectionTitle } from "../careers/SectionTitle";

// --- Data for the story sections ---
const storyData = [
  {
    number: "01",
    title: "Design",
    content:
      "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
  },
  {
    number: "02",
    title: "Engineering",
    content:
      "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
  },
  {
    number: "03",
    title: "Project Management",
    content:
      "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
  },
  {
    number: "04",
    title: "Collaboration",
    content:
      "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
  },
  {
    number: "05",
    title: "Client-Centric Approach",
    content:
      "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
  },
  {
    number: "06",
    title: "Driving Success",
    content:
      "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
  },
];

// --- Story Item Component ---
const StoryItem = ({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) => (
  <div className="p-8 md:p-12 h-full border border-blue-200 rounded-lg bg-white/80 backdrop-blur-sm">
    <div className="flex items-end gap-4 mb-8">
      <span className="text-8xl md:text-9xl text-[#387FD2] font-['Roboto_Condensed'] leading-none">
        {number}
      </span>
      <h3 className="flex-1 text-4xl md:text-5xl text-[#387FD2] font-raleway pb-4 border-b border-blue-200">
        {title}
      </h3>
    </div>
    <p className="text-[#8A8A8A] text-lg font-lato leading-relaxed">
      {content}
    </p>
  </div>
);

// --- Main OurStory Component ---
export default function OurStory() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? storyData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === storyData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const slider = setTimeout(handleNext, 5000); // Auto-slide every 5 seconds
    return () => clearTimeout(slider);
  }, [currentIndex]);

  return (
    <div
      className="bg-white font-raleway py-20"
      style={{
        backgroundImage: `url(/ourstory.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col items-start mb-12">
          {/* <div className="flex items-center justify-center gap-2">
                <div className="w-14 h-1 bg-zinc-800"></div>
                <div className="w-14 h-1 bg-zinc-800"></div>
            </div>
            <h2 className="text-5xl md:text-6xl text-[#16192C] font-normal my-3"> From our Customers </h2>
            <div className="flex items-center justify-center gap-2">
                <div className="w-14 h-1 bg-zinc-800"></div>
                <div className="w-14 h-1 bg-zinc-800"></div>
            </div> */}
          <SectionTitle
            title="From our Customers"
            textAlign="center"
            className=" mx-0 "
            titleClassName="text-5xl md:text-6xl"
          />
        </div>

        {/* Manual Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {storyData.map((story) => (
                <div key={story.number} className="w-full flex-shrink-0 p-2">
                  <StoryItem
                    number={story.number}
                    title={story.title}
                    content={story.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/50 hover:bg-white transition text-gray-700 shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {storyData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/50 hover:bg-white transition text-gray-700 shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
