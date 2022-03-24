import "./component-css/homeCategories.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts";

const HomeCategory = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() =>
        navigate({
          pathname: "/products",
          search: `?category=${category}`,
        })
      }
    >
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + "/images/categoryImage.jpg"}
        alt="categories"
      />
      <h2>{category}</h2>
    </div>
  );
};

export const HomeCategories = () => {
  const { categoriesFromDB } = useProducts();
  return (
    <div className="home-categories">
      {categoriesFromDB.map((category, index) => (
        <HomeCategory category={category} key={index} />
      ))}
    </div>
  );
};
