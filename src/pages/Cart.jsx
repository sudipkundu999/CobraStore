import { CartCard, CartPriceDetails } from "../components";
import { data } from "../FAKE.DATA";
import "./pages-css/cart.css";

export const Cart = () => {
  return (
    <main className="cart-main">
      <div className="cart-items">
        {data.map((x) => (
          <CartCard props={x} />
        ))}
      </div>

      <CartPriceDetails />
    </main>
  );
};
