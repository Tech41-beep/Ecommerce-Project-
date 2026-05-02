import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.28),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.25),_transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex rounded-full border border-amber-300/40 bg-white/10 px-4 py-1 text-sm text-amber-200">
            Fresh drops, fast delivery, secure checkout
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Shop standout pieces for every day and every season.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Discover curated clothing, accessories, and lifestyle essentials with a polished shopping experience and clear product details.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
              Shop Products
            </Link>
            <Link to="/get-started" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Get Started
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">12k+</p>
              <p className="mt-1">Products sold</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">24h</p>
              <p className="mt-1">Fast support</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="mt-1">Happy shoppers</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-amber-400/25 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-blue-500/25 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-4 text-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80"
                  alt="Featured style"
                  className="h-72 w-full rounded-[1.25rem] object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Trending now</p>
                    <p className="font-semibold">Weekend Essentials</p>
                  </div>
                  <p className="text-lg font-bold text-emerald-600">$49</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">New arrivals</p>
                  <h2 className="mt-2 text-2xl font-semibold">Minimal style, maximum comfort</h2>
                </div>
                <div className="rounded-[1.5rem] bg-amber-300 p-5 text-slate-950">
                  <p className="text-sm font-medium">Member perk</p>
                  <h2 className="mt-2 text-2xl font-semibold">Save more on your first order</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;