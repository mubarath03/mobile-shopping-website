import "../index.css"

export default function Footer() {
  return (
    <footer className="footer">

      {/* 🔹 TOP SECTION */}
      <div className="footer-top">
        <div>
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        <div>
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
        </div>

        <div>
          <h4>POLICY</h4>
          <p>Return Policy</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
        </div>

        <div>
          <h4>SOCIAL</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
      </div>

      {/* 🔹 BOTTOM SECTION */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopEasy — All Rights Reserved
      </div>

    </footer>
  );
}
