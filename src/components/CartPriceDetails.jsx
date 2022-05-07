import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddress, useCart, useOrders } from "../contexts";
import { notifyError, notifySuccess } from "../utils";
import "./component-css/cartPriceDetails.css";

export const CartPriceDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { defaultAddress } = useAddress();
  const { placeOrder } = useOrders();
  const {
    cartToShow,
    setCartToShow,
    priceDetails,
    isCouponApplied,
    setIsCouponApplied,
  } = useCart();
  const {
    totalCount,
    totalActualPrice,
    totalDiscount,
    beforeAddingDeliveryAmount,
    deliveryAmount,
    afterAddingDeliveryAmount,
    afterAddingCouponDiscount,
  } = priceDetails;

  const [coupon, setCoupon] = useState("");
  const applyCoupon = () => {
    if (coupon === "COBRA") {
      setIsCouponApplied(true);
      notifySuccess("Coupon Applied");
    } else {
      setCoupon("");
      notifyError("Invalid Coupon");
    }
  };

  const placeOrderHandler = () => {
    if (defaultAddress !== undefined) {
      const order = {
        items: cartToShow.map((item) => ({
          qty: item.qty,
          name: item.name,
        })),
        amount: afterAddingCouponDiscount,
        address: defaultAddress.address,
      };
      placeOrder(order);
      setCartToShow([]);
      setCoupon("");
      setIsCouponApplied(false);
      notifySuccess("Order Placed");
      navigate("/user");
    } else {
      notifyError("Add address to continue");
    }
  };
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
        {location.pathname === "/checkout" &&
          (!isCouponApplied ? (
            <>
              <div className="coupon-code-wrapper">
                Coupon Code
                <div className="coupon-code">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.code === "Enter" && applyCoupon()}
                  />
                  <button
                    className="btn btn-secondary"
                    onClick={() => applyCoupon()}
                  >
                    APPLY
                  </button>
                </div>
                <span>
                  use <strong>COBRA</strong> for flat ₹50 discount
                </span>
              </div>
              <hr />
            </>
          ) : (
            <div className="coupon-discount">
              Coupon Discount
              <div className="price"> - ₹50</div>
            </div>
          ))}
        <div className="price-container">
          TOTAL AMOUNT
          <div className="price">
            ₹
            {location.pathname === "/cart"
              ? afterAddingDeliveryAmount
              : afterAddingCouponDiscount}
          </div>
        </div>
        <hr />
        <button
          className="btn payment-btn"
          onClick={() => {
            location.pathname === "/cart"
              ? navigate("/checkout")
              : placeOrderHandler();
          }}
        >
          {location.pathname === "/cart" ? "CHECKOUT" : "PLACE ORDER"}
        </button>
      </div>
    )
  );
};
