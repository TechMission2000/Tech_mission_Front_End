'use client';
import Image from 'next/image';
import React, { JSX } from 'react';

// Define the type for a single testimonial item
type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

// Data for the testimonials
const testimonialData: Testimonial[] = [
  {
    name: 'Samuel Karl',
    title: 'CEO, Company Inc.',
    quote: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
 
  },
  {
    name: 'Daria Linney',
    title: 'Founder, Startup Co.',
    quote: 'The team at Tech Mission transformed our vision into a stunning reality. Their attention to detail and commitment to excellence are second to none. We couldn\'t be happier with the final product.',
  },
  {
    name: 'John Anderson',
    title: 'Marketing Director',
    quote: 'Working with them was a seamless experience from start to finish. Their expertise in the digital landscape helped us achieve significant growth in a very short amount of time. Highly recommended!',
  },
];

// Reusable component for a single testimonial card
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
    <div className="bg-gray-100 p-8 rounded-lg h-full relative">
       <div className="absolute top-6 right-6 text-blue-500 text-5xl opacity-20">
            
       </div>
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={'/avater.png'}
          alt="Avatar"
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-raleway font-bold text-lg text-blue-700">{testimonial.name}</h3>
          <p className="font-raleway font-medium text-sm text-blue-600">{testimonial.title}</p>
        </div>
      </div>
      <p className="font-raleway text-gray-600 leading-relaxed">
        {testimonial.quote}
      </p>
    </div>
  </div>
);


function Testimonials(): JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };
  
  // A simple auto-slide effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-4xl text-[#072D5B]">
            From Our Customers
          </h2>
          <p className="font-lato font-semibold text-2xl text-gray-700 mt-2">
            Testimonials
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-8"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center mt-8 gap-3">
            <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-600">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
           <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

