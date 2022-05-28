import { useState } from "react";
import { ProductCard, ProductFilter } from "../components";
import { useProducts } from "../contexts";
import { useDocumentTitle } from "../utils";
import "./pages-css/products.css";

export const Products = () => {
  useDocumentTitle("Products");
  const { loadingProducts, productsToShow } = useProducts();
  const [isFilterVisible, SetIsFilterVisible] = useState(false);
  const toggleSidebarVisible = () => SetIsFilterVisible((x) => !x);
  return (
    <div className="products-body">
      <i
        className="fas fa-bars fa-3x filter-mobile-btn"
        onClick={() => toggleSidebarVisible()}
      />
      <ProductFilter
        toggleSidebarVisible={toggleSidebarVisible}
        isFilterVisible={isFilterVisible}
      />
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
