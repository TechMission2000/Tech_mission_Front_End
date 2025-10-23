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
    { id: 1, name: "AI & ML Services", active: true },
    { id: 2, name: "App Development", active: false },
    { id: 3, name: "Website Development", active: false },
    { id: 4, name: "Digital Marketing", active: false },
    { id: 5, name: "Graphics Design", active: false },
    { id: 6, name: "Custom Software", active: false },
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
