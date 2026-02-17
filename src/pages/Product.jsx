import React from "react";

const products = [
  {
    id: 1,
    name: "Suits Perfume",
    price: 99,
    img: "https://perfumepalace.in/cdn/shop/files/23_ffbc1b3a-4234-4b2c-83c2-697174e9eca9.png?v=1700631359",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Lattafa Qaa Perfume",
    price: 149,
    img: "https://marabika.lt/11940-large_default/LATTAFA-qaa-ed-100ml.jpg",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Fakhar Lattafa Perfume",
    price: 159,
    img: "https://marabika.lt/11850-large_default/fakhar-LATTAFA-100ml.jpg",
    tag: "Sexy Smell",
  },
  {
    id: 4,
    name: "Raghba Lattafa Perfume",
    price: 129,
    img: "https://www.perfumestudiomnl.com/cdn/shop/files/BCF82F3E-822D-4A31-9588-BBE743B69290.jpg?v=1716723617&width=1445",
    tag: "Best Seller",
  },
  {
    id: 5,
    name: "lattafa opulent oud perfume",
    price: 79,
    img: "https://marabika.lt/11976-large_default/LATTAFA-opulent-oud-100ml.jpg",
    tag: "Sale",
  },
  {
    id: 6,
    name: "lattafa maahir perfume",
    price: 399,
    img: "https://marabika.lt/12007-large_default/LATTAFA-maahir-100ml.jpg",
    tag: "Pro",
  },
];

function Product() {
  return (
    <div className=" bg-gray-50  px-4 mt-[80px]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Products</h1>
        <p className="text-gray-600 text-lg">
          Discover modern tech products designed for your lifestyle
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-4">
                Premium quality and modern design.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  ${p.price}
                </span>

                <button className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-primary scale-110 cursor-pointer transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow">
          Load More Products
        </button>
      </div>
    </div>
  );
}

export default Product;
