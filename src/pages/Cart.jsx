import "./Cart.css";

function Cart({cartItems, increaseQuantity, decreaseQuantity, }) {
  // Adds the prices of all products in the cart
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculates 13% tax
  const tax = subtotal * 0.13;

  // Adds the subtotal and tax together
  const total = subtotal + tax;

  return (
    <main className="checkout">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
</div>


                </div>

                <p className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </article>
            ))
          )}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button type="button" disabled={cartItems.length === 0}>
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}

export default Cart;