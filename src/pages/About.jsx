import "./About.css";
import store from "../assets/images/image11.jpg";

function About() {
  return (
    <main className="about-page">
      <section className="about-header">
        <p>Our story</p>
        <h1>About Bakeryhouse</h1>
        <p>
          Bakeryhouse is a neighbourhood bakery creating fresh breads,
          pastries, and desserts with care.
        </p>
      </section>

      <div className="about-image">
        <img src={store} alt="Freshly baked bread store" />
      </div>
    </main>
  );
}

export default About;