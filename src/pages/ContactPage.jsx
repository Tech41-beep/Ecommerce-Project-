import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or want to work with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 hover:text-indigo-800 transition">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-600">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-indigo-100 transition">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-600">
                Phnom Penh, Cambodia
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-indigo-100 transition">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">
                +855 96 678 1505 (Lov Kimtech)
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-indigo-100 transition">
              <h3 className="text-xl font-semibold mb-2">✉️ Email</h3>
              <p className="text-gray-600">
                lovkimtech@gmail.com
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
