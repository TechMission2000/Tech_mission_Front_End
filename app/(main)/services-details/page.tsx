import ServicBanner from "@/components/ui/service/Banner";
import BenefitsDifferentiatorsSection from "@/components/ui/services-details/BenefitsDifferentiatorsSection";
import ServiceMissionSection from "@/components/ui/services-details/ServiceMissionSection";
import ServiceSection from "@/components/ui/services-details/ServiceSection";
import TechnologySection from "@/components/ui/services-details/TechnologySection";
import VideoContentSection from "@/components/ui/services-details/VideoContentSection";
import { servicesData } from "@/data/servicesData"; 

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ServiceDetailspage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedCategory = params.category || "Web Development & Design";

  const videoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758160755855_serviecs-details-for-ai-intregrated+web+and+moblie+web.mp4";
  const title = "Our Services";
  const subtitle = "Home / Services Details";

  const categoryList = [
    { id: 1, name: "Web Development & Design", active: true },
    { id: 2, name: "Backend", active: false },
    { id: 3, name: "Product Management", active: false },
    { id: 4, name: "UX/UI Design", active: false },
    { id: 5, name: "Cloud Services", active: false },
    { id: 6, name: "AI & ML Services", active: false },
    { id: 7, name: "Digital Marketing", active: false },
  ];

  return (
    <div>
      <ServicBanner videoUrl={videoUrl} title={title} subtitle={subtitle} />
      <ServiceSection
        categoryList={categoryList}
        servicesData={servicesData}
        initialCategory={selectedCategory}
      />
      <VideoContentSection
        servicesData={servicesData}
        initialCategory={selectedCategory}
      />
      <BenefitsDifferentiatorsSection
        servicesData={servicesData}
        initialCategory={selectedCategory}
      />
      <ServiceMissionSection
        servicesData={servicesData}
        initialCategory={selectedCategory}
      />
      <TechnologySection
        servicesData={servicesData}
        initialCategory={selectedCategory}
      />
    </div>
  );
}
