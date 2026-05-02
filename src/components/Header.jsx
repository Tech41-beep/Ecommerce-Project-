import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/useCart';


function Header() {
    const [isActive, setIsActive] = useState(false);
    const { totalItems } = useCart();
  return (
  <>
        <header className="fixed left-0 top-[44px] z-50 flex w-full items-center justify-between border-b border-slate-200 bg-white px-4 py-4 text-black shadow-sm">
                <div className='flex items-center gap-3'>
                        <button
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-2xl lg:hidden"
                            onClick={() => { setIsActive(true); }}
                            aria-label="Open navigation menu"
                        >
                            ☰
                        </button>
                        <Link to="/" className="text-lg font-bold tracking-wide text-slate-900">
                            E-Commerce Store
                        </Link>
        </div>
     <div>
        <nav>
                        <ul className="hidden items-center gap-6 lg:flex">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>Home</NavLink></li>
                                <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>Products</NavLink></li>
                                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>About</NavLink></li>
                                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>Contact</NavLink></li>
                                <li><NavLink to="/get-started" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>Get Started</NavLink></li>
                                <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}>Cart {totalItems > 0 ? `(${totalItems})` : ''}</NavLink></li>
            </ul>
        </nav>
     </div>

     <Link to="/login" className="hidden lg:inline-block">
                <span className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700">
                    Login
                </span>
     </Link>
    </header>

        <div className={`${isActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden`} onClick={() => setIsActive(false)} />

        <header className={`${isActive ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-[60] h-full w-[280px] bg-slate-950 p-5 text-white transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="mb-8 flex items-center justify-between">
                        <span className="text-lg font-semibold tracking-wide">Menu</span>
                        <button onClick={()=>{setIsActive(false)}} className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-white'>
                             ✕
                        </button>
        </div>

                <div className='flex flex-col gap-2 py-4'>
                     <Link to="/" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>Home</Link>
                     <Link to="/products" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>Products</Link>
                     <Link to="/about" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>About</Link>
                     <Link to="/contact" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>Contact</Link>
                     <Link to="/get-started" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>Get Started</Link>
                     <Link to="/cart" className='rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800' onClick={() => setIsActive(false)}>Cart {totalItems > 0 ? `(${totalItems})` : ''}</Link>
                     <Link to="/login" className='rounded-lg px-3 py-3 text-amber-300 hover:bg-slate-800' onClick={() => setIsActive(false)}>Login</Link>
        </div>
        </header>
    </>
  )
}
export default Header