import "./Menu.css";
import croissant from "../assets/images/image2.jpg";
import sourdough from "../assets/images/image3.jpg";
import cheesecake from "../assets/images/image4.jpg";
import donut from "../assets/images/image5.jpg";
import baguette from "../assets/images/image6.jpg";
import sweetloaf from "../assets/images/image7.jpg";
import chocobread from "../assets/images/image8.jpg";
import burgerbuns from "../assets/images/image9.jpg";
import bagels from "../assets/images/image10.jpg";

function Menu() {
  return (
    /*each page jsx file should use a main */
    /*use sections to section off unreleated content*/
    <main className="menu-page">
         
      <section className="menu-header">
        <p>Freshly baked every day</p>
        <h1>Our Menu</h1>
        <p>
          Explore our selection of handcrafted breads, pastries, and desserts.
        </p>
      </section>

      <section className="menu-products">
        <article className="menu-card">
          <h3>Butter Croissant</h3>
          <div className="menu-product-image">
            <img src={croissant} alt="Fresh butter croissant" />
          </div>
          <p>Flaky, buttery, and freshly baked.</p>
          <p className="menu-product-price">$4.50</p>
        </article>

        <article className="menu-card">
          <h3>Country Sourdough</h3>
          <div className="menu-product-image">
            <img src={sourdough} alt="Fresh country sourdough bread" />
          </div>
          <p>Slow-fermented bread with a crisp crust.</p>
          <p className="menu-product-price">$8.00</p>
        </article>

        <article className="menu-card">
          <h3>Basque Cheesecake</h3>
          <div className="menu-product-image">
            <img src={cheesecake} alt="Basque cheesecake" />
          </div>
          <p>Creamy cheesecake with a caramelized top.</p>
          <p className="menu-product-price">$7.50</p>
        </article>

        <article className="menu-card">
          <h3>Donuts</h3>
          <div className="menu-product-image">
            <img src={donut} alt="Fresh glazed donuts" />
          </div>
          <p>Soft, sweet, and freshly glazed.</p>
          <p className="menu-product-price">$3.50</p>
        </article>

        <article className="menu-card">
          <h3>Baguette</h3>
          <div className="menu-product-image">
            <img src={baguette} alt="Freshly baked baguette" />
          </div>
          <p>A crisp crust with a light and airy centre.</p>
          <p className="menu-product-price">$5.50</p>
        </article>

        <article className="menu-card">
          <h3>Sweet Loaf</h3>
          <div className="menu-product-image">
            <img src={sweetloaf} alt="Fresh sweet loaf" />
          </div>
          <p>Soft and lightly sweetened homemade bread.</p>
          <p className="menu-product-price">$6.50</p>
        </article>

        <article className="menu-card">
          <h3>Chocolate Bread</h3>
          <div className="menu-product-image">
            <img src={chocobread} alt="Fresh chocolate bread" />
          </div>
          <p>Soft bread filled with rich chocolate flavour.</p>
          <p className="menu-product-price">$5.00</p>
        </article>

        <article className="menu-card">
          <h3>Burger Buns</h3>
          <div className="menu-product-image">
            <img src={burgerbuns} alt="Fresh burger buns" />
          </div>
          <p>Soft and fluffy buns with a golden top.</p>
          <p className="menu-product-price">$4.00</p>
        </article>

        <article className="menu-card">
          <h3>Bagels</h3>
          <div className="menu-product-image">
            <img src={bagels} alt="Freshly baked bagels" />
          </div>
          <p>Chewy bagels with a lightly crisp exterior.</p>
          <p className="menu-product-price">$3.50</p>
        </article>
      </section>
    </main>
  );
}

export default Menu;