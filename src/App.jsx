import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";


/*these ones will only appear on homepage. hero and featuredrpoducts */
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

/*app is always the default so navbar and footer will always appear */
function App() {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;