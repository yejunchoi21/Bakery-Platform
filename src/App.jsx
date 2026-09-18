import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
  // Stores all products currently in the cart and saves if referesh
const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("bakeryCart");
  return savedCart ? JSON.parse(savedCart) : [];
});
    useEffect(() => {
      localStorage.setItem(
        "bakeryCart",
        JSON.stringify(cartItems)
      );
    }, [cartItems]);
  // Adds a new product or increases its quantity
  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  // Increases a product's quantity by one
  function increaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decreases quantity and removes the product when it reaches zero
  function decreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;