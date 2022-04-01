import { useCart, useWishlist } from "../contexts";
import "./component-css/cartCard.css";

export const CartCard = ({ product }) => {
  const { id, name, author, price, image, badge, qty } = product;

  //Caution : The product coming from props has an additional qty with it.
  const { wishlistToShow, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = wishlistToShow.findIndex((ele) => ele._id === product._id);

  const { cartReducerDispatch } = useCart();
  return (
    <div className="card card-horizontal" key={id}>
      {badge && <span className="card-badge">{badge}</span>}
      <div className="card-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-details-container">
        <div className="card-title">{name}</div>
        <div className="card-seller">by {author}</div>
        <div className="card-price">
          <span className="card-current-price">₹{price.current}</span>
          <span className="card-actual-price">₹{price.actual}</span>
          <span className="card-price-off">
            {Math.round(((price.actual - price.current) / price.actual) * 100)}%
            off
          </span>
        </div>
        <div className="card-quantity">
          <i
            className="fas fa-minus"
            onClick={() => {
              qty !== 1 &&
                cartReducerDispatch({
                  type: "INCREASE_OR_DECREASE_COUNT_FROM_CART",
                  payload: { product: product, type: "decrement" },
                });
            }}
            style={{ cursor: qty === 1 ? "not-allowed" : "pointer" }}
          ></i>
          Quantity : {qty}
          <i
            className="fas fa-plus"
            onClick={() => {
              cartReducerDispatch({
                type: "INCREASE_OR_DECREASE_COUNT_FROM_CART",
                payload: { product: product, type: "increment" },
              });
            }}
          ></i>
        </div>
        <div className="card-cta">
          <button
            className="btn btn-outline"
            onClick={() => {
              cartReducerDispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
          >
            Remove from cart
          </button>
          {inWishlist !== -1 ? (
            <button
              className="btn btn-outline"
              onClick={() => {
                removeFromWishlist(product);
              }}
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                addToWishlist(product);
              }}
            >
              Move to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
