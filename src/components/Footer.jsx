import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">E-Commerce Store</h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Modern products, fast browsing, and a clean shopping experience built for your next purchase.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-amber-300">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/get-started" className="hover:text-white">Get Started</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-amber-300">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Phnom Penh, Cambodia</li>
            <li>lovkimtech@gmail.com</li>
            <li>+855 96 678 1505</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-sm text-slate-400">
        © 2026 E-commerce Store. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer