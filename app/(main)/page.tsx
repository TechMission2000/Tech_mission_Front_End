import { AboutUs } from "@/components/ui/landing/about-us";
import Blog from "@/components/ui/landing/Blog";
import { FAQ } from "@/components/ui/landing/faq";
import { Hero } from "@/components/ui/landing/hero";
import { HowItWorks } from "@/components/ui/landing/HowItWorks";
import { OurValue } from "@/components/ui/landing/OurValue";
import Portfolio from "@/components/ui/landing/Portfolio";
import { ServicesMarquee } from "@/components/ui/landing/services-marquee";
import ServicesOffer from "@/components/ui/landing/ServicesOffer";
import { Testimonials } from "@/components/ui/landing/Testimonials";
import WhatWeDo from "@/components/ui/landing/WhatWeDo";
import WhyChooseUs from "@/components/ui/landing/WhyChooseUs";
import WorkProcess from "@/components/ui/landing/WorkProcess";
import Team from "@/components/ui/service/Team";
import { Contact } from "lucide-react";
import ExpertiseService from "@/components/ui/landing/ExperticeService";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* <TopHeader />
      <Header /> */}
      <Hero />
      <ServicesMarquee />
      <AboutUs />
      <HowItWorks />
      <ServicesOffer />
      <OurValue />
      <WhyChooseUs />
      <WorkProcess />
      <WhatWeDo />
      <ExpertiseService />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Blog />
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </main>
  );
}
