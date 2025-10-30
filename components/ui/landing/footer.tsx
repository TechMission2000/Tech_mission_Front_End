// import React from "react";
// import { LogoLoader } from "../LogoLoader";
// import TechMissionLogo from "../TechMissionLogo";
// import { LinkedinIcon } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import CustomButton from "../CustomButton";

// // --- Main Footer Component ---
// function Footer() {
//   const linkStyles =
//     "text-zinc-600 hover:text-blue-600 transition-colors duration-200";

//   return (
//     <footer className="font-sans bg-[#F8FAFC]">
//       <div
//         style={{
//           backgroundImage: `url(/footerbg.png)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
//       >
//         {/* Newsletter Section */}
//         <div
//           style={{
//             backgroundImage: `url(/subscribe.png)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="relative mb-24 p-8 rounded-2xl bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white overflow-hidden"
//         >
//           {/* Background decorative elements */}
//           <div className="absolute -top-14 -right-16 w-60 h-60 rounded-full border-[6px] border-gray-300/50" />
//           <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-[7px] border-slate-100/30" />

//           <div className="relative z-10 flex flex-col mx-auto text-center  items-center gap-8">
//             <h2
//               className="text-3xl text-center font-bold  lg:text-left"
//               style={{ fontFamily: "'Raleway', sans-serif" }}
//             >
//               Contact Us For The Service <br className="hidden sm:block" /> You
//               Want To Use
//             </h2>
//             <form className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <CustomButton variant="primary">Subscribe Now</CustomButton>
//             </form>
//           </div>
//         </div>

//         {/* Main Footer Links Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="">
//               <LogoLoader
//                 logoColor="#155DFC"
//                 customClass="h-10 w-10 md:h-14 md:w-14"
//               ></LogoLoader>
//               <p
//                 className="text-2xl md:text-2xl lg:text-3xl font-bold m-0 p-0 translate-y-1 text-blue-600"
//                 style={{
//                   fontFamily: "BellMT, 'Bell MT'",
//                   // fontSize: "40px",
//                   // margin: 0,
//                   // padding: 0,
//                   // color: "blue",

//                   //   fill: fillColor,
//                 }}
//               >
//                 TechMission
//               </p>
//               {/* <TechMissionLogo
//                 fillColor="red"
//                 textClassName=" font-bold text-2xl"
//               ></TechMissionLogo> */}
//             </div>

//             <p className=" text-zinc-600 max-w-xs">
//               Clarity gives you the blocks and components you need to create a
//               truly professional website.
//             </p>
//             <div className="flex items-center gap-4 mt-6">
//               <a
//                 href="#"
//                 className="p-2 rounded-full border border-zinc-300  bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white hover:text-white hover:border-blue-600 transition-all"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 rounded-full border border-zinc-300  bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white hover:border-blue-600 transition-all"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 rounded-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90  border border-blue-600 text-white"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 rounded-full border border-zinc-300  bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white hover:text-white hover:border-blue-600 transition-all"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Links Columns */}
//           <div>
//             <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
//               Company
//             </h4>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <a href="/about" className={linkStyles}>
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/careers" className={linkStyles}>
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="/work" className={linkStyles}>
//                   Works
//                 </a>
//               </li>
//               <li>
//                 <a href="/careers" className={linkStyles}>
//                   Career
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
//               Help
//             </h4>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <a href="/contact" className={linkStyles}>
//                   Customer Support
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Delivery Details
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
//               Resources
//             </h4>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Free eBooks
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Development Tutorial
//                 </a>
//               </li>
//               <li>
//                 <a href="/blogs" className={linkStyles}>
//                   How to - Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className={linkStyles}>
//                   Youtube Playlist
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* Copyright section */}
//       <div
//         style={{
//           backgroundImage: "url(/copyrightbg.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="mt-16 py-8 border-t border-zinc-200 text-center text-zinc-500"
//       >
//         <p>© {new Date().getFullYear()} all Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { LogoLoader } from "../LogoLoader";

