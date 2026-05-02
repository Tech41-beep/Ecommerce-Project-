import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import Categories from "../components/Products/categories";
import localProducts from "../data/localProducts";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("API failed, using local products:", err);
        setProducts(localProducts);
      });
  }, []);

  return (
    <>
      <HeroSection />

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
            <p className="text-sm text-amber-300">Premium selection</p>
            <h2 className="mt-3 text-2xl font-semibold">Curated items with a clean checkout flow.</h2>
          </div>
          <div className="rounded-3xl bg-slate-100 p-6">
            <p className="text-sm text-slate-500">Fast delivery</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Shipping support that keeps shopping simple.</h2>
          </div>
          <div className="rounded-3xl bg-amber-300 p-6 text-slate-950">
            <p className="text-sm font-medium">Need help?</p>
            <h2 className="mt-3 text-2xl font-semibold">Talk to us before you buy.</h2>
            <Link to="/contact" className="mt-4 inline-block font-semibold underline underline-offset-4">
              Contact the store
            </Link>
          </div>
        </div>
      </section>

      <Categories />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Featured products</p>
              <h1 className="mt-3 text-4xl font-bold text-gray-900">
                Our Products
              </h1>
            </div>
            <p className="max-w-xl text-lg text-gray-600">
              Discover modern fashion and lifestyle products designed for everyday use.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 8).map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
