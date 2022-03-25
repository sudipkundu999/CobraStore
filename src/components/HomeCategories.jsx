import "./component-css/homeCategories.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts";

const HomeCategory = ({ category }) => {
  const navigate = useNavigate();
  const { productReducerDispatch: dispatch } = useProducts();

  return (
    <div
      className="category-card"
      // This code is for future use when I will implement useSearchParams() in productFilter.jsx
      // onClick={() =>
      //   navigate({
      //     pathname: "/products",
      //     search: `?category=${category}`,
      //   })
      // }
      onClick={() => {
        dispatch({
          type: "FILTER_BY_CATEGORY_FROM_HOMEPAGE",
          payload: category,
        });
        navigate("/products");
      }}
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
