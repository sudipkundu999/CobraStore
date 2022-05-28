import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../contexts";
import "./component-css/homeHeroSection.css";

export const HomeHeroSection = () => {
  const location = useLocation();
  const { productReducerDispatch } = useProducts();
  const [carousalImg, setCarousalImg] = useState(1);

  useEffect(() => {
    if (location.pathname === "/") {
      let timerId = setInterval(() => {
        setCarousalImg((prev) => (prev === 3 ? 1 : prev + 1));
      }, 2000);
      return () => clearInterval(timerId);
    }
  }, [location.pathname]);

  return (
    <div className="hero-section">
      <div className="carousal">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `/images/cs${carousalImg}.jpg`}
          alt="carousal"
        />
        <Link
          to="/products"
          onClick={() => productReducerDispatch({ type: "RESET" })}
        >
          <button className="btn btn-hero">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};
