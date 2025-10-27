"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { LogoLoader } from "../LogoLoader";

// Navigation links for the main menu
const mainNavLinks = [
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blogs" },
  { title: "Work", link: "/work" },
  { title: "Contact", link: "/contact" },
  { title: "Careers", link: "/careers" },
];
// Links for the "Services" dropdown
const servicesLinks = [
  {
    title: "ALL Services",
    href: "/services",
  },
  {
    title: "Service Details",
    href: "/services-details",
  },
];

export function Header() {
  const router = useRouter();

  const handleGetInTouch = () => {
    console.log("click button");
    router.push("/contact");
  };

  return (
    // <header className="sticky top-0 z-50 w-full bg-[#072D5B] lg:h-24 md:h-20 h-16 ">
    //   <div className="container mx-auto flex lg:h-24 md:h-20 h-16 items-center justify-between px-4 md:px-6 ">
    //     {/* Logo */}
    //     <Link
    //       href="/"
    //       className="flex items-center gap-0.5 md:gap-1"
    //       prefetch={false}
    //     >
    //       <div className="flex-shrink-0">
    //         <LogoLoader
    //           logoColor="white"
    //           customClass="h-10 w-10 md:h-14 md:w-14"
    //         />
    //       </div>
    //       <p
    //         className="text-2xl md:text-2xl lg:text-3xl font-bold m-0 p-0 translate-y-1 text-white"
    //         style={{
    //           fontFamily: "BellMT, 'Bell MT'",
    //           // fontSize: "40px",
    //           // margin: 0,
    //           // padding: 0,
    //           // color: "blue",

    //           //   fill: fillColor,
    //         }}
    //       >
    //         TechMission
    //       </p>
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
    //       <Link
    //         href="/"
    //         className="px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-brand-secondary to-brand-primary rounded-lg shadow-md transition-transform hover:scale-105"
    //         prefetch={false}
    //       >
    //         Home
    //       </Link>

    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <button className="flex items-center gap-1 text-base font-semibold text-white hover:text-brand-light-blue transition-colors outline-none">
    //             Services <ChevronDown className="h-4 w-4" />
    //           </button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent className="w-48 bg-white rounded-md shadow-lg p-2">
    //           {servicesLinks.map((link) => (
    //             <DropdownMenuItem
    //               key={link.title}
    //               asChild
    //               className="data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-blue-900 data-[highlighted]:via-blue-500 data-[highlighted]:to-blue-600 data-[highlighted]:text-white"
    //             >
    //               <Link href={link.href} className="w-full block">
    //                 {link.title}
    //               </Link>
    //             </DropdownMenuItem>
    //           ))}
    //         </DropdownMenuContent>
    //       </DropdownMenu>

    //       {mainNavLinks.map((item) => (
    //         <Link
    //           key={item.link}
    //           href={item.link}
    //           className="text-base font-semibold text-white hover:text-brand-light-blue transition-colors"
    //           prefetch={false}
    //         >
    //           {item.title}
    //         </Link>
    //       ))}
    //     </nav>

    //     {/* Get in Touch Button */}
    //     <div className="hidden lg:block">
    //       <Button
    //         onClick={handleGetInTouch}
    //         className="bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white font-bold shadow-lg transition-transform hover:scale-105"
    //       >
    //         Get In Touch
    //       </Button>
    //     </div>

    //     {/* Mobile Menu Trigger */}
    //     <Sheet>
    //       <SheetTrigger asChild>
    //         <button className="lg:hidden">
    //           <svg
    //             width="40"
    //             height="40"
    //             viewBox="0 0 40 40"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <rect width="40" height="40" rx="2" fill="#106CD8" />
    //             <path
    //               d="M12 14H28M12 20H28M21 26H28"
    //               stroke="white"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </button>
    //       </SheetTrigger>
    //       <SheetContent side="right">
    //         <div className="grid gap-6 p-6">
    //           <Link href="#" className="text-lg font-medium">
    //             Home
    //           </Link>
    //           <h4 className="font-semibold text-gray-500">Services</h4>
    //           {servicesLinks.map((link) => (
    //             <Link
    //               key={link.title}
    //               href={link.href}
    //               className="pl-4 text-lg text-gray-800 hover:text-brand-primary"
    //             >
    //               {link.title}
    //             </Link>
    //           ))}
    //           <hr />
    //           {mainNavLinks.map((item) => (
    //             <Link
    //               key={item.link}
    //               href={item.link}
    //               className="text-lg font-medium hover:text-brand-primary"
    //             >
    //               {item.title}
    //             </Link>
    //           ))}
    //           <Button className="w-full mt-4" onClick={handleGetInTouch}>
    //             Get In Touch
    //           </Button>
    //         </div>
    //       </SheetContent>
    //     </Sheet>
    //   </div>
    // </header>
    <header className="sticky top-0 z-50 w-full lg:h-24 md:h-20 h-16 bg-black/50">
      <div className="container mx-auto flex lg:h-24 md:h-20 h-16 items-center justify-between px-4 md:px-6 ">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-0.5 md:gap-1"
          prefetch={false}
        >
          <div className="flex-shrink-0">
            <LogoLoader
              logoColor="white"
              customClass="h-10 w-10 md:h-14 md:w-14"
            />
          </div>
          <p
            className="text-2xl md:text-2xl lg:text-3xl font-bold m-0 p-0 translate-y-1 text-white"
            style={{
              fontFamily: "BellMT, 'Bell MT'",
            }}
          >
            TechMission
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className="px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-brand-secondary to-brand-primary rounded-lg shadow-md transition-transform hover:scale-105"
            prefetch={false}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-base font-semibold text-white hover:text-brand-light-blue transition-colors outline-none">
                Services <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white rounded-md shadow-lg p-2">
              {servicesLinks.map((link) => (
                <DropdownMenuItem
                  key={link.title}
                  asChild
                  className="data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-blue-900 data-[highlighted]:via-blue-500 data-[highlighted]:to-blue-600 data-[highlighted]:text-white"
                >
                  <Link href={link.href} className="w-full block">
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-base font-semibold text-white hover:text-brand-light-blue transition-colors"
              prefetch={false}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Get in Touch Button */}
        <div className="hidden lg:block">
          <Button
            onClick={handleGetInTouch}
            className="bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white font-bold shadow-lg transition-transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="2" fill="#106CD8" />
                <path
                  d="M12 14H28M12 20H28M21 26H28"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <h4 className="font-semibold text-gray-500">Services</h4>
              {servicesLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="pl-4 text-lg text-gray-800 hover:text-brand-primary"
                >
                  {link.title}
                </Link>
              ))}
              <hr />
              {mainNavLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-lg font-medium hover:text-brand-primary"
                >
                  {item.title}
                </Link>
              ))}
              <Button className="w-full mt-4" onClick={handleGetInTouch}>
                Get In Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
