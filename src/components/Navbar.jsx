import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-logo">Bakeryhouse</h1>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;