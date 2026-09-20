import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./Navbar.css";

function Navbar({ user }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      setShowAccountMenu(false);
    }
  }
  return (
    <header className="navbar">
      <h1 className="navbar-logo">Bakeryhouse</h1>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <div className="auth-links">
    {user ? (
      <div className="account-menu">
        <button
          className="signed-in-button"
          type="button"
          onClick={() => setShowAccountMenu(!showAccountMenu)}
        >
          Signed In
        </button>

        {showAccountMenu && (
          <div className="account-dropdown">
            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <span>/</span>
        <Link to="/signup">Sign Up</Link>
      </>
    )}
  </div>
      </nav>
    </header>
  );
}

export default Navbar;