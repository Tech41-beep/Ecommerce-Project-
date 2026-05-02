import React from "react";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks. Your message has been prepared for review.");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Contact</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Reach out when you need product help or store support.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We keep communication simple. Use the form, or contact us directly if you need a quick answer about an order or item.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
            >
              Send Message
            </button>

            {status && <p className="text-sm font-medium text-emerald-600">{status}</p>}
          </form>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Store details</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Phnom Penh, Cambodia</p>
              <p>lovkimtech@gmail.com</p>
              <p>+855 96 678 1505</p>
            </div>
          </div>

          <div className="rounded-3xl bg-amber-300 p-6 text-slate-950">
            <h3 className="text-lg font-semibold">Best response times</h3>
            <p className="mt-3 text-sm leading-6">
              We usually answer product and order questions within one business day.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white">
            <h3 className="text-lg font-semibold text-amber-300">Need a faster path?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Visit the product pages first if you already know what you want, then come back here with any questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
