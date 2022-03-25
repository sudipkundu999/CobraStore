import { Link } from "react-router-dom";
import { useProducts } from "../contexts";
import "./component-css/homeHeroSection.css";

export const HomeHeroSection = () => {
  const { productReducerDispatch } = useProducts();
  return (
    <div
      className="hero-section"
      style={{
        background: `url(${process.env.PUBLIC_URL + "/images/heroImage.jpg"})`,
      }}
    >
      <div className="hero-text">
        NEW USER OFFER <br />
        <span className="hero-text-small"> Upto </span>
        <span className="hero-text-off"> 40% OFF</span>
        <span className="hero-text-small"> on all products </span>
      </div>

      <button className="btn btn-hero">
        <Link
          to="/products"
          onClick={() => productReducerDispatch({ type: "RESET" })}
        >
          SHOP NOW
        </Link>
      </button>
    </div>
  );
};
