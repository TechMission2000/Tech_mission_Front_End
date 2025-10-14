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
            <a
              href="mailto:example@gmail.com"
              className="flex items-center justify-between bg-zinc-800 text-white px-5 py-3 rounded-md hover:bg-zinc-700 transition"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>techmissionglobe@gmail.com</span>
              </div>
              <ArrowUpRight size={18} className="text-yellow-400" />
            </a>
            <a
              href="tel:+11234567890"
              className="flex items-center justify-between bg-zinc-800 text-white px-5 py-3 rounded-md hover:bg-zinc-700 transition"
            >
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+88 01 838 801 853</span>
              </div>
              <ArrowUpRight size={18} className="text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Our Office */}
        <div className="flex-1 flex flex-col gap-6 px-6">
          <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
          <p className="text-gray-700">
            Address: H#180/6, R#Titas Road, East Rampura, Dhaka, Bangladesh
          </p>
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
            <a
              href="https://linkedin.com"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://instagram.com"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-pink-500 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-sky-500 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
