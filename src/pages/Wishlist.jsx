import "./pages-css/wishlist.css";
import { ProductCard } from "../components";
import { useDocumentTitle } from "../utils";
import { useWishlist } from "../contexts";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");
  const { wishlistToShow } = useWishlist();

  return (
    <main className="wishlist-main">
      <div className="heading">Wishlist</div>
      <div className="cards-wrapper">
        {wishlistToShow.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};
