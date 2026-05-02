import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/ContactPage";
import About from "./pages/About";
import Product from "./components/Products/Product";
import Login from "./pages/Login";
import GetStarted from "./pages/Getstart";
import Cart from "./pages/Cart";
import ViewProduct from "./pages/ViewProduct";

import ProductDetail from "./components/Products/ProductDetail";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (

    <HashRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-started" element={<GetStarted />} />
            <Route path="cart" element={<Cart />} />
            <Route path="view-product/:id" element={<ViewProduct />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}

export default App;