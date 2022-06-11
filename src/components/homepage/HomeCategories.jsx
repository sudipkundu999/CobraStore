import "./homeCategories.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts";

const HomeCategory = ({ category }) => {
  const navigate = useNavigate();
  const { productReducerDispatch: dispatch } = useProducts();

  return (
    <div className="category-card-wrapper">
      <div className="category-card">
        <img
          src={process.env.PUBLIC_URL + `/images/${category}.jpg`}
          className="img-fluid category-image"
          alt={category}
        />
        <div
          className="category-hover"
          onClick={() => {
            dispatch({
              type: "FILTER_BY_CATEGORY_FROM_HOMEPAGE",
              payload: category,
            });
            navigate("/products");
          }}
        >
          {category}
        </div>
      </div>
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
