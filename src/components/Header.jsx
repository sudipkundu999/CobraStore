import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../contexts";
import { useAuth } from "../contexts/auth-context";
import "./component-css/header.css";

export const Header = () => {
  const { userName } = useAuth();

  const { wishlistToShow } = useWishlist();
  const wishlistCount = wishlistToShow.length;

  const { cartToShow } = useCart();
  const cartCount = cartToShow.reduce((acc, curr) => (acc = acc + curr.qty), 0);

  return (
    <header>
      <div className="navigation-container">
        <Link to="/">
          <h2>CobraStore</h2>
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="nav-search search-desktop"
        />
        <div className="nav-right">
          <Link to="/mock">
            <button className="btn btn-secondary">Mockman</button>
          </Link>
          <Link className="nav-links" to="/login">
            <i className="fas fa-user fa-2x"></i>
            <span>{userName}</span>
          </Link>
          <Link className="nav-links" to="/wishlist">
            <i className="fas fa-heart fa-2x"></i>
            {wishlistCount !== 0 && (
              <div className="header-badge wishlist-badge">{wishlistCount}</div>
            )}
            <span>Wishlist</span>
          </Link>
          <Link className="nav-links" to="/cart">
            <i className="fas fa-shopping-bag fa-2x"></i>
            {cartCount !== 0 && (
              <div className="header-badge cart-badge">{cartCount}</div>
            )}
            <span>Bag</span>
          </Link>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="nav-search search-mobile"
      />
    </header>
  );
};
