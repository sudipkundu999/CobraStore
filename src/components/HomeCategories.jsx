import "./component-css/homeCategories.css";
import { Link } from "react-router-dom";

const HomeCategory = ({ category }) => {
  return (
    <div className="category-card">
      <Link to="/products">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/images/categoryImage.jpg"}
          alt="categories"
        />
        <h2>{category}</h2>
      </Link>
    </div>
  );
};

export const HomeCategories = () => {
  return (
    <div className="home-categories">
      <HomeCategory category={"Fiction"} />
      <HomeCategory category={"Romance"} />
      <HomeCategory category={"Self Help"} />
      <HomeCategory category={"Mystery"} />
    </div>
  );
};
