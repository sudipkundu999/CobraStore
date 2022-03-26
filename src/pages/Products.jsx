import { ProductCard, ProductFilter } from "../components";
import { useProducts } from "../contexts";
import { useDocumentTitle } from "../utils";
import "./pages-css/products.css";

export const Products = () => {
  useDocumentTitle("Products");
  const { loadingProducts, productsToShow } = useProducts();

  return (
    <div className="products-body">
      <ProductFilter />

      <main className="products-main">
        {loadingProducts ? (
          <div className="loading-screen">Loading Products...</div>
        ) : (
          productsToShow.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </main>
    </div>
  );
};
