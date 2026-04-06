import React from 'react'
import { Link } from 'react-router-dom'

//props name products
function Card({ product }) {
  // /products/ part is just a URL route.
  return (
    <Link to={`/products/${product.id}`}>
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* img */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
            New
          </span>
        </div>
          
          {/* title price btn  */}
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-500 text-sm mb-4">
            Premium quality and modern design.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>

            <button className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-primary scale-110 cursor-pointer transition">
              Add to Cart
            </button>
          </div>
          
            
        </div>
      </div>
    </Link>
  )
}

export default Card