import "./component-css/cartCard.css";

export const CartCard = ({ props }) => {
  const { id, name, author, price, discount, img, oldNew } = props;
  return (
    <div className="card card-horizontal" key={id}>
      {oldNew && <span className="card-badge">New</span>}
      <div className="card-image-container">
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
        <div className="card-quantity">
          Quantity :
          <input type="number" name="quantity" min="1" max="5" />
        </div>
        <div className="card-cta">
          <button className="btn btn-outline">Remove from cart</button>
          <button className="btn btn-primary">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};
