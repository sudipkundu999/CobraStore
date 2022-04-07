import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { productReducerFunc } from "../reducers";
import { initialStateOfProductsFilter, sortByPriceFunc } from "../utils";
import { useAxios } from "../utils/useAxios";

const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  //Initial Fetching of Products from DB
  const [productsFromDB, setProductsFromDB] = useState([]);

  const {
    response: responseProducts,
    loading: loadingProducts,
    operation: fetchProducts,
  } = useAxios();

  useEffect(() => {
    fetchProducts({ method: "get", url: "/api/products" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      responseProducts !== undefined &&
      setProductsFromDB(responseProducts.products),
    [responseProducts]
  );

  //Initial Fetching of Categories from DB
  const [categoriesFromDB, setCategoriesFromDB] = useState([]);

  const { response: responseCategory, operation: fetchCategories } = useAxios();

  useEffect(() => {
    fetchCategories({ method: "get", url: "/api/categories" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    responseCategory !== undefined &&
      setCategoriesFromDB(responseCategory.categories);
    setCategoriesFromDB((prev) => prev.map((obj) => obj.categoryName));
  }, [responseCategory]);

  //Filtering and Sorting products to show on product page
  const [state, dispatch] = useReducer(
    productReducerFunc,
    initialStateOfProductsFilter
  );

  const productsToShow = productsFromDB
    .filter((x) => x.price.current <= state.filterTillPriceRange)
    .filter((x) => x.rating >= state.filterByRating)
    .filter((x) =>
      state.filterByCategory.length === 0
        ? true
        : state.filterByCategory.includes(x.category)
    )
    .filter(
      (x) =>
        x.name.toUpperCase().includes(state.filterBySearch.toUpperCase()) ||
        x.author.toUpperCase().includes(state.filterBySearch.toUpperCase())
    )
    .sort(sortByPriceFunc(state.sortByPrice));

  return (
    <ProductContext.Provider
      value={{
        productsFromDB,
        loadingProducts,
        categoriesFromDB,
        productsToShow,
        productReducerState: state,
        productReducerDispatch: dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
