
function ProductDetail() {
  return (
    <div className="bg-gray-50 min-h-screen">
     {/* //create ProdcutPage */}
        <section className="container mx-auto px-6 py-16">
            <div className="">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Product Detail</h1>
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Image */}
                    <div className="md:w-1/2 rounded-lg shadow-lg">
                        <img src="https://marabika.lt/11858-large_default/lattafa-mayar-arabic-perfume.jpg" alt="Product" className="rounded-lg shadow-lg w-full"/>
                    </div>

                    {/* Info */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Lattafa</h2>
                        <span className="text-2xl font-bold text-green-600 mb-6 block">$99.99</span>
                         <div className=" flex flex:row items-center gap-4">
                          <label htmlFor="quantity"></label>
                       <input type="number" id="quantity" min="1" defaultValue="1" className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        <button className="bg-primary hover:bg-cyan-400 text-white font-bold py-4 px-6 rounded-full border border-black transition-all">Add to Cart</button>
                        <button className="bg-secondary hover:bg-cyan-400 text-white font-bold py-4 px-6 rounded-full border border-black transition-all ml-4">Buy Now</button>
                    </div>
                    <p className="text-gray-600 mb-6 my-[3rem] min-w-[200px] mx-[2rem]"><strong>Description:</strong> This is a detailed description of the modern tech product. It has premium quality and modern design, perfect for your lifestyle.
                    this product mades you feel so much comfort with good quality and best smell. This must provide you with absoutlely best smell while you choosing this products.</p>
                    </div>
                   
                </div>

            </div>
            </section>
    </div>
  )
}

export default ProductDetail