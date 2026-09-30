import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>Lumina Cafe & Roastery</h2>

          <p>
            Thoughtful coffee, slow craft and warm gatherings,
            made for meaningful everyday moments.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About & Visit</a>
        </div>

        <div className="footer-contact">
          <h3>Visit Us</h3>

          <p>18 Maple Street</p>
          <p>River District, West End</p>
          <p>hello@luminacafe.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Lumina Cafe & Roastery. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;