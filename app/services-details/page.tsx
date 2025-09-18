export default function ServiceDetailspage() {
  const backgroundVedieoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758160755855_serviecs-details-for-ai-intregrated+web+and+moblie+web.mp4";

  const videoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758017210717_serviceBanner.mp4";
  // const localUrl = "/service/serviceBanner.mp4";
  const title = "Our Services";
  const subtitle = "Home / Services";

  const servicesData = [
    {
      id: 1, // ✅ Unique ID added
      category: "Website Development & Design",
      article: {
        title: "Web Development & Design",
        description:
          "We create scalable, secure, and modern websites tailored to your business needs. Our designs are responsive, user-friendly, and optimized for performance.",
        image:
          "https://pro-bucket.s3.us-east-1.amazonaws.com/1758162106739_ai+intrgrated+business+website-development.mp4", // Replace with your real image
      },
      coreText: {
        title: "We Serve The Best Work",
        text: "Our solutions are designed to deliver exceptional quality and business value. From simple websites to complex applications, we ensure robust functionality, speed, and reliability.",
        video: "https://placehold.co/600x400.mp4", // Replace with your real video
        features: [
          "User solutions & enterprise customers",
          "Successful software & business practices",
          "Special contracts risk-free",
          "Skilled and talented staff (offshore or inspired)",
        ],
      },
      benefits: [
        {
          title: "Flexible Solutions",
          description:
            "Completely grow multimedia-based content before global scenarios.",
          icon: "https://placehold.co/80x80",
        },
        {
          title: "24/7 Unlimited Support",
          description:
            "Our support team is available anytime to resolve your issues quickly.",
          icon: "https://placehold.co/80x80",
        },
        {
          title: "Expert IT Consulting",
          description:
            "Offering strategic guidance to optimize your IT infrastructure and enhance performance.",
          icon: "https://placehold.co/80x80",
        },
        {
          title: "Advanced Security Features",
          description:
            "Protects your site with the latest encryption and protocols.",
          icon: "https://placehold.co/80x80",
        },
      ],
      whatMakesUsDifferent: [
        {
          title: "TECHNICAL EXPERTISE",
          description:
            "Our deep technical expertise allows us to take on projects often perceived as too complex by others.",
        },
        {
          title: "INTELLIGENT SOLUTION",
          description:
            "We craft smart, efficient, and cost-effective solutions tailored for your business.",
        },
        {
          title: "PARTNERSHIP",
          description:
            "We work as a true partner, not just a vendor, ensuring long-term success.",
        },
      ],
      mission: [
        "We understand the business needs of our clients, and how technology can make businesses more profitable.",
        "We create new teams for each project, ensuring the best possible combination of skills and experience.",
        "Providing high-quality software development services and consulting.",
        "Improving communication and data exchange (Business to Business).",
        "Providing our customers with Value for Money.",
        "Providing our employees with meaningful work and advancement opportunities.",
      ],
      technologies: {
        frontend: ["React", "Next.js", "Vue.js"],
        backend: ["Node.js", "Express.js", "Django"],
        database: ["MongoDB", "PostgreSQL", "MySQL"],
        devops: ["Docker", "AWS", "CI/CD"],
        languages: ["JavaScript", "TypeScript", "Python", "Java"],
      },
    },
  ];

  return (
    <div>
      <ServicBanner videoUrl={videoUrl} title={title} subtitle={subtitle} />
    </div>
  );
}
