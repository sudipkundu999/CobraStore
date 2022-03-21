import { CartCard, CartPriceDetails } from "../components";
import { data } from "../FAKE.DATA";
import { useDocumentTitle } from "../utils";
import "./pages-css/cart.css";

export const Cart = () => {
  useDocumentTitle("Cart");

  return (
    <main className="cart-main">
      <div className="cart-items">
        {data.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </div>

      <CartPriceDetails />
    </main>
  );
};
