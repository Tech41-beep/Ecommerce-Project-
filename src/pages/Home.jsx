import React from 'react'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import  Btn from '../components/Btn'
import { useEffect } from 'react'
import Login from './Login'
import { useState } from 'react'
import axios from 'axios'

function Home() {
 const [products, setProducts] = useState([]);

useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  

  return (
   <>
<HeroSection></HeroSection>
 <div className="max-w-7xl mx-auto mb-12 text-center">
  <h1 className="text-4xl font-bold mb-3">Our Products</h1>
  <p className="text-gray-600 text-lg">
    Discover modern tech products designed for your lifestyle
  </p>
</div>

<div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
  {products.map((item) => (
    <Card key={item.id} product={item} />
  ))}
</div>


    </>
  )

}

export default Home