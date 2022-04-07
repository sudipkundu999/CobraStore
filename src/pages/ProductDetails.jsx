import "./pages-css/product-detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCart, useProducts, useWishlist } from "../contexts";
import { notifyDefault } from "../utils";

export const ProductDetails = () => {
  const { productsFromDB } = useProducts();
  const { productId } = useParams();

  const product = productsFromDB.find((x) => x._id === productId);
  const { name, author, price, image, inStock, badge, rating, description } =
    product;

  const { wishlistToShow, addToWishlist, removeFromWishlist } = useWishlist();
  const isProductInWishlist = wishlistToShow.findIndex(
    (ele) => ele._id === product._id
  );

  const { cartToShow, addToCart } = useCart();
  const isProductInCart = cartToShow.findIndex(
    (ele) => ele._id === product._id
  );

  const { isUserLoggedIn } = useAuth();

  const navigate = useNavigate();

  const notLoggedInHandler = () => {
    navigate("/login");
    notifyDefault("Please Login to continue");
  };

  return (
    <main className="product-detail-main">
      <div className="card card-horizontal">
        {badge && <span className="card-badge">{badge}</span>}
        <div className="card-image-container">
          <button className="card-favourite">
            {isProductInWishlist !== -1 ? (
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
                  isUserLoggedIn
                    ? addToWishlist(product)
                    : notLoggedInHandler();
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
              {Math.round(
                ((price.actual - price.current) / price.actual) * 100
              )}
              % off
            </span>
            {!inStock && <span className="out-of-stock">Out of stock!</span>}
          </div>
          <span className="card-rating">
            {rating.toFixed(1)} <i className="fas fa-star"></i>
          </span>
          <span className="card-description">{description}</span>
        </div>
        <div className="card-cta">
          {isProductInCart === -1 ? (
            <button
              disabled={!inStock}
              style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
              className="btn btn-secondary"
              onClick={() => {
                isUserLoggedIn ? addToCart(product) : notLoggedInHandler();
              }}
            >
              Add to cart
            </button>
          ) : (
            <button className="btn btn-outline">Item in Cart</button>
          )}
          {isProductInCart === -1 ? (
            <button
              disabled={!inStock}
              style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
              className="btn btn-primary"
              onClick={() => {
                isUserLoggedIn
                  ? (() => {
                      addToCart(product);
                      navigate("/cart");
                    })()
                  : notLoggedInHandler();
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
    </main>
  );
};
