import React from 'react'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
   
    <BrowserRouter>
     <Routes>

       <Route path= "/" element={<RootLayout/>}>
       <Route index element = {<Home/>}></Route>
       <Route path= "/products" element = {<Product/>}></Route>
       </Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App