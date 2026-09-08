import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-logo">Bakeryhouse</h1>
      <nav className="navbar-links">
        <a href="/">Home</a>
        <a href="/menu">Menu </a>
        <a href="/about">About</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}

export default Navbar;