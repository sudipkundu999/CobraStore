import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts";
import { notifySuccess } from "../utils";
import "./component-css/cartPriceDetails.css";

export const CartPriceDetails = () => {
  const navigate = useNavigate();
  const { cartToShow, cartReducerDispatch } = useCart();
  const priceDetails = cartToShow.reduce(
    (acc, curr) => ({
      ...acc,
      totalCount: acc.totalCount + curr.qty,
      totalActualPrice: acc.totalActualPrice + curr.price.actual * curr.qty,
      totalDiscount:
        acc.totalDiscount + (curr.price.actual - curr.price.current) * curr.qty,
    }),
    {
      totalCount: 0,
      totalActualPrice: 0,
      totalDiscount: 0,
    }
  );

  const { totalCount, totalActualPrice, totalDiscount } = priceDetails;
  const beforeAddingDeliveryAmount = totalActualPrice - totalDiscount;
  const deliveryAmount = beforeAddingDeliveryAmount < 500 ? 40 : 0;
  const totalAmountToBePaid = beforeAddingDeliveryAmount + deliveryAmount;
  return (
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
          *Add items worth ₹{500 - beforeAddingDeliveryAmount} for free delivery
        </div>
      ) : (
        <div className="free-delivery">
          Yay! You're eligible for Free delivery
        </div>
      )}
      <hr />
      <div className="price-container">
        TOTAL AMOUNT
        <div className="price"> ₹{totalAmountToBePaid}</div>
      </div>
      <hr />
      <button
        className="btn"
        onClick={() => {
          cartReducerDispatch({ type: "RESET" });
          notifySuccess("ORDER PLACED!");
          navigate("/products");
        }}
      >
        PLACE ORDER
      </button>
    </div>
  );
};
