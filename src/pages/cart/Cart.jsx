import { Link } from "react-router-dom";
import { CartCard, CartPriceDetails } from "../../components";
import { useCart } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./cart.css";

export const Cart = () => {
  useDocumentTitle("Cart");
  const { cartToShow } = useCart();

  return (
    <main className="cart-main">
      <div className="heading">Cart</div>
      {cartToShow.length === 0 && (
        <div className="heading empty-cart">
          No items in cart. Add some <Link to="/products">products</Link>
        </div>
      )}
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartToShow.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </div>

        <CartPriceDetails />
      </div>
    </main>
  );
};
