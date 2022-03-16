import { Link } from "react-router-dom";
import "./component-css/homeHeroSection.css";

export const HomeHeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        NEW USER OFFER <br />
        <span className="hero-text-small"> Upto </span>
        <span className="hero-text-off">40% OFF</span>
        <span className="hero-text-small"> on all products </span>
      </div>
      <Link to="/products">
        <button className="btn btn-hero">SHOP NOW</button>
      </Link>
    </div>
  );
};
