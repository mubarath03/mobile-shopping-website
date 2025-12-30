import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <p className="product-title">{product.name}</p>
      <p className="product-price">₹{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="btn-cart">View</button>
      </Link>
    </div>
  );
}
