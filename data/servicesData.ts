import { technologyData } from "./technologyData";

export const servicesData = [
  // ================== 1. AI & ML SERVICES ==================
  {
    id: 1,
    category: "AI & ML Services",
    article: {
      title: "Artificial Intelligence & Machine Learning Solutions",
      description:
        "We empower businesses through AI-driven automation, predictive analytics, and intelligent systems that streamline processes, improve decision-making, and increase efficiency. Our AI experts create solutions tailored to your business model, leveraging the latest machine learning and deep learning technologies.",
      image: "https://pro-bucket.s3.us-east-1.amazonaws.com/ai-ml-service.jpg",
    },
    coreText: {
      title: "Building Intelligent Systems for a Smarter Tomorrow",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/ai-ml-intro-video.mp4",
      features: [
        "AI-powered chatbots and virtual assistants",
        "Predictive analytics for business forecasting",
        "Image and speech recognition systems",
        "Natural Language Processing (NLP) solutions",
        "AI-driven data visualization dashboards",
        "Custom machine learning model training & deployment",
      ],
    },
    benefits: [
      {
        title: "Enhanced Decision-Making",
        description:
          "AI systems analyze complex data to provide insights that drive smarter business strategies.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Automation & Cost Reduction",
        description:
          "Reduce human error and operational costs through process automation using AI models.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Predictive Analytics",
        description:
          "Forecast customer behavior, sales, and trends with data-driven insights powered by ML algorithms.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Scalable AI Models",
        description:
          "Our solutions adapt to your growing data and evolving business needs with ease.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "Custom AI Integration",
        description:
          "We integrate AI directly into your existing systems to enhance performance without disruption.",
      },
      {
        title: "End-to-End AI Development",
        description:
          "From ideation to deployment, we manage every stage of your AI solution lifecycle.",
      },
      {
        title: "Ethical AI Practices",
        description:
          "We ensure transparent, explainable, and responsible AI model development and deployment.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Empower industries through data-driven intelligence.",
        "Automate business operations using AI algorithms.",
        "Develop ethical and explainable AI models.",
        "Enhance customer experiences using predictive systems.",
        "Build scalable ML models that evolve with data.",
      ],
    },
    technologies: {
      frontend: ["React", "Next.js", "Vue.js", "Angular"],
      backend: ["Node.js", "Express.js", "Django", "Python"],
      database: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
      devops: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
      uiux: ["Figma", "Adobe XD", "InVision", "Sketch"],
      security: ["JWT", "SSL/TLS", "Firewall", "Encryption"],
      languages: ["Python", "TypeScript", "Java", "R"],
    },
  },

  // ================== 2. APP DEVELOPMENT ==================
  {
    id: 2,
    category: "App Development",
    article: {
      title: "Mobile App Design & Development",
      description:
        "We build powerful, user-friendly mobile applications for Android and iOS platforms using the latest cross-platform and native technologies. Our apps are optimized for speed, usability, and engagement.",
      image: "https://pro-bucket.s3.us-east-1.amazonaws.com/appdev-service.jpg",
    },
    coreText: {
      title: "Delivering Scalable & Engaging App Experiences",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/app-development-video.mp4",
      features: [
        "Native & cross-platform mobile apps",
        "User-centric design with high engagement rate",
        "Integration with APIs, cloud & payment systems",
        "Offline functionality for better accessibility",
        "End-to-end testing and app store deployment",
        "App maintenance, updates, and scaling support",
      ],
    },
    benefits: [
      {
        title: "Cross-Platform Support",
        description:
          "Develop apps that run seamlessly on Android, iOS, and tablets using React Native and Flutter.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Optimized Performance",
        description:
          "Our apps deliver lightning-fast performance and low battery usage across all devices.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Custom Integrations",
        description:
          "We integrate apps with third-party APIs, payment systems, and analytics tools.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Long-Term Maintenance",
        description:
          "We provide continuous support, feature updates, and performance monitoring.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "User-First Design Philosophy",
        description:
          "We prioritize user experience from wireframe to launch to maximize engagement.",
      },
      {
        title: "Agile Development Cycle",
        description:
          "Rapid prototyping, iterative design, and continuous deployment ensure quality.",
      },
      {
        title: "Security-Driven Development",
        description:
          "We apply best practices to protect user data and ensure app security.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Deliver modern, fast, and engaging mobile apps.",
        "Ensure seamless performance across all devices.",
        "Integrate apps with cloud and backend systems.",
        "Provide long-term maintenance and updates.",
      ],
    },
    technologies: {
      frontend: ["React Native", "Flutter", "SwiftUI", "Next.js"],
      backend: ["Node.js", "Express.js", "Django", "Firebase"],
      database: ["MongoDB", "SQLite", "PostgreSQL", "Firebase"],
      devops: ["Docker", "AWS", "Azure", "GitLab CI"],
      uiux: ["Figma", "Adobe XD", "Sketch", "InVision"],
      security: ["OAuth", "JWT", "2FA", "SSL/TLS"],
      languages: ["JavaScript", "TypeScript", "Kotlin", "Swift"],
    },
  },

  // ================== 3. WEBSITE DEVELOPMENT ==================
  // (same as your provided one)
  {
    id: 3,
    category: "Website Development",
    article: {
      title: "Web Development & Design Services",
      description:
        "We deliver high-performing, modern websites that are scalable, SEO-optimized, and designed to convert visitors into customers...",
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
        title: "Cross-Platform Support",
        description:
          "Develop apps that run seamlessly on Android, iOS, and tablets using React Native and Flutter.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Optimized Performance",
        description:
          "Our apps deliver lightning-fast performance and low battery usage across all devices.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Custom Integrations",
        description:
          "We integrate apps with third-party APIs, payment systems, and analytics tools.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Long-Term Maintenance",
        description:
          "We provide continuous support, feature updates, and performance monitoring.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "User-First Design Philosophy",
        description:
          "We prioritize user experience from wireframe to launch to maximize engagement.",
      },
      {
        title: "Agile Development Cycle",
        description:
          "Rapid prototyping, iterative design, and continuous deployment ensure quality.",
      },
      {
        title: "Security-Driven Development",
        description:
          "We apply best practices to protect user data and ensure app security.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Deliver modern, fast, and engaging mobile apps.",
        "Ensure seamless performance across all devices.",
        "Integrate apps with cloud and backend systems.",
        "Provide long-term maintenance and updates.",
      ],
    },
    technologies: {
      frontend: ["React", "Next.js", "Vue.js", "Angular"],
      backend: ["Node.js", "Express.js", "Django", "Laravel"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      devops: ["Docker", "AWS", "GitHub Actions", "Kubernetes"],
      uiux: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
      security: ["SSL/TLS", "Firewall", "Encryption", "OWASP"],
      languages: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
  },

  // ================== 4. DIGITAL MARKETING ==================
  {
    id: 4,
    category: "Digital Marketing",
    article: {
      title: "Digital Marketing & Brand Growth Services",
      description:
        "We help brands grow online through SEO, content marketing, PPC, social media, and email automation. Our strategies drive measurable results, improving traffic, conversions, and engagement.",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/digitalmarketing-service.jpg",
    },
    coreText: {
      title: "Empowering Brands with Digital Strategies",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/digitalmarketing-video.mp4",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Pay-Per-Click (PPC) Campaigns",
        "Content Marketing & Strategy",
        "Email Marketing Automation",
        "Performance Tracking & Reporting",
      ],
    },
    benefits: [
      {
        title: "Higher Online Visibility",
        description:
          "Rank higher on search engines and reach your target audience effectively.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Engagement Growth",
        description:
          "Boost engagement with creative campaigns and interactive content.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Conversion Optimization",
        description:
          "Turn visitors into loyal customers with targeted marketing strategies.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "Data-Driven Marketing",
        description:
          "We rely on analytics and metrics, not assumptions, to shape strategy.",
      },
      {
        title: "Full-Funnel Approach",
        description:
          "We focus on awareness, acquisition, conversion, and retention equally.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Help brands grow visibility and authority online.",
        "Boost engagement and customer retention through creative campaigns.",
        "Optimize performance through data analytics.",
      ],
    },
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "HTML5"],
      backend: ["Node.js", "Express.js", "PHP", "WordPress"],
      database: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      devops: ["AWS", "GitHub Actions", "Docker", "Vercel"],
      uiux: ["Figma", "Canva", "Adobe Photoshop", "Illustrator"],
      security: ["SSL/TLS", "OAuth", "Firewall", "Encryption"],
      languages: ["JavaScript", "PHP", "Python", "TypeScript"],
    },
  },

  // ================== 5. GRAPHICS DESIGN ==================
  {
    id: 5,
    category: "Graphics Design",
    article: {
      title: "Creative Graphic Design & Branding Solutions",
      description:
        "Our design team crafts visually appealing, memorable, and consistent brand experiences across digital and print platforms. From logos to product packaging, we bring creativity that inspires.",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/graphicsdesign-service.jpg",
    },
    coreText: {
      title: "Transforming Ideas into Visual Masterpieces",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/graphicsdesign-video.mp4",
      features: [
        "Logo and brand identity design",
        "Social media and advertising graphics",
        "Product packaging and marketing collateral",
        "Website & app interface design",
        "Illustration, typography, and infographics",
        "Corporate presentations & visual branding kits",
      ],
    },
    benefits: [
      {
        title: "Strong Brand Identity",
        description:
          "Build a consistent and recognizable brand across all touchpoints.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Creative & Modern Designs",
        description:
          "Our team stays up-to-date with design trends and color psychology.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Print & Digital Expertise",
        description:
          "We design for both digital and print mediums with perfect precision.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "Client-Centric Design Process",
        description:
          "We collaborate closely with clients to match their brand vision.",
      },
      {
        title: "Multi-Platform Design Expertise",
        description:
          "We deliver assets suitable for all digital platforms and marketing channels.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Create meaningful and visually appealing designs.",
        "Establish strong brand presence through visuals.",
        "Deliver top-quality designs optimized for both print and web.",
      ],
    },
    technologies: {
      frontend: ["Figma", "Adobe XD", "Sketch", "Canva"],
      backend: [],
      database: [],
      devops: [],
      uiux: ["Adobe Photoshop", "Illustrator", "InVision", "Balsamiq"],
      security: [],
      languages: ["N/A"],
    },
  },

  // ================== 6. CUSTOM SOFTWARE ==================
  {
    id: 6,
    category: "Custom Software",
    article: {
      title: "Custom Software Development Solutions",
      description:
        "We design and develop tailor-made software solutions that solve unique business challenges. From enterprise systems to SaaS products, our software ensures scalability, security, and efficiency.",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/customsoftware-service.jpg",
    },
    coreText: {
      title: "Tailor-Made Software for Unique Business Needs",
      video:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/customsoftware-video.mp4",
      features: [
        "Enterprise-level software architecture",
        "API development and system integrations",
        "Workflow automation & ERP systems",
        "Secure cloud deployment and hosting",
        "Custom dashboards & reporting tools",
        "Ongoing software support and scaling",
      ],
    },
    benefits: [
      {
        title: "End-to-End Development",
        description:
          "From ideation to deployment, we handle every stage with precision and transparency.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "Business Process Automation",
        description:
          "Automate repetitive tasks and boost efficiency using custom-built tools.",
        icon: "https://placehold.co/80x80",
      },
      {
        title: "High Security & Reliability",
        description:
          "We implement advanced security protocols and scalable architectures.",
        icon: "https://placehold.co/80x80",
      },
    ],
    whatMakesUsDifferent: [
      {
        title: "Fully Customized Approach",
        description:
          "We don’t use one-size-fits-all. Every software is built around your business logic.",
      },
      {
        title: "Scalable & Future-Proof",
        description:
          "Our systems are designed to grow with your company’s needs.",
      },
    ],
    mission: {
      imageUrl: "https://placehold.co/100x100",
      items: [
        "Build powerful, scalable software systems.",
        "Automate workflows and improve productivity.",
        "Deliver long-term maintenance and support.",
        "Ensure data security and performance optimization.",
      ],
    },
    technologies: {
      frontend: ["React", "Angular", "Vue.js", "Next.js"],
      backend: ["Node.js", "Express.js", "Django", "Spring Boot"],
      database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      devops: ["Docker", "AWS", "Terraform", "Kubernetes"],
      uiux: ["Figma", "Adobe XD", "Sketch", "InVision"],
      security: ["OWASP", "JWT", "SSL/TLS", "Firewall"],
      languages: ["JavaScript", "TypeScript", "Python", "Java"],
    },
  },
];

// image:
//         "https://pro-bucket.s3.us-east-1.amazonaws.com/1758182545169_webdevelopment-service-image.jpg",

//  video:
//         "https://pro-bucket.s3.us-east-1.amazonaws.com/1758162106739_ai+intrgrated+business+website-development.mp4",
