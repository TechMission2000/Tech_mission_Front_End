import AboutHero from '@/components/about/AboutHero';
import GetIntouch from '@/components/about/GetIntouch';
import OurMission from '@/components/about/Ourmission';
import OurProcess from '@/components/about/OurProcess';
import OurStory from '@/components/about/OurStory';
import { AboutUs } from '@/components/ui/landing/about-us';
import Testimonials from '@/components/ui/landing/Testimonials';
import WhyChooseUs from '@/components/ui/landing/WhyChooseUs';
import Team from '@/components/ui/service/Team';
import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <AboutHero/>
      <AboutUs/>
      <OurMission/>
      <OurStory/>
      <WhyChooseUs/>
      <Team/>
      <Testimonials/>
      {/* <OurProcess/> */}
      <GetIntouch/>

    </div>
  );
}
