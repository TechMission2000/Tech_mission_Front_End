import React from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import GetIntouch from '@/components/about/GetIntouch';

// --- Data for Portfolio Items ---
// In a real application, you would likely fetch this data from an API or a CMS.
const allWorkData = [
  { category: "E-Commerce Platform for Fashion Hub", imageSrc: "/blog.png", title: "Chic Boutique", link: "https://www.chicboutique.com", description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer, resulting in increased online sales." },
  { category: "Mobile App for Food Delivery Service", imageSrc: "/blog.png", title: "HungryBites", link: "https://www.hungrybites.com", description: "HungryBites approached us to create a mobile app that streamlined their food delivery service with real-time order tracking and secure payment options." },
  { category: "Booking System for Event Management", imageSrc: "/blog.png", title: "EventMasters", link: "https://www.eventmasters.com", description: "EventMasters required a comprehensive booking and reservation system. We designed a platform that allowed seamless event registration and ticketing." },
  { category: "Custom Software for Workflow Automation", imageSrc: "/blog.png", title: "ProTech Solutions", link: "https://www.protechsolutions.com", description: "ProTech Solutions needed custom software to automate workflows. Our solution increased productivity by integrating various business processes into one system." },
  { category: "Web Portal for Real Estate Listings", imageSrc: "/blog.png", title: "Dream Homes Realty", link: "https://www.dreamhomesrealty.com", description: "We created a visually appealing platform with advanced search filters and virtual tours, enabling potential buyers to find their dream homes easily." },
  { category: "Mobile App for Fitness Tracking", imageSrc: "/blog.png", title: "FitLife Tracker", link: "https://www.fitlifetracker.com", description: "The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles." },
  { category: "Software for Supply Chain Management", imageSrc: "/blog.png", title: "Global Logistics", link: "https://www.globallogisticssolutions.com", description: "We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking." },
  { category: "Educational Platform for Online Learning", imageSrc: "/blog.png", title: "EduConnect", link: "https://www.educonnect.com", description: "We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking for an engaging learning experience." },
  { category: "Mobile App for Travel Planning", imageSrc: "/blog.png", title: "WanderWise", link: "https://www.wanderwise.com", description: "We developed an app with personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore." },
  { category: "Web App for Customer Management", imageSrc: "/blog.png", title: "ConnectCRM", link: "https://www.connectcrm.com", description: "We developed a feature-rich CRM platform with lead management and data analytics, enabling businesses to nurture customer relationships." }
];


// --- Reusable Card Component ---
const WorkCard = ({ category, imageSrc, title, link, description }: any) => {
  return (
    <div className="flex flex-col gap-8 px-6 sm:px-10 py-8">
      <h2 className="text-xl font-semibold text-[#545454] font-lato">{category}</h2>
      <div className="flex flex-col gap-6">
        <Image src={imageSrc} alt={title} width={490} height={346} className="rounded-lg object-cover w-full h-auto shadow-md" />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-[#16192C] font-lato">{title}</h3>
            <p className="text-sm text-[#545454] bg-gradient-to-b from-[#FBFBFB] to-[#FAFAFA] px-3 py-2 rounded-md inline-block border border-gray-200">
              {link}
            </p>
          </div>
          <button className="rounded-md hover:shadow-lg transition-shadow">
            <div className="w-[26px] h-[26px] relative flex items-center justify-center">
              <div className="p-2 bg-[#1963B9] rounded-md" >
                <GoArrowUpRight className='text-2xl text-white' />


              </div>
            </div>
          </button>
        </div>
        <p className="text-[#545454] text-base font-raleway leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// --- Grid Container Component ---
const WorkGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {allWorkData.map((item, index) => (
        <div key={index} className={`border-t border-gray-100 ${index % 2 === 0 ? 'md:border-r md:border-gray-100' : ''}`}>
          <WorkCard {...item} />
        </div>
      ))}
    </div>
  );
};

// --- Hero Section Component ---
const WorkHero = () => {
  return (
    <div className="pt-20 px-6 sm:px-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#16192C] font-raleway">
          At Tach Mission
        </h1>
        <p className="text-base text-[#16192C] font-raleway leading-relaxed">
          We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
        </p>
      </div>
      <div className="self-start p-2.5 bg-gradient-to-b from-[#FBFBFB] to-[#FAFAFA] rounded-md border border-gray-200">
        <p className="text-[#16192C] text-lg font-lato">
          Here are ten examples of our notable works:
        </p>
      </div>
    </div>
  );
};

// --- Call-to-Action Component ---
// const GetIntouch = () => {
//   return (
//     <div className="relative w-full min-h-[360px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/getintouch.png')" }}>
//       <div className="absolute inset-0 bg-[#16192C]/40" />
//       <div className="relative z-10 flex flex-col justify-center items-center h-full gap-8 text-white p-4">
//         <h2 className="text-3xl font-bold text-center text-[#F7F7F7] font-raleway max-w-4xl leading-snug">
//           “Some of the History of Our Company is that<br className="hidden sm:block" />we are Catching up through Video”
//         </h2>
//         <button className="px-12 py-4 text-lg font-lato text-white bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[#0070F5] rounded-lg hover:opacity-90 transition-opacity shadow-lg">
//           Get In Touch
//         </button>
//       </div>
//     </div>
//   );
// };


// --- Main Page Component ---
export default function WorkPage() {
  return (
    <main className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 bg-white py-10 sm:py-16">
      {/* Main content container with border */}
      <div className="max-w-6xl w-full mx-4 sm:mx-6 lg:mx-8 border border-[#C1D7F1]">
        <WorkHero />
        <WorkGrid />
      </div>

      {/* Full-width CTA section */}
      <div className="w-full">
        <GetIntouch />
      </div>
    </main>
  );
}