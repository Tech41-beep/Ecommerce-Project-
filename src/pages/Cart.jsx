import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, subtotal, totalItems } =
    useCart();

  if (!items.length) {
    return (
      <section className="min-h-[70vh] px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-xl ring-1 ring-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Cart
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Your cart is empty.
          </h1>
          <p className="mt-4 text-slate-600">
            Add products from the product cards or detail pages to start buying.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
            >
              Browse products
            </Link>
            <Link
              to="/get-started"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
              Cart
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Review your items before checkout.
            </h1>
          </div>

          <p className="text-slate-600">
            {totalItems} item{totalItems > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 md:grid-cols-[110px_1fr_auto] md:items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 rounded-2xl object-cover"
                />

                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 capitalize">
                    {item.category}
                  </p>
                  <p className="mt-2 font-semibold text-emerald-600">
                    ${item.price}
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:items-end">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-slate-500">Qty</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(item.id, event.target.value)
                      }
                      className="w-20 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-sm font-semibold text-rose-600 hover:text-rose-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
            <h2 className="text-2xl font-bold">Order summary</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="mt-8 w-full rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Buy Now
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Clear Cart
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;