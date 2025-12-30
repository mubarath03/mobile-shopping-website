import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="checkout-box">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <Link to="/checkout">
        <button className="buy-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
}
