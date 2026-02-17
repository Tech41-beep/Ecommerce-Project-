import React from 'react'
import Card from '../components/Card'
function Home() {
  return (
   <>
   <div className='home-container bg-[url("https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png")] h-[900px]   bg-cover grid grid-cols-1 bg-slate-50 h-screen md:grid-cols-2 gap-8 items-center'>
       <div class="relative z-10 flex h-full items-center px-8 lg:px-24">
    <div class="max-w-2xl space-y-6">
      <h1 class="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
        Next-Gen <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Shopping</span>
      </h1>
      
      <p class="text-lg text-slate-300 md:text-xl">
        Discover amazing products at great prices with our seamless, 
        tech-driven e-commerce experience.
      </p>

      <div class="flex gap-4">
        <button class="rounded-full bg-cyan-500 px-8 py-3 font-bold text-white transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          Shop Now
        </button>
        <button class="rounded-full border border-slate-500 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
          View Deals
        </button>
      </div>
    </div>
  </div>
   </div>

   <div className="max-w-[90%] lg:m-w-5xl m-auto">
     <h1 className="text-2xl font-bold text-center mt-8">Best Selling Products</h1>
     <p className="text-center">Explore our most popular products!</p>
     
     <Card></Card>
      <Card></Card>
       <Card></Card>

   
    
        
   
      </div>
      <div className="text-center mt-8">
        <button className="bg-primary hover:bg-cyan-400 text-white font-bold py-4 px-6 rounded-full border border-black transition-all">
          Explore More
        </button>
      </div>
    </>
  )

}

export default Home