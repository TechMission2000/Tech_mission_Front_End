"use client";

import Image from 'next/image';
import React, { JSX, useState } from 'react';

// Define the type for a single FAQ item
type FaqItem = {
  question: string;
  answer: string;
};

// Data for the FAQ section
const faqData: FaqItem[] = [
  {
    question: 'What services does Tech Mission provide?',
    answer: 'Tech Mission offers a comprehensive suite of digital services, including web design and development, mobile app development, UI/UX design, website migration, HubSpot integration, and email marketing solutions.',
  },
  {
    question: 'How can Tech Mission help my business grow?',
    answer: 'We focus on delivering results-driven solutions. By combining creativity and technical expertise, we create digital products that drive business growth, enhance user experiences, and provide a competitive advantage in the market.',
  },
  {
    question: 'What is your process for starting a new project?',
    answer: 'Our process begins with a deep dive into your business goals. We then move to strategy, design, development, testing, and launch, maintaining transparent communication with you at every stage to ensure the final product exceeds your expectations.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline for a website project varies depending on its complexity. A simple informational site might take 4-6 weeks, while a more complex e-commerce platform could take 3-6 months. We provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we value long-term partnerships. We offer ongoing support, maintenance, and updates to ensure your digital products continue to perform optimally and stay secure long after the initial launch.',
  },
    {
    question: 'How much does a new website or app cost?',
    answer: 'The cost is dependent on the scope and features of the project. We provide a detailed, custom quote after understanding your specific requirements. Contact us for a free consultation and estimate.',
  },
];

// Reusable component for a single accordion item
const AccordionItem = ({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => (
    <div className={`border-b border-gray-200 transition-all duration-300 ${isOpen ? 'bg-blue-500/5 border-l-4 border-l-blue-500' : 'bg-white'}`}>
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left p-6"
        >
            <div className="flex items-center gap-6">
                 <div className="flex-shrink-0 w-14 h-14 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                    <span className="font-barlow font-bold text-2xl">{`0${index + 1}`}</span>
                </div>
                <h3 className={`font-lato font-semibold text-lg ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
                    {faq.question}
                </h3>
            </div>
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path>
                </svg>
            </div>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
            <p className="font-lato text-gray-600 p-6 pt-0 pl-28">
                {faq.answer}
            </p>
        </div>
    </div>
);


function Faq(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Set the second item to be open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{backgroundImage: `url(/faqbg.png)`, backgroundSize: 'cover'}} className=" py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-4xl text-[#072D5B]">
            Frequently Asked Questions
          </h2>
          <p className="font-lato font-semibold text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Still have any questions? Contact our team via <a href="mailto:hello@TechMission.com" className="text-blue-600 hover:underline">hello@TechMission.com</a>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Accordion Section */}
          <div className="lg:col-span-2">
             <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {faqData.map((faq, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
                ))}
             </div>
          </div>
          
          {/* Contact Card Section */}
          <div className="flex flex-col gap-8 items-center">
        <Image
          src={'/FAQs.png'}
          alt="Contact Us Image"
          width={500}
          height={500}
          className="w-full h-auto max-w-md lg:max-w-none rounded-lg "
        />
            <div className="w-full max-w-sm text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-barlow font-bold text-2xl text-gray-800">Any Questions?</h3>
              <p className="font-lato text-gray-600 mt-2">
                You can ask anything you want to know.
              </p>
              <form className="mt-6">
                <input 
                  type="text" 
                  placeholder="Enter Here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                 <button type="submit" className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
