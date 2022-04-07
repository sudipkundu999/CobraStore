import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../contexts";
import "./component-css/cartCard.css";

export const CartCard = ({ product }) => {
  const { _id, id, name, author, price, image, badge, qty } = product;

  const { wishlistToShow, addToWishlist, removeFromWishlist } = useWishlist();
  const isProductInWishlist = wishlistToShow.findIndex(
    (ele) => ele._id === product._id
  );

  const { removeFromCart, updateCountCart } = useCart();

  return (
    <div className="card card-horizontal" key={id}>
      {badge && <span className="card-badge">{badge}</span>}
      <div className="card-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-details-container">
        <Link to={`/products/${_id}`}>
          <div className="card-title">{name}</div>
        </Link>
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
              qty !== 1 && updateCountCart(product, "decrement");
            }}
            style={{ cursor: qty === 1 ? "not-allowed" : "pointer" }}
          ></i>
          Quantity : {qty}
          <i
            className="fas fa-plus"
            onClick={() => {
              updateCountCart(product, "increment");
            }}
          ></i>
        </div>
        <div className="card-cta">
          <button
            className="btn btn-outline"
            onClick={() => {
              removeFromCart(product);
            }}
          >
            Remove from cart
          </button>
          {isProductInWishlist !== -1 ? (
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
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
