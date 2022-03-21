import "./component-css/productCard.css";
export const ProductCard = ({ product }) => {
  const { name, author, price, image, inStock, badge, rating } = product;

  //TODO: take care of this
  const inWishlist = false;
  return (
    <div className="card">
      {!inStock && <span className="card-text-overlay">Out of stock!</span>}
      {badge && <span className="card-badge">{badge}</span>}
      <div className="card-image-container">
        <button className="card-favourite">
          {inWishlist ? (
            <i className="fas fa-heart fa-2x"></i>
          ) : (
            <i className="far fa-heart fa-2x"></i>
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
        <button className="btn btn-secondary">Add to cart</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};
