import React from 'react'

function Footer() {
  return (
    <div className="bg-slate-800 text-white py-8 mt-8 grid grid-cols-2">
      <div className="container mx-auto px-4">
        <p className="text-center"><b>© 2026 E-commerce Store. All rights reserved.</b></p>
      </div>
       <div>
        <ul className="flex col-span-3 lg:flex justify-center space-x-4 gap-4">
            <li><a href="#" className="hover:text-gray-400">Lov Kimtech</a></li>
            <li><a href="#" className="hover:text-gray-400">Instagram: Jaster</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
       </div>
    </div>
  )
}
export default Footer