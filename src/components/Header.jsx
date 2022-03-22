import { Link } from "react-router-dom";
import "./component-css/header.css";

export const Header = () => {
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
            <span>User</span>
          </Link>
          <Link className="nav-links" to="/wishlist">
            <i className="fas fa-heart fa-2x"></i>
            <span>Wishlist</span>
          </Link>
          <Link className="nav-links" to="/cart">
            <i className="fas fa-shopping-bag fa-2x"></i>
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
