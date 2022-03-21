import "./pages-css/wishlist.css";
import { data } from "../FAKE.DATA";
import { ProductCard } from "../components";
import { useDocumentTitle } from "../utils";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");

  return (
    <main className="wishlist-main">
      <div className="heading">Wishlist</div>
      <div className="cards-wrapper">
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};
