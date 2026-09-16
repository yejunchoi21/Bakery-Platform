import "./Footer.css";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import gmail from "../assets/images/gmail.png";

function Footer() {
  /*target blank makes it so it opens a new tab when click link
  rel noopener is security avoids sending the bakery page’s address to the external website as referral information. */
  return (
    <footer className="footer">
      <p>© 2026 Bakeryhouse. All rights reserved.</p>

  <div className="footer-contact">
    <h2 className="social-media">Contact Us</h2>

      <div className="media-img">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>

        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="Gmail" />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;