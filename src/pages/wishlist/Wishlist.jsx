import { ProductCard } from "../../components";
import { useDocumentTitle } from "../../utils";
import { useWishlist } from "../../contexts";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");
  const { wishlistToShow } = useWishlist();

  return (
    <main className="wishlist-main">
      <div className="heading">Wishlist</div>
      {wishlistToShow.length === 0 && (
        <div className="heading empty-wishlist">
          No items in wishlist. Add some <Link to="/products">products</Link>
        </div>
      )}
      <div className="cards-wrapper">
        {wishlistToShow.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};
