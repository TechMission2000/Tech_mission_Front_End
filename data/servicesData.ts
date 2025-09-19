import { technologyData } from "./technologyData";

export const servicesData = [
  {
    id: 1,
    category: "Web Development & Design",
    article: {
      title: "Web Development & Design Services",
      description:
        "We deliver high-performing, modern websites that are scalable, SEO-optimized, and designed to convert visitors into customers. Our services go beyond design and development by ensuring long-term success with continuous updates, security, and business-focused features.",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758182545169_webdevelopment-service-image.jpg",
    },
    coreText: {
      title: "Delivering Top-Quality Web Solutions",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758162106739_ai+intrgrated+business+website-development.mp4",
      features: [
        "Custom business websites and web applications",
        "Responsive, SEO-friendly, and beautiful designs",
        "Scalable solutions that grow with your business",
        "Integration with analytics, CRM, and third-party tools",
        "Post-deployment support including bug fixes & enhancements",
        "Monthly/Yearly subscription options for updates & maintenance",
      ],
    },
    benefits: [
      {
        title: "Responsive & User-Friendly Design",
        description:
          "Websites optimized for all devices, ensuring accessibility and smooth user experience.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "SEO & Performance Optimized",
        description:
          "Our designs are lightweight, SEO-ready, and optimized for faster load times and better search rankings.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Scalable Architecture",
        description:
          "We build websites with future growth in mind, making it easy to add features as your business expands.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "After-Deployment Services",
        description:
          "We offer long-term support, including bug fixing, updates, and performance improvements after delivery.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Maintenance & Subscription Plans",
        description:
          "Flexible monthly or yearly plans for continuous updates, design improvements, and security patches.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Easy Maintenance for Clients",
        description:
          "We provide CMS integrations and simple admin panels so your team can easily manage content without coding.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "Business-Centric Web Design",
        description:
          "We design not just for looks, but for business results — increasing conversions, sales, and engagement.",
      },
      {
        title: "Post-Launch Partnership",
        description:
          "Our role doesn’t end at delivery. We continue to support, maintain, and optimize your website.",
      },
      {
        title: "Future-Proof Technology",
        description:
          "Using modern frameworks, security practices, and scalable databases, we ensure your website stays relevant for years.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Create beautiful, responsive, and SEO-friendly websites.",
        "Ensure scalability so your platform grows with your business.",
        "Provide after-deployment support and bug fixing services.",
        "Offer flexible subscription-based maintenance and updates.",
        "Build websites that are easy to maintain by clients themselves.",
        "Help businesses generate more leads, sales, and brand visibility online.",
      ],
    },
    technologies: {
      frontend: technologyData.frontend.slice(0, 4).map((t) => t.name),
      backend: technologyData.backend.slice(0, 4).map((t) => t.name),
      database: technologyData.database.slice(0, 4).map((t) => t.name),
      devops: technologyData.devops.slice(0, 4).map((t) => t.name),
      uiux: technologyData.uiux.slice(0, 4).map((t) => t.name),
      security: technologyData.security.slice(0, 4).map((t) => t.name),
      languages: ["JavaScript", "TypeScript", "Python", "Java"],
    },
  },
];

// image:
//         "https://pro-bucket.s3.us-east-1.amazonaws.com/1758182545169_webdevelopment-service-image.jpg",

//  video:
//         "https://pro-bucket.s3.us-east-1.amazonaws.com/1758162106739_ai+intrgrated+business+website-development.mp4",
