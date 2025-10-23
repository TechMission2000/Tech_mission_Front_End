import TopServiceHeroBanner from "./TopServiceHeroBanner";

const categoryList = [
  { id: 1, name: "AI & ML Services", active: true },
  { id: 2, name: "App Development", active: false },
  { id: 3, name: "Website Development", active: false },
  { id: 4, name: "Digital Marketing", active: false },
  { id: 5, name: "Graphics Design", active: false },
  { id: 6, name: "Custom Software", active: false },
];

export default function OurTopService() {
  const topServicesData = [
    {
      title: "AI & ML Services",
      category: "AI & ML Services",
      description:
        "We build fast, secure, and scalable websites tailored to your business needs with modern technologies.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074828916_website%20development.png",
      backgroundColor: "bg-white",
      reverse: false,
    },
    {
      title: "App Development",
      category: "App Development",
      description:
        "Get custom WordPress solutions for blogs, business sites, and e-commerce with SEO-friendly designs.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074811490_Mobile%20App%20Development.png",
      backgroundColor: "bg-gradient-to-b from-neutral-50 to-neutral-50",
      reverse: true,
    },
    {
      title: "Website Development",
      category: "Website Development",
      description:
        "Comprehensive IT solutions including cloud, infrastructure, and managed services for seamless operations.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074806726_all-services.png",
      backgroundColor: "bg-white",
      reverse: false,
    },

    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, social media marketing, PPC, and content strategies.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074809248_digital-marketing.png",
      backgroundColor: "bg-white",
      reverse: false,
    },
    {
      title: "Graphics Design",
      description:
        "Create powerful e-commerce platforms that deliver seamless shopping experiences across devices.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074810317_E-commerce.png",
      backgroundColor: "bg-gradient-to-b from-neutral-50 to-neutral-50",
      reverse: true,
    },
    {
      title: "Custom Software",
      description:
        "Build cross-platform mobile apps with engaging UI/UX, optimized for performance and scalability.",
      buttonText: "Read More",
      imageUrl:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758074806726_all-services.png",
      backgroundColor: "bg-white",
      reverse: false,
    },
  ];

  return (
    <div className="px-4">
      {/* Section Header */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
          Our Top <span className="text-sky-700">Services</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          We ensure you have every functionality you need to build, run, and
          expand your marketplace
        </p>
      </div>

      {/* Service Banners */}
      <div className="mt-12 flex flex-col gap-12">
        {topServicesData.map((service, index) => (
          <TopServiceHeroBanner key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
