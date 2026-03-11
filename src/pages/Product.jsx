import React from 'react'
import Card from '../components/Card'
import { useEffect } from 'react'
import { useState } from 'react';
function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch product data
      const fetchProductData = async () => {
        try{
          const response = await fetch("https://fakestoreapi.com/products"); // Example API endpoint
          const productData = await response.json();
           

          setProduct(productData); 
          // Do something with the fetched product data
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };

      fetchProductData();
  }, []);

  return (
    <div>
     
     <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
  {product.map((item) => (
    <Card key={item.id} product={item} />
  ))}
</div>

    </div>
  )
}

export default Product