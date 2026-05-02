import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import localProducts from "../data/localProducts";

function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = useMemo(
    () => localProducts.find((item) => item.id === Number(id)),
    [id]
  );

  if (!product) {
    return (
      <section className="min-h-[70vh] px-4 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Product not found</h1>
          <p className="mt-3 text-slate-600">The item you selected is not available.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
          >
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-slate-900">Products</Link>
          <span>/</span>
          <span className="text-slate-900">View product</span>
        </div>

        <div className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
          <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 capitalize">
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
                <button
                  type="button"
                  onClick={() => {
                    addItem(product, 1);
                    navigate("/cart");
                  }}
                  className="flex-1 rounded-lg bg-slate-950 py-2.5 font-semibold text-white shadow-md transition duration-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-lg"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => {
                    addItem(product, 1);
                    navigate("/cart");
                  }}
                  className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium transition hover:bg-gray-100"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;