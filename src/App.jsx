//creates car storage
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

function App() {
  //creaes an empty array to store the items
  const [cartItems, setCartItems] = useState([]);
  //adds item to cart. its a function passes parameter 'product' through the func.
function addToCart(product) {
  const existingItem = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
}

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/menu"
          //allows menu page to use the addtocart function
          element={<Menu addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;