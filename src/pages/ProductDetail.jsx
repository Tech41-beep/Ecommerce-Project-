import { useState } from "react"
import React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Categories from "../components/Products/categories"

function ProductDetail() {
    const {id}= useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
       const fetchProduct = async()=>{
     try {
       const response= await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
         }
         catch(error){
             console.error("Error fetching product:", error);
         }
       }
       fetchProduct();
    }, [id]);
    if(!product) {
        return(
            <div>
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Loading...</h1>
            </div>
        )
    }
  return (
    // container
    <div className="bg-gray-50 min-h-[500px] py-24 px-4 sm:px-6 lg:px-8 "> 
     <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-8">
            {/* img */}
            <div className="min-h-50">
            <img src={product.image} alt={product.title} className="w-full min-h-5 mt-4  p-[16px] h-64 object-contain mb-4 hover:transition hover:scale-105
            hover:cursor:pointer" />
            </div>
            {/* content left side*/}
           <div className="">
             <h1 className="text-4xl font-bold mb-6 text-gray-800">{product.title}</h1>
            
             <p className="text-gray-600 mb-4 ">{product.description}</p>
            <div>
                <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-red-500"> ${ (product.price * 0.5).toFixed(2) }</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-semibold line-through">50% off</button>
                </div>

                 <div className="grid grid-cols-3  sm:grid-cols-1 gap-[30px] mt-6 lg:flex ">
                <input type="number" min="1" defaultValue="1" className="w-25 border border-gray-300 rounded-md px-2 lg:w-[200px]" />
                <button className="bg-yellow-500 hover:bg-primary text-white px-4 py-2 rounded-md font-semibold lg:w-[200px]">Make a gift</button>
                
             </div>
                         
            </div>
            
       
  
     
           </div>
          <div className="flex">
             <Categories></Categories>
          </div>
        </div>
        
    </section>
     </div>
  )
}

export default ProductDetail