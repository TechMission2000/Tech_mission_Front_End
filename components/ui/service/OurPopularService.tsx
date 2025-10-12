"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import ServiceSlider from "./ServiceSlider";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const categoryList = [
  { id: 1, name: "", active: true },
  { id: 2, name: "", active: false },
  { id: 3, name: "", active: false },
  { id: 4, name: "", active: false },
  { id: 5, name: "", active: false },
  { id: 6, name: "Custom Software", active: false },
];

const services: Service[] = [
  {
    id: 1,
    title: "AI & ML Services",
    description:
      "Get more website traffic, more customers for your social channel",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358380_182a8b885bf54b7ae91b4c96e363a36def2d4aa1.png",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Send targeted email campaigns to engage your audience and drive conversions.",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358381_34b17d523693bd2c8e2734f81c61e672fa88e696.png",
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Run effective advertising campaigns on Google and Meta platforms to increase visibility and conversions.",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358470_93e86d346166b261aa8c7e28d5b1925f2d91d0ac.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "You can provide the answers that your potential customers are trying to find, so you can become the industry.",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358565_64283b58e06d55bf75b69e0469696f6aa96c635d.png",
  },
  {
    id: 5,
    title: "Graphics Design",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358766_93a0ef98522157946b8734e13ac97476444df191.png",
  },
  {
    id: 6,
    title: "Custom Software",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358380_182a8b885bf54b7ae91b4c96e363a36def2d4aa1.png",
  },
  {
    id: 7,
    title: "Wordpress Development",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358381_34b17d523693bd2c8e2734f81c61e672fa88e696.png",
  },
  {
    id: 8,
    title: "AI & ML Services",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358470_93e86d346166b261aa8c7e28d5b1925f2d91d0ac.png",
  },
  {
    id: 9,
    title: "App Development",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358565_64283b58e06d55bf75b69e0469696f6aa96c635d.png",
  },
  {
    id: 10,
    title: "Website Development",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
    icon: "https://pro-bucket.s3.us-east-1.amazonaws.com/1758055358766_93a0ef98522157946b8734e13ac97476444df191.png",
  },
];

const OurPopularService: React.FC = () => {
  return (
    <div className="w-full pb-10 pt-20 bg-white">
      <div className="text-center">
        <h2 className="text-5xl font-['Roboto_Condensed'] font-medium text-zinc-800">
          Our Popular <span className="text-sky-700">Services</span>
        </h2>
        <p className="mt-2 text-lg text-zinc-800 font-['Lato']">
          We ensure you have every functionality you need to build, run, and
          expand your marketplace
        </p>
      </div>

      {/* ✅ client-only Swiper component */}
      <ServiceSlider services={services} />
    </div>
  );
};

export default OurPopularService;
