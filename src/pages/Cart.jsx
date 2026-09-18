import "./Cart.css";

function Cart({ cartItems }) {

  const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,0);
  return (
    <main className="checkout">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item, index) => (
            <article className="cart-item" key={index}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p className="cart-item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>$4.50</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>$4.50</span>
          </div>

          <button type="button">Proceed to Checkout</button>
        </aside>
      </div>
    </main>
  );
}

export default Cart;