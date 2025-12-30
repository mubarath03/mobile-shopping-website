export default function CategoryBar({ setBrand }) {
  return (
    <div className="category-bar">
      <span onClick={() => setBrand("all")}>All</span>
      <span onClick={() => setBrand("Apple")}>iPhone</span>
      <span onClick={() => setBrand("Samsung")}>Samsung</span>
      <span onClick={() => setBrand("Redmi")}>Redmi</span>
      <span onClick={() => setBrand("Vivo")}>Vivo</span>
      <span onClick={() => setBrand("Oppo")}>Oppo</span>
</div>
);
}