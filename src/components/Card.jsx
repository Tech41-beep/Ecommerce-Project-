import React from 'react'

function Card() {
  return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-4 mx-16">
      {/* 1 */}
       <div className=' rounded-lg group'>
       <figure>
          <img className='group-hover:scale-105 transition-all' src="https://m.media-amazon.com/images/I/71MQlRC2gLL._SL1000_.jpg" alt="Product1" width="300px" height="400px" />
         <h1 className='text-center font-bold line-clamp-2'>Perfume</h1>
          </figure>
          <p className='text-center text-red-700 line-clamp-1'>$ 99.00</p>
           <p className='text-center text-zinc-500 line-clamp-1'>High-quality fragrance for long-lasting scent</p>
       </div>
  
      {/* 2 */}
       <div className=' rounded-lg group'>
       <figure>
          <img className='group-hover:scale-105 transition-all' src="https://cdn.notinoimg.com/detail_main_lq/armani/3614273336383_04_/emporio-stronger-with-you-absolutely___250923.jpg" alt="Product1" width="300px" height="400px" />
         <h1 className='text-center font-bold'>Perfume</h1>
          </figure>
        <p className='text-center text-red-700'>$ 99.00</p>
         <p className='text-center text-zinc-500 line-clamp-1'>High-quality fragrance for long-lasting scent</p>
       </div>

        
      {/* 3 */}
       <div className=' rounded-lg group'>
       <figure>
          <img className='group-hover:scale-105 transition-all' src="https://www.armani-beauty.ca/on/demandware.static/-/Sites-armani-ca-Library/default/dw3dbcb628/images/pdp/ww-00911-arm/ww-00086-arm-comparison-img1.jpg" alt="Product1" width="300px" height="400px" />
         <h1 className='text-center font-bold'>Perfume</h1>
          </figure>
            <p className='text-center text-red-700 line-clamp-1'>$ 99.00</p>
             <p className='text-center text-zinc-500 line-clamp-1'>High-quality fragrance for long-lasting scent</p>
       </div>
        
            
      {/* 4 */}
       <div className=' rounded-lg group'>
       <figure>
          <img className='group-hover:scale-105 transition-all' src="https://i1.perfumesclub.com/grande/131696-4.jpg" alt="Product1" width="300px" height="400px" />
         <h1 className='text-center font-bold'>Perfume</h1>
          </figure>
        <p className='text-center text-red-70 0'>$ 99.00</p>
         <p className='text-center text-zinc-500 line-clamp-1'>High-quality fragrance for long-lasting scent</p>
       </div>
   </div>  
  )
}

export default Card