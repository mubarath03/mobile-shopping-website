import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");

  const handlePay = () => {
    alert(`Payment successful via ${method.toUpperCase()}`);
    navigate("/success");
  };

  return (
    <div className="checkout-box">
      <h2>Payment</h2>

      {/* UPI */}
      <label className="pay-option">
        <input
          type="radio"
          name="payment"
          checked={method === "upi"}
          onChange={() => setMethod("upi")}
        />
        UPI (GPay / PhonePe / Paytm)
      </label>

      {method === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="pay-input"
        />
      )}

      {/* CARD */}
      <label className="pay-option">
        <input
          type="radio"
          name="payment"
          onChange={() => setMethod("card")}
        />
        Debit / Credit Card
      </label>

      {method === "card" && (
        <>
          <input className="pay-input" placeholder="Card Number" />
          <input className="pay-input" placeholder="MM / YY" />
          <input className="pay-input" placeholder="CVV" />
        </>
      )}

      {/* NET BANKING */}
      <label className="pay-option">
        <input
          type="radio"
          name="payment"
          onChange={() => setMethod("netbanking")}
        />
        Net Banking
      </label>

      {method === "netbanking" && (
        <select className="pay-input">
          <option>Select Bank</option>
          <option>SBI</option>
          <option>HDFC</option>
          <option>ICICI</option>
          <option>Axis Bank</option>
        </select>
      )}

      <button className="buy-btn" onClick={handlePay}>
        Pay Now
      </button>
 </div>
);
}