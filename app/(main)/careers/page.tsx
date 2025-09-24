
"use client";
import React from "react";
import {
    FiBriefcase,
    FiMapPin,
    FiClock,
    FiCalendar,
    FiChevronRight,
} from "react-icons/fi";
import { FaPlay, FaRegBuilding } from "react-icons/fa";
import Image from "next/image";
import JobCard from "@/components/carear/JobCard";
import Faq from "@/components/ui/landing/faq";
import GetIntouch from "@/components/about/GetIntouch";

// --- Reusable SectionTitle Component ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-gray-800" />
            <div className="flex items-center gap-1">
                <div className="w-4 h-2 transform -skew-x-45 bg-gradient-to-r from-blue-700 to-blue-500" />
                <div className="w-4 h-2 transform -skew-x-45 bg-gradient-to-r from-blue-700 to-blue-500" />
            </div>
            <div className="h-1 w-12 bg-gray-800" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
        <div className="flex items-center justify-end gap-2">
            <div className="h-1 w-12 bg-gray-800" />
            <div className="flex items-center gap-1">
                <div className="w-4 h-2 transform -skew-x-45 bg-gradient-to-r from-blue-700 to-blue-500" />
                <div className="w-4 h-2 transform -skew-x-45 bg-gradient-to-r from-blue-700 to-blue-500" />
            </div>
            <div className="h-1 w-12 bg-gray-800" />
        </div>
    </div>
);

// --- Reusable Benefit Card Component ---
const BenefitCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
        <div className="p-3 bg-blue-100 rounded-md">{icon}</div>
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
    </div>
);


const CareerPage = () => {
    const benefits = [
        { icon: <FiBriefcase size={24} className="text-blue-600" />, title: "Friendly Working Environment" },
        { icon: <FiClock size={24} className="text-blue-600" />, title: "Flexible Work Hours" },
        { icon: <FaRegBuilding size={24} className="text-blue-600" />, title: "Surprise Appreciation Gifts" },
        { icon: <FiBriefcase size={24} className="text-blue-600" />, title: "Performance Bonuses" },
        { icon: <FiCalendar size={24} className="text-blue-600" />, title: "Yearly Tour" },
        { icon: <FiClock size={24} className="text-blue-600" />, title: "Two Festival Bonuses" },
    ];

    const jobs = [
        {
            logo: "/carear.png", // Use string path
            title: "Software Developer",
            location: "Dhaka, Bangladesh",
            experience: "At least 2 year(s)",
            deadline: "4 Days Remaining",
            type: "Full Time",
        },
        {
            logo: "/carear.png", // Use string path
            title: "Senior UI/UX Designer",
            location: "Dhaka, Bangladesh",
            experience: "At least 4 year(s)",
            deadline: "10 Days Remaining",
            type: "Full Time",
        },
        {
            logo: "/carear.png", // Use string path
            title: "Project Manager",
            location: "Remote",
            experience: "At least 5 year(s)",
            deadline: "12 Days Remaining",
            type: "Remote",
        },
        {
            logo: "/carear.png", // Use string path
            title: "DevOps Engineer",
            location: "Dhaka, Bangladesh",
            experience: "At least 3 year(s)",
            deadline: "15 Days Remaining",
            type: "Full Time",
        },
    ];

    return (
        <div className="relative bg-white overflow-hidden">


            <div className="relative bg-[url('/carear.png')] bg-cover bg-center text-white">

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-condensed">
                        Career
                    </h1>
                    <p className="mt-4 text-xl">
                        <span className="font-raleway">Home / </span>
                        <span className="font-condensed font-bold">Career</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-gray-200">
                    <div className="flex items-center gap-6">
                        <Image
                            src="/carear.png"
                            alt="TechMission Logo"
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-white shadow-lg"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 font-abeezee">TechMission</h2>
                            <p className="text-gray-500">Information Technology (IT)</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-4 w-full md:w-auto">
                        <div className="p-4 bg-white rounded-md shadow-inner">
                            <FiBriefcase size={32} className="text-blue-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-bold text-gray-800">12+</p>
                            <p className="text-gray-600">Current Job Openings</p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <SectionTitle>Shape Your Future with TachMission</SectionTitle>
                        <p className="text-gray-600 leading-relaxed">
                            At TachMission 360, we are a forward-thinking software development company based in Bangladesh...
                            <br /><br />
                            We don&apos;t just offer life-changing skills training—we empower individuals to leverage those skills...
                        </p>
                    </div>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nXpKZ_sHo6w"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>


                </section>

                <div style={{
                    backgroundImage: "url('/banifit.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} className="space-y-12 lg:p-20 md:p-14 p-4  text-center">
                    <div className=" text-start">
                        <div className="flex justify-start"><SectionTitle>Benefits and Gratitude</SectionTitle></div>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            At TachMission, we prioritize creating a comfortable and supportive work environment, offering a range of external benefits to ensure that our employees thrive. We are dedicated to fostering a workplace where every individual feels nurtured and empowered, allowing them to establish their comfort zone and deliver their best work. Your well-being and growth are at the heart of our company culture, and we are grateful for the contributions each team member makes towards our shared success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} icon={benefit.icon} title={benefit.title} />
                        ))}
                    </div>
                </div>


                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-blue-100 rounded-lg">
                            <FiBriefcase size={32} className="text-blue-700" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-raleway">Available Jobs Right Now</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {jobs.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </section>

            </main>
            <Faq />
            <GetIntouch />
        </div>
    );
};

export default CareerPage;