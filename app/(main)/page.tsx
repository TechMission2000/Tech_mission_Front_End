import { AboutUs } from "@/components/ui/landing/about-us";
import Blog from "@/components/ui/landing/Blog";

import ExperticeService from "@/components/ui/landing/ExperticeService";
import Faq from "@/components/ui/landing/faq";

import Footer from "@/components/ui/landing/footer";

import { Header } from "@/components/ui/landing/header";
import { Hero } from "@/components/ui/landing/hero";
import { HowItWorks } from "@/components/ui/landing/HowItWorks";
import OurPortfolioProjects from "@/components/ui/landing/OurPortfolioProjects";
import { OurValue } from "@/components/ui/landing/OurValue";
import Portfolio from "@/components/ui/landing/Portfolio";
import { ServicesMarquee } from "@/components/ui/landing/services-marquee";
import ServicesOffer from "@/components/ui/landing/ServicesOffer";
import Testimonials from "@/components/ui/landing/Testimonials";

import TopHeader from "@/components/ui/landing/topHeader";

import WhatWeDo from "@/components/ui/landing/WhatWeDo";
import WhyChooseUs from "@/components/ui/landing/WhyChooseUs";
import WorkProcess from "@/components/ui/landing/WorkProcess";
import Team from "@/components/ui/service/Team";

import ExpertiseService from "@/components/ui/landing/ExperticeService";
import Chatbot from "@/components/chat/Chatbot";
import ContactInFo from "@/components/ui/landing/Contect";
import GetInTuch from "@/components/ui/landing/Contect";
import Contect from "@/components/ui/landing/Contect";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <ServicesMarquee />
      <AboutUs />
      <HowItWorks />
      <ServicesOffer />
      <OurValue />
      <WhyChooseUs />
      <WorkProcess />
      {/* <WhatWeDo /> */}
      <ExperticeService />
      <OurPortfolioProjects />
      <Team />
      {/* <Team /> */}
      <Blog />
      <Testimonials />

      <Faq />
      <Contect></Contect>
      {/* <div className="bg-black w-full">
        <Chatbot />
      </div> */}
    </main>
  );
}
