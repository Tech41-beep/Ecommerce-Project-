import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/ContactPage";
import About from "./pages/About";
import Product from "./components/Products/Product";
import Login from "./pages/Login";
import GetStarted from "./pages/Getstart";

import ProductDetail from "./components/Products/ProductDetail";

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;