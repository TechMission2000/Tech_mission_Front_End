import Contact from "@/components/ui/landing/Contact";
import Portfolio from "@/components/ui/landing/Portfolio";
import WhatWeDo from "@/components/ui/landing/WhatWeDo";
import ServicBanner from "@/components/ui/service/Banner";
import OurPopularService from "@/components/ui/service/OurPopularService";
import OurTopService from "@/components/ui/service/OurTopService";
import Team from "@/components/ui/service/Team";
import ExperticeService from "@/components/ui/landing/ExperticeService";
import OurPortfolioProjects from "@/components/ui/landing/OurPortfolioProjects";

export default function Servicespage() {
  const videoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758017210717_serviceBanner.mp4";
  // const localUrl = "/service/serviceBanner.mp4";
  const title = "Our Services";
  const subtitle = "Home / Services";

  return (
    <div>
      <ServicBanner videoUrl={videoUrl} title={title} subtitle={subtitle} />
      <WhatWeDo />
      <OurPopularService />
      <OurTopService />
      <ExperticeService />
      <Team />
      <OurPortfolioProjects />
      <Contact />
    </div>
  );
}
