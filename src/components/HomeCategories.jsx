import "./component-css/homeCategories.css";
import categoryImage from "../assets/images/categoryImage.jpg";
import { Link } from "react-router-dom";

const HomeCategory = ({ category }) => {
  return (
    <div className="category-card">
      <Link to="/products">
        <img className="img-fluid" src={categoryImage} alt="categories" />
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