// --- Main Footer Component ---
function Footer() {
  const linkStyles =
    "text-zinc-600 hover:text-blue-600 transition-colors duration-200";

  return (
    <footer className="font-sans bg-[#F8FAFC]">
      <div
        style={{
          backgroundImage: `url(/footerbg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
      >
        <div className="">
          {/* Newsletter Section */}
          <div
            style={{
              backgroundImage: `url(/subscribe.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative mb-24 p-8 rounded-2xl bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-14 -right-16 w-60 h-60 rounded-full border-[6px] border-gray-300/50" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-[7px] border-slate-100/30" />

            <div className="relative z-10 flex flex-col mx-auto text-center items-center gap-8">
              <h2
                className="text-3xl text-center font-bold lg:text-left"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Contact Us For The Service <br className="hidden sm:block" />{" "}
                You Want To Use
              </h2>
              <form className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <CustomButton variant="primary">Subscribe Now</CustomButton>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 px-4">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-1">
              <div className="pb-6 mb-6 relative">
                <div className="absolute bottom-0 left-0 -right-12 h-[1px] bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 hidden md:block" />
                <div className="flex items-center gap-2 mb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-0.5 md:gap-1"
                    prefetch={false}
                  >
                    <div className="flex-shrink-0">
                      <LogoLoader
                        logoColor="#155DFC"
                        customClass="h-10 w-10 md:h-14 md:w-14"
                      />
                    </div>
                    <p
                      className="text-2xl md:text-2xl lg:text-3xl font-bold m-0 p-0 translate-y-1 text-blue-600"
                      style={{
                        fontFamily: "BellMT, 'Bell MT'",
                        // fontSize: "40px",
                        // margin: 0,
                        // padding: 0,
                        // color: "blue",

                        //   fill: fillColor,
                      }}
                    >
                      TechMission
                    </p>
                  </Link>
                  {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  <p className="text-2xl font-bold text-blue-600">
                    TechMission
                  </p> */}
                </div>

                <p className="text-zinc-600 text-sm max-w-xs">
                  Clarity gives you the blocks and components you need to create
                  a truly professional website.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-zinc-600">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">📍</span>
                  <p>
                    H#180/6, R#Titas Road, East Rampura Dhaka-1219, Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">📞</span>
                  <p>+880 1 838 801 853</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">✉️</span>
                  <p>office.techmission@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Middle Column - Explore and Legal */}
            <div className="lg:col-span-1 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hidden md:block" />

              {/* Explore Section */}
              <div className="pb-6 mb-6 relative">
                <div className="absolute bottom-0 -left-8 -right-12 h-[1px] bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 hidden md:block" />
                <h4 className="font-semibold text-zinc-900 text-base mb-6">
                  Explore
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className={linkStyles}>
                      About
                    </Link>
                    {/* <a href="/about" className={linkStyles}>
                      About
                    </a> */}
                  </li>
                  <li>
                    <Link href="/services" className={linkStyles}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className={linkStyles}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/work" className={linkStyles}>
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className={linkStyles}>
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h4 className="font-semibold text-zinc-900 text-base mb-6">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className={linkStyles}>
                      Contact Us <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className={linkStyles}>
                      Privacy Policy <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className={linkStyles}>
                      Terms & Conditions <span>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - CTA and Social */}
            <div className="lg:col-span-1 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hidden md:block" />

              <div className="mb-12">
                <h4 className="font-semibold text-zinc-900 text-base mb-6">
                  Would like to talk about your future project?
                </h4>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 rounded-lg text-zinc-900 hover:ring-1 transition-colors hover:bg-opacity-0 font-bold"
                >
                  Get In Touch <span>→</span>
                </Link>
              </div>

              {/* Social Media Section */}
              <div>
                <h4 className="font-semibold text-zinc-900 text-base mb-4">
                  Follow Us On Social Media
                </h4>
                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/techmissionglobe"
                    target="_blank"
                    className="p-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                  >
                    <FaFacebook size={16} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/techmissionglobe/"
                    target="_blank"
                    className="p-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                  >
                    <FaLinkedin size={16} />
                  </Link>

                  <Link
                    href="https://x.com/TechMissio93153?t=cQtGopkqyutrhRAQAyKS9w&s=08"
                    target="_blank"
                    className="p-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                  >
                    <FaTwitter size={16} />
                  </Link>

                  <Link
                    href="https://www.youtube.com/@techmissionglove"
                    target="_blank"
                    className="p-2 rounded-full  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                  >
                    <FaYoutube size={16} />
                  </Link>
                  <Link
                    href="https://wa.me/8801838801853?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    className="p-2 rounded-full  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                  >
                    <FaWhatsapp size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div
          style={{
            backgroundImage: "url(/copyrightbg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="mt-16  border-t border-zinc-200 text-center text-zinc-500"
        >
          <p>© {new Date().getFullYear()} all Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
