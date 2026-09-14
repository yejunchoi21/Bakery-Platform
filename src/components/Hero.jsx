import "./Hero.css";
import breadImage from "../assets/images/image1.png"
function Hero(){
    return(
    <main className="hero">
        <div className="hero-content">
            <p>Fresh goods</p>
            <h2>Handcrafted treats made with care</h2>

            <a href="/menu">View our Menu</a>
        </div>

        <div className="hero-image">
        <img src={breadImage} alt="Freshly baked bread" />
      </div>
    </main>
    );
}

export default Hero;