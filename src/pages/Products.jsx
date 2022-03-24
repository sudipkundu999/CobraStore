import { ProductCard, ProductFilter } from "../components";
import { useProducts } from "../contexts";
import { useProductReducer } from "../reducers/product-reducer";
import { useDocumentTitle } from "../utils";
import "./pages-css/products.css";

export const Products = () => {
  useDocumentTitle("Products");

  const { loading } = useProducts();
  const { state, dispatch, productsToShow } = useProductReducer();

  return (
    <div className="products-body">
      <ProductFilter state={state} dispatch={dispatch} />

      <main className="products-main">
        {loading ? (
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
