import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">About us</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              We build a shopping experience that feels fast, clear, and modern.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Our store is designed to help customers browse products quickly, compare details easily, and move from discovery to checkout without friction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
                Browse products
              </Link>
              <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Contact us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold text-amber-300">12+</p>
              <p className="mt-2 text-slate-300">Product categories presented in a clean, easy-to-scan layout.</p>
            </div>
            <div className="rounded-3xl bg-amber-300 p-5 text-slate-950">
              <p className="text-3xl font-bold">24h</p>
              <p className="mt-2">Support response target for customers who need help choosing an item.</p>
            </div>
            <div className="sm:col-span-2 overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
                alt="Store team"
                className="h-72 w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Better product discovery</h2>
            <p className="mt-3 text-slate-600">
              Categories, featured items, and product detail pages are arranged to reduce friction when browsing.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Clear customer journeys</h2>
            <p className="mt-3 text-slate-600">
              Every page gives users a next step, whether they want to shop, contact, or sign in.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Consistent visual system</h2>
            <p className="mt-3 text-slate-600">
              Shared layout, spacing, and color choices keep the whole front end feeling connected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

