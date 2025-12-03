"use client";

import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="max-w-7xl mx-auto my-10 bg-neutral-50 py-16">
      <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-300 gap-10">
        {/* General Inquiries */}
        <div className="flex-1 flex flex-col gap-6 px-6 ">
          <h3 className="text-xl font-semibold text-gray-900">
            General Inquiries
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="mailto:example@gmail.com"
              className="flex items-center justify-between bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white px-5 py-3 rounded-md hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>techmissionglobe@gmail.com</span>
              </div>
              <ArrowUpRight size={18} className="text-white font-medium" />
            </Link>
            <Link
              href="tel:+11234567890"
              className="flex items-center justify-between bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white px-5 py-3 rounded-md hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+88 01 838 801 853</span>
              </div>
              <ArrowUpRight size={18} className="text-white font-medium" />
            </Link>
          </div>
        </div>

        {/* Our Office */}
        <div className="flex-1 flex flex-col gap-6 px-6">
          <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
          <p className="text-gray-700">Address: Dhaka, Bangladesh</p>
          {/* <p className="text-gray-700">
            Address: H#180/6, R#Titas Road, East Rampura, Dhaka, Bangladesh
          </p> */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-900 px-5 py-3 rounded-md text-blue-600 hover:bg-blue-50 transition"
          >
            <MapPin size={18} />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Connect with Us */}
        <div className="flex-1 flex flex-col gap-6 pl-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Connect with Us
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/techmissionglobe"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/techmissionglobe/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="https://wa.me/8801838801853?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <FaWhatsapp size={22} />
            </Link>
            {/* <Link
              href="https://x.com/TechMissio93153?t=cQtGopkqyutrhRAQAyKS9w&s=08"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <Twitter size={22} />
            </Link> */}

            {/* <Link
              href="https://www.youtube.com/@techmissionglove"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
            >
              <FaYoutube size={22} />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
