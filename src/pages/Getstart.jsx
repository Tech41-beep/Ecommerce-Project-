import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Get started</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Start shopping in three simple steps.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This page gives new shoppers a clear path into the store so they can browse, compare, and buy without confusion.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-amber-300">Step 1</p>
            <h2 className="mt-3 text-2xl font-semibold">Create an account</h2>
            <p className="mt-3 text-slate-300">
              Save your details so checkout becomes faster on the next order.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-300 p-6 text-slate-950">
            <p className="text-sm font-medium">Step 2</p>
            <h2 className="mt-3 text-2xl font-semibold">Choose products</h2>
            <p className="mt-3">
              Browse featured products, open a detail page, and compare price and description.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-amber-300">Step 3</p>
            <h2 className="mt-3 text-2xl font-semibold">Complete checkout</h2>
            <p className="mt-3 text-slate-300">
              Add items to cart, confirm order details, and finish in just a few clicks.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/products" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
            Browse products
          </Link>
          <Link to="/login" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            Login now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;