import React from 'react'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/ContactPage'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
   
    <BrowserRouter>
     <Routes>

       <Route path= "/" element={<RootLayout/>}>
       <Route index element = {<Home/>}></Route>
       <Route path= "/products" element = {<Product/>}></Route>
         <Route path= "/about" element = {<About/>}></Route>
         <Route path= "/contact" element = {<Contact/>}></Route>
         <Route path= "/products/:id" element = {<ProductDetail/>}></Route>
         <Route path= "/login" element = {<Login/>}></Route>
       </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App