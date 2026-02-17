import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Header() {
    const [isActive, setIsActive] = useState(false);
  return (
  <>
    <header className="mt-[56.8px] flex fixed  left-0 w-full z-50 bg-white shadow border-b border-gray-200 justify-between px-4 py-4 items-center p-4 border text-black">
        <div className='flex items-center gap-[5px]'>
            <button className="inline-block lg:hidden menu-button text-2xl"
            onClick={()=>{setIsActive(true)}}>☰</button>
            <h1 className="logo">E-Commerce Store</h1>
        </div>
     <div>
        <nav>
            <ul className="nav-links  hidden lg:flex space-x-4 gap-[4px] z-10">
                <li><NavLink to="/" className='hover:underline hover:text-primary aria-[current-page]:underline aria-[current-page]:text-yellow-600 '>Home</NavLink></li>
                <li><NavLink to="/products" className='hover:underline hover:text-primary'>Product</NavLink></li>
                <li><NavLink to="/about" className='hover:underline hover:text-primary'>About</NavLink></li>
                <li><NavLink to="/contact" className='hover:underline hover:text-primary'>Contact</NavLink></li>
            </ul>
        </nav>
     </div>

     <div>
        <button className="cart-button bg-green text-white px-4 py-2 rounded">Login
        </button>
     </div>
    </header>

    <header className={`${isActive ? '-left-0' : '-left-full'} lg:hidden fixed top-0 w-[250px] h-full bg-black text-white p-4 transition-left duration-300 ease-in-out z-50`}>
        <div className="close-button flex justify-between text-2xl">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

            </button>
            <button onClick={()=>{setIsActive(false)}} className='bg-black border-dashed transition-all duration-300ease-out  rounded-full border-2 border-blue-300'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg>

            </button>
        </div>

        <div className='flex flex-col py-4 mt-4'>
            <a className='hover:bg-gray-700 p-2 hover:cursor-pointer'> + Home</a>
            <a className='hover:bg-gray-700 p-2 hover:cursor-pointer'> + Shop</a>
            <a className='hover:bg-gray-700 p-2 hover:cursor-pointer'> + About</a>
            <a className='hover:bg-gray-700 p-2 hover:cursor-pointer'> + Contact</a>
        </div>
    </header>
    </>
  )
}
export default Header