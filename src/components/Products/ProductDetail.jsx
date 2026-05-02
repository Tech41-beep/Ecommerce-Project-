import { useMemo } from "react";
import { useParams } from "react-router-dom";
import localProducts from "../../data/localProducts";

function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(
    () => localProducts.find((item) => item.id === Number(id)),
    [id]
  );

  if (!product) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                {product.category}
              </span>

              <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                {product.title}
              </h1>

              <p className="mb-6 leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-3xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  In Stock
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:w-24"
                />

                <button className="flex-1 rounded-lg bg-slate-950 py-2.5 font-semibold text-white shadow-md transition duration-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-lg">
                  Add to Cart
                </button>
              </div>

              <button className="mt-4 w-full rounded-lg border border-gray-300 py-2.5 font-medium transition hover:bg-gray-100">
                Buy Now
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductDetail;