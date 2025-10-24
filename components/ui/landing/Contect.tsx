import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

// Reusable component for contact information items
const ContactInfoItem = ({ icon, title, details }: any) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-raleway font-bold text-blue-600">{title}</h3>
      <div className="mt-1 text-base font-raleway font-medium text-gray-600">
        {details.map((line: string, index: number) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

// Reusable component for social media icons
const SocialIcon = ({ icon }: any) => (
  <a
    href="#"
    className="w-14 h-14 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white rounded-lg flex items-center justify-center   transition-colors hover:bg-blue-700 hover:cursor-pointer"
  >
    {icon}
  </a>
);

function Contect() {
  return (
    <section
      style={{
        backgroundImage: "url('/contactimg.png')",
        backgroundSize: "cover",
      }}
      className=" py-16 sm:py-24 font-raleway"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Hey! Let’s Talk
          </p>
        </div>

        {/* Main content grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white/20 p-8 rounded-lg">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-lg border bg-white "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg border bg-white "
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 rounded-lg border bg-white "
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 rounded-lg border bg-white "
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors hover:cursor-pointer"
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg flex flex-col gap-8">
            <ContactInfoItem
              icon={
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
              title="Call Anytime"
              details={["+880 1 838 801 853"]}
            />
            <ContactInfoItem
              icon={
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Send Email"
              details={[
                "contact.techmission@gmail.com",
                "office.techmission@gmail.com",
              ]}
            />
            <ContactInfoItem
              icon={
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              title="Visit Us"
              details={[
                "H#180/6, R#Titas Road, East Rampura",
                "Dhaka-1219, Bangladesh",
              ]}
            />

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-raleway font-bold text-blue-600 text-center">
                Follow us
              </h3>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.facebook.com/techmissionglobe"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
                >
                  <FaFacebook size={22} />
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
                <Link
                  href="https://x.com/TechMissio93153?t=cQtGopkqyutrhRAQAyKS9w&s=08"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
                >
                  <Twitter size={22} />
                </Link>

                <Link
                  href="https://www.youtube.com/@techmissionglove"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-b from-[#072D5B] via-[#106CD8] to-blue-500/90  text-white hover:bg-blue-700 hover:cursor-pointer transition"
                >
                  <FaYoutube size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contect;
