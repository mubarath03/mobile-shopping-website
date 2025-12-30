import { useState } from "react";
import {products } from "../data/product";
import ProductCard from "../components/ProductCard";
import CategoryBar from "../components/CategoryBar";

export default function Home() {
  const [brand, setBrand] = useState("all");

  const filteredProducts =
    brand === "all"
      ? products.filter((p) => p.category === "mobiles")
      : products.filter(
          (p) => p.category === "mobiles" && p.brand === brand
        );

  return (
    <>
      <CategoryBar setBrand={setBrand} />

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
</>
);
}