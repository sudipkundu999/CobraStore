import "./pages-css/wishlist.css";
import { data } from "../FAKE.DATA";
import { ProductCard } from "../components";
export const Wishlist = () => {
  return (
    <main className="wishlist-main">
      <div className="heading">Wishlist</div>
      <div className="cards-wrapper">
        {data.map((x) => (
          <ProductCard props={x} />
        ))}
      </div>
    </main>
  );
};
