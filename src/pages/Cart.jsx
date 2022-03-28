import { CartCard, CartPriceDetails } from "../components";
import { useCart } from "../contexts";
import { useDocumentTitle } from "../utils";
import "./pages-css/cart.css";

export const Cart = () => {
  useDocumentTitle("Cart");
  const { cartToShow } = useCart();

  return (
    <main className="cart-main">
      <div className="cart-items">
        {cartToShow.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </div>

      <CartPriceDetails />
    </main>
  );
};
