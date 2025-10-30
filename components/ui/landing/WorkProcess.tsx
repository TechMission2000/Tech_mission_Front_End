import { Crown, Medal, ShieldCheck, UserStar } from "lucide-react";
import React from "react";

// Data for the feature cards, including new SVG icons. This keeps the component clean and easy to update.
const services = [
  {
    icon: <Medal />,
    title: "Expertise",
    description:
      "Our team brings years of industry experience and technical mastery, ensuring every project meets the highest standards of innovation and quality.",
  },
  {
    icon: <UserStar />,
    title: "Client-Centric Approach",
    description:
      "We prioritize understanding your unique goals and challenges, delivering personalized solutions that align perfectly with your business vision.",
  },
  {
    icon: <ShieldCheck />,
    title: "Results-Driven Solutions",
    description:
      "We focus on measurable outcomes — building digital products that drive performance, enhance user engagement, and deliver real business impact.",
  },
  {
    icon: <Crown />,
    title: "Collaborative Partnership",
    description:
      "We believe in long-term collaboration, working closely with you at every step to ensure transparency, trust, and shared success.",
  },
];

// Reusable component for each service card
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-y-6">
    <div className="flex items-center gap-x-5">
      <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white rounded-lg">
        {icon}
      </div>
      <h3 className="flex-1 text-2xl font-medium text-gray-900">{title}</h3>
    </div>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

function WorkProcess() {
  return (
    <div
      style={{
        backgroundImage: "url('/whatwedo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section */}
        {/* <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in creating bespoke digital solutions that empower
            businesses to succeed in an ever-evolving technological landscape.
          </p>
        </div> */}

        {/* Responsive grid for services, mirroring the layout of the WhyChooseUs component */}
        <div className="mx-auto max-w-6xl border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                // Add borders to create the grid effect
                className={`p-8 sm:p-12 
                                ${index < 2 ? "border-b" : ""} 
                                ${index % 2 === 0 ? "md:border-r" : ""} 
                                border-gray-200`}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
