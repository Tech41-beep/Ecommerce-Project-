import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetStarted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex flex-col justify-center items-center py-16">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/path/to/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content with AOS Animations */}
      <div className="container mx-auto px-6 text-center space-y-8 z-10 relative">
        <h1
          data-aos="fade-up"
          className="text-5xl font-bold tracking-wide leading-tight mb-6"
        >
          Get Started with Our App
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          Welcome! We're thrilled to help you start your journey. Follow these simple steps to get up and running with our application in no time.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white text-gray-900 rounded-lg shadow-lg p-8 space-y-6 max-w-2xl mx-auto"
        >
          <ol className="list-decimal text-left space-y-4 text-lg">
            <li>Step 1: Create an account or log in to your profile.</li>
            <li>Step 2: Explore the various features we offer.</li>
            <li>Step 3: Start creating amazing things with our app!</li>
          </ol>
          <div className="mt-8 flex justify-center">
            <a
              href="/signup"
              className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;