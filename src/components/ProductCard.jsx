export const ProductCard = ({ props }) => {
  const {
    id,
    name,
    author,
    price,
    discount,
    img,
    outOfStock,
    oldNew,
    inWishlist,
  } = props;
  return (
    <div className="card" key={id}>
      {outOfStock && <span className="card-text-overlay">Out of stock!</span>}
      {oldNew && <span className="card-badge">New</span>}
      <div className="card-image-container">
        <button className="card-favourite">
          {inWishlist ? (
            <i className="fas fa-heart fa-2x"></i>
          ) : (
            <i className="far fa-heart fa-2x"></i>
          )}
        </button>
        <img src={img} alt={name} />
      </div>
      <div className="card-details-container">
        <div className="card-title">{name}</div>
        <div className="card-seller">by {author}</div>
        <div className="card-price">
          <span className="card-current-price">₹{price.current}</span>
          <span className="card-actual-price">₹{price.actual}</span>
          <span className="card-price-off">{discount}% off</span>
        </div>
      </div>
      <div className="card-cta">
        <button className="btn btn-secondary">Add to cart</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};
