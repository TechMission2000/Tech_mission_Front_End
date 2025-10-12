import React from "react";

// Data for the feature cards, including new SVG icons. This keeps the component clean and easy to update.
const services = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "AI & ML Services",
    description:
      "We develop intelligent AI and machine learning solutions that automate processes, enhance analytics, and improve business decision-making.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "App Development",
    description:
      "From concept to deployment, we build fast, secure, and user-friendly mobile apps that enhance customer engagement and business reach.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4h18"
        />
      </svg>
    ),
    title: "Website Development",
    description:
      "We design and develop modern, responsive, and SEO-friendly websites optimized for performance and user experience across all devices.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8c0-1.105-.895-2-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h9c1.105 0 2-.895 2-2v-1h4v-6h-4V8z"
        />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "We help you grow your brand online with data-driven digital marketing, including SEO, paid ads, and social media campaigns.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    title: "Graphics Design",
    description:
      "Our creative team designs visually appealing logos, brand identities, and marketing assets that communicate your story effectively.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 20h9M3 4h18M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8"
        />
      </svg>
    ),
    title: "Custom Software",
    description:
      "We build custom software solutions tailored to your unique business needs, integrating automation and scalability for long-term success.",
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
      <div className="flex-shrink-0 p-4 bg-[#4089E0] rounded-lg">{icon}</div>
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
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#072D5B] tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in creating bespoke digital solutions that empower
            businesses to succeed in an ever-evolving technological landscape.
          </p>
        </div>

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
