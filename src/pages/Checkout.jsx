import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="checkout-box">
      <h2>Checkout</h2>
      <input placeholder="Address" />
      <input placeholder="City" />
      <input placeholder="Pincode" />
      <Link to="/payment">
        <button className="buy-btn">Continue to Payment</button>
      </Link>
    </div>
  );
}
