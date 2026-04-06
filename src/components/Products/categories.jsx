import { useEffect, useState } from "react";

function Categories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Keep only products with id 1, 2, 3
        const selectedProducts = data.filter((item) =>
          [1, 2, 3].includes(item.id)
        );

        setProducts(selectedProducts);
      } catch (err) {
        setError("Something went wrong while loading products.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Categories
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our handpicked items with a modern shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-white to-gray-100 p-6 flex justify-center items-center h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
                  {item.title}
                </h3>

                <p className="text-indigo-600 font-bold text-xl mt-3">
                  ${item.price}
                </p>

                <button className="mt-5 w-full rounded-xl bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-700 transition duration-300">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;