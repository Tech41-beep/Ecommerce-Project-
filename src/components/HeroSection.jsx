import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="clothes1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build Modern Websites
            <span className="text-indigo-500"> Faster</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Create beautiful and responsive websites with modern technologies.
            Start building your next project with powerful tools and clean UI.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <button className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image (or other content) */}
        <div className="flex justify-center">
          <img
            src=""
            alt=""
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;