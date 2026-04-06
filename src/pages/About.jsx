import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
   <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
  >
    <source src="clothes1.mp4" type="video/mp4" />
 
  </video>

  <div className="container mx-auto px-6 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      About Our Company
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      We build modern, clean, and user-friendly web applications
      that make people's lives easier.
    </p>
  </div>
</section>

      {/* About Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              We are passionate developers focused on creating beautiful,
              responsive, and high-performance websites using React.
            </p>
            <p className="text-gray-600">
              Our goal is to deliver clean code, modern design, and the
              best user experience possible.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://i5.walmartimages.com/asr/fd98eee0-e153-48ed-b022-87c4a753ec3f.911a1c36b9d31ea249fe3d5d6e139059.jpeg"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            
                <button className="">modern</button>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">
                Clean, minimal, and responsive UI design for all devices.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized and high-speed applications built with React.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-600">
                Structured and maintainable code following best practices.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;

