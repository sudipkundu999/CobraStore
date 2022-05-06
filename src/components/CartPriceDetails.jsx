import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts";
import "./component-css/cartPriceDetails.css";

export const CartPriceDetails = () => {
  const navigate = useNavigate();
  const { priceDetails } = useCart();
  const {
    totalCount,
    totalActualPrice,
    totalDiscount,
    beforeAddingDeliveryAmount,
    deliveryAmount,
    afterAddingDeliveryAmount,
  } = priceDetails;

  return (
    totalCount !== 0 && (
      <div className="cart-price-details">
        <h2>Price Details</h2>
        <hr />
        <div className="price-container">
          Price({totalCount} items)
          <div className="price">₹{totalActualPrice}</div>
        </div>
        <div className="price-container">
          Discount
          <div className="price"> ₹{totalDiscount}</div>
        </div>
        <div className="price-container">
          Delivery charges
          <div className="price"> ₹{deliveryAmount}</div>
        </div>
        {deliveryAmount !== 0 ? (
          <div className="free-delivery">
            *Add items worth ₹{500 - beforeAddingDeliveryAmount} for free
            delivery
          </div>
        ) : (
          <div className="free-delivery">
            Yay! You're eligible for Free delivery
          </div>
        )}
        <hr />
        <div className="price-container">
          TOTAL AMOUNT
          <div className="price"> ₹{afterAddingDeliveryAmount}</div>
        </div>
        <hr />
        <button className="btn" onClick={() => navigate("/checkout")}>
          CHECKOUT
        </button>
      </div>
    )
  );
};
