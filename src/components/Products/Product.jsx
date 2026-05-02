import React from "react";
import Card from "../Card";
import localProducts from "../../data/localProducts";
import { Link } from "react-router-dom";

function Product() {
  const categories = [...new Set(localProducts.map((item) => item.category))];

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Products</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Explore the full collection.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Browse clothing, accessories, electronics, and lifestyle items in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 capitalize text-slate-200">
                {category}
              </span>
            ))}
          </div>
          <Link to="/get-started" className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
            New here? Get started
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {localProducts.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;