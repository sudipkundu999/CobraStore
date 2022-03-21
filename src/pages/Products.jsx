import { ProductFilter } from "../components";
import { ProductCard } from "../components/ProductCard";
import { data } from "../FAKE.DATA";
import { useDocumentTitle } from "../utils";
import "./pages-css/products.css";

export const Products = () => {
  useDocumentTitle("Products");

  return (
    <div className="products-body">
      <ProductFilter />

      <main className="products-main">
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </main>
    </div>
  );
};
