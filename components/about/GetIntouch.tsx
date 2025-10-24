import React from 'react';

export default function GetIntouch() {
  return (
    // Set the background image. Assumes 'getintouch.png' is in your `public` folder.
    <div 
      style={{ backgroundImage: `url(/getintouch.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        
        {/* Quote */}
        <h2 className="text-white text-3xl md:text-4xl font-bold font-raleway leading-snug max-w-4xl mx-auto">
          “Some of the History of Our Company is that<br className="hidden sm:block" />we are Catching up through Video”
        </h2>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white font-lato text-lg font-semibold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get In Touch
          </button>
        </div>

      </div>
    </div>
  );
}
