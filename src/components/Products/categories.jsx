import React from "react";
import { Link } from "react-router-dom";
import localProducts from "../../data/localProducts";

function Categories() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Categories
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Explore our handpicked collection with modern style
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {localProducts.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 group"
            >
              <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
                  {item.title}
                </h3>
                <p className="text-indigo-600 font-bold text-xl mt-3">
                  ${item.price}
                </p>
                <Link
                  to={`/view-product/${item.id}`}
                  className="mt-5 inline-flex w-full justify-center rounded-xl bg-indigo-600 py-2.5 font-medium text-white transition hover:bg-indigo-700"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;