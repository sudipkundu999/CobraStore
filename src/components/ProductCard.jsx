import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "../contexts";
import "./component-css/productCard.css";
export const ProductCard = ({ product }) => {
  const { name, author, price, image, inStock, badge, rating } = product;

  const { wishlistToShow, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = wishlistToShow.findIndex((ele) => ele._id === product._id);

  const { cartToShow, cartReducerDispatch } = useCart();
  const inCart = cartToShow.findIndex((ele) => ele._id === product._id);

  const navigate = useNavigate();
  return (
    <div className="card">
      {!inStock && <span className="card-text-overlay">Out of stock!</span>}
      {badge && <span className="card-badge">{badge}</span>}
      <div className="card-image-container">
        <button className="card-favourite">
          {inWishlist !== -1 ? (
            <i
              className="fas fa-heart fa-2x"
              onClick={() => {
                removeFromWishlist(product);
              }}
            ></i>
          ) : (
            <i
              className="far fa-heart fa-2x"
              onClick={() => {
                addToWishlist(product);
              }}
            ></i>
          )}
        </button>
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
        <span className="card-rating">
          {rating.toFixed(1)} <i className="fas fa-star"></i>
        </span>
      </div>
      <div className="card-cta">
        {inCart === -1 ? (
          <button
            className="btn btn-secondary"
            onClick={() => {
              cartReducerDispatch({ type: "ADD_TO_CART", payload: product });
            }}
          >
            Add to cart
          </button>
        ) : (
          <button className="btn btn-outline">Item in Cart</button>
        )}
        {inCart === -1 ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              cartReducerDispatch({ type: "ADD_TO_CART", payload: product });
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};
