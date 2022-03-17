import "./component-css/cartPriceDetails.css";

export const CartPriceDetails = () => {
  return (
    <div className="cart-price-details">
      <h2>Price Details</h2>
      <hr />
      <div className="price-container">
        Price(2 items)
        <div className="price">₹1148</div>
      </div>
      <div className="price-container">
        Discount
        <div className="price"> ₹379</div>
      </div>
      <div className="price-container">
        Delivery charges
        <div className="price"> ₹0</div>
      </div>
      <hr />
      <div className="price-container">
        TOTAL AMOUNT
        <div className="price"> ₹769</div>
      </div>
      <hr />
      <button className="btn">PLACE ORDER</button>
    </div>
  );
};
