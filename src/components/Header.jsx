import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart, useProducts, useWishlist } from "../contexts";
import { useAuth } from "../contexts/auth-context";
import "./component-css/header.css";

export const Header = () => {
  const { userName, isUserLoggedIn, logoutHandler } = useAuth();

  const { wishlistToShow } = useWishlist();
  const wishlistCount = wishlistToShow.length;

  const { cartToShow } = useCart();
  const cartCount = cartToShow.reduce((acc, curr) => (acc = acc + curr.qty), 0);

  const navigate = useNavigate();
  const location = useLocation();
  const { productReducerDispatch, productReducerState } = useProducts();
  useEffect(
    () =>
      productReducerState.filterBySearch.trim() &&
      location.pathname !== "/products" &&
      navigate("/products"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productReducerState.filterBySearch]
  );

  return (
    <header>
      <div className="navigation-container">
        <Link to="/">
          <h2>CobraStore</h2>
        </Link>
        <input
          value={productReducerState.filterBySearch}
          type="text"
          placeholder="Search"
          className="nav-search search-desktop"
          onChange={(e) =>
            productReducerDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }
        />
        <div className="nav-right">
          {isUserLoggedIn && (
            <button className="btn btn-secondary" onClick={logoutHandler}>
              Logout
            </button>
          )}
          <Link className="nav-links" to={isUserLoggedIn ? `/user` : `/login`}>
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
        value={productReducerState.filterBySearch}
        type="text"
        placeholder="Search"
        className="nav-search search-mobile"
        onChange={(e) =>
          productReducerDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          })
        }
      />
    </header>
  );
};
