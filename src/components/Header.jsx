import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useCart, useProducts, useTheme, useWishlist } from "../contexts";
import { useAuth } from "../contexts/auth-context";
import "./component-css/header.css";

export const Header = () => {
  const { userName, isUserLoggedIn, logoutHandler } = useAuth();

  const { wishlistToShow } = useWishlist();
  const wishlistCount = wishlistToShow.length;

  const { cartToShow } = useCart();
  const cartCount = cartToShow.reduce((acc, curr) => (acc = acc + curr.qty), 0);

  const navigate = useNavigate();
  const { productsFromDB } = useProducts();
  const searchOptions = productsFromDB.map((item) => ({
    ...item,
    label: item.name + " by " + item.author,
  }));

  const { theme, toggleDarkMode } = useTheme();

  return (
    <header>
      <div className="navigation-container">
        <Link to="/">
          <h2>CobraStore</h2>
        </Link>
        <div className="nav-search search-desktop search-wrapper">
          <Select
            options={searchOptions}
            isClearable="true"
            placeholder="Search"
            onChange={(opt) =>
              opt && navigate(`/products/${opt?._id}`, { replace: true })
            }
          />
        </div>
        <div className="nav-right">
          {isUserLoggedIn && (
            <button
              className="btn btn-secondary logout-btn"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
          <i
            className={`fas fa-${
              theme === "light" ? "moon" : "sun"
            } fa-3x theme-toggle`}
            onClick={() => toggleDarkMode()}
          />
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
      <div className="nav-search search-mobile search-wrapper">
        <Select
          options={searchOptions}
          isClearable="true"
          placeholder="Search"
          onChange={(opt) =>
            opt && navigate(`/products/${opt?._id}`, { replace: true })
          }
        />
      </div>
    </header>
  );
};
