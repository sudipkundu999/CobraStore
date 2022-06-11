import {
  AddressDetails,
  CartPriceDetails,
  OrderSummary,
} from "../../components";
import { useCart } from "../../contexts";
import "./checkout.css";

export const Checkout = () => {
  const { cartToShow } = useCart();

  return (
    <main className="checkout-main">
      <div className="order-summary-wrapper">
        <div className="heading">Order Summary</div>
        <OrderSummary arrayToShow={cartToShow} />
        <AddressDetails />
      </div>
      <CartPriceDetails />
    </main>
  );
};
