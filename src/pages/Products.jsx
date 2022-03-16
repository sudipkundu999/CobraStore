import { ProductFilter } from "../components";
import { ProductCard } from "../components/ProductCard";
import { data } from "../FAKE.DATA";
import "./pages-css/products.css";

export const Products = () => {
  return (
    <div className="products-body">
      <ProductFilter />

      <main className="products-main">
        {data.map((x) => (
          <ProductCard props={x} />
        ))}
      </main>
    </div>
  );
};
