import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/useCart'

//props name products
function Card({ product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
    navigate('/cart');
  };

  // /products/ part is just a URL route.
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs text-white">
            New
          </span>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="mb-2 text-lg font-semibold text-slate-900">{product.title}</h3>
        </Link>
        <p className="mb-4 text-sm text-gray-500">
          Premium quality and modern design.
        </p>

        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card