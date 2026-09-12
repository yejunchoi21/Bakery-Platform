import "./FeaturedProducts.css";
import croissant from "../assets/images/image2.jpg";
import sourdough from "../assets/images/image3.jpg";
import cheesecake from "../assets/images/image4.jpg";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <p className="section-label">Customer favourites</p>
      <h2>Our Featured Products</h2>

      <div className="product-list">
        <article className="product-card">
          <h3>Butter Croissant</h3>
          <div className="product-image">
            <img src={croissant} alt="Fresh butter croissant" />
          </div>
          <p>Flaky, buttery, and freshly baked.</p>
          <p className="product-price">$4.50</p>
        </article>

        <article className="product-card">


          <h3>Country Sourdough</h3>
          <div className="product-image">
          <img src={sourdough} alt="Fresh country sourdough bread" />
          </div>
          <p>Slow-fermented bread with a crisp crust.</p>
          <p className="product-price">$8.00</p>
        </article>

        <article className="product-card">
          <h3>Basque Cheesecake</h3>
          <div className="product-image">
            <img src={cheesecake} alt="Basque cheesecake" />
          </div>

          <p>Creamy cheesecake.</p>
          <p className="product-price">$7.50</p>
        </article>
      </div>
    </section>
  );
}

export default FeaturedProducts;