import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

function App() {
  // Stores the signed-in user
  const [user, setUser] = useState(null);

  // Stores the signed-in user's cart
  const [cartItems, setCartItems] = useState([]);

  // Stores the add-to-cart notification
  const [cartMessage, setCartMessage] = useState("");

  // Checks for login and logout changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: authListener } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Loads the signed-in user's cart
  useEffect(() => {
    async function loadCart() {
      if (!user) {
        setCartItems([]);
        return;
      }

      const { data, error } = await supabase
        .from("cart_items")
        .select("product_id, name, price, image, quantity")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Could not load cart:", error.message);
        return;
      }

      const formattedCart = data.map((item) => ({
        id: item.product_id,
        name: item.name,
        price: Number(item.price),
        image: item.image,
        quantity: item.quantity,
      }));

      setCartItems(formattedCart);
    }

    loadCart();
  }, [user]);

  // Shows a temporary message after adding a product
  function showCartMessage(productName) {
    setCartMessage(`${productName} added to cart!`);

    setTimeout(() => {
      setCartMessage("");
    }, 2500);
  }

  // Adds a product or increases its quantity
  async function addToCart(product) {
    if (!user) {
      alert("Please log in before adding products to your cart.");
      return;
    }

    const productId = String(product.id);

    const existingItem = cartItems.find(
      (item) => item.id === productId
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;

      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: newQuantity })
        .eq("user_id", user.id)
        .eq("product_id", productId);

      if (error) {
        alert(error.message);
        return;
      }

      setCartItems((currentItems) =>
        currentItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );

      showCartMessage(product.name);
    } else {
      const newItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      const { error } = await supabase
        .from("cart_items")
        .insert({
          user_id: user.id,
          product_id: productId,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        });

      if (error) {
        alert(error.message);
        return;
      }

      setCartItems((currentItems) => [
        ...currentItems,
        newItem,
      ]);

      showCartMessage(product.name);
    }
  }

  // Increases a product's quantity
  async function increaseQuantity(productId) {
    const item = cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (!user || !item) {
      return;
    }

    const newQuantity = item.quantity + 1;

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity: newQuantity })
      .eq("user_id", user.id)
      .eq("product_id", productId);

    if (error) {
      alert(error.message);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  }

  // Decreases quantity and removes the product at zero
  async function decreaseQuantity(productId) {
    const item = cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (!user || !item) {
      return;
    }

    if (item.quantity === 1) {
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId);

      if (error) {
        alert(error.message);
        return;
      }

      setCartItems((currentItems) =>
        currentItems.filter(
          (cartItem) => cartItem.id !== productId
        )
      );
    } else {
      const newQuantity = item.quantity - 1;

      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: newQuantity })
        .eq("user_id", user.id)
        .eq("product_id", productId);

      if (error) {
        alert(error.message);
        return;
      }

      setCartItems((currentItems) =>
        currentItems.map((cartItem) =>
          cartItem.id === productId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    }
  }

  return (
    <BrowserRouter>
      <Navbar user={user} />

      {cartMessage && (
        <div className="cart-toast" role="status">
          {cartMessage}
        </div>
      )}

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

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;