import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">MobilesShoping</div>

      <div className="nav-search">
        <input placeholder="Search products..." />
        <button>🔍</button>
      </div>

      <div className="nav-actions">

        <Link to="/login">Login</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
