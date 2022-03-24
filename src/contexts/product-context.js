import { useAxios } from "../utils/useAxios";

const { createContext, useContext, useState, useEffect } = require("react");

const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsFromDB, setProductsFromDB] = useState([]);
  const [categoriesFromDB, setCategoriesFromDB] = useState([]);
  const { response, loading, operation: fetchProducts } = useAxios();
  const { response: responseCategory, operation: fetchCategories } = useAxios();

  useEffect(() => {
    fetchProducts({ method: "get", url: "/api/products" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(
    () => response !== undefined && setProductsFromDB(response.products),
    [response]
  );

  useEffect(() => {
    fetchCategories({ method: "get", url: "/api/categories" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    responseCategory !== undefined &&
      setCategoriesFromDB(responseCategory.categories);
    setCategoriesFromDB((prev) => prev.map((obj) => obj.categoryName));
  }, [responseCategory]);

  return (
    <ProductContext.Provider
      value={{ productsFromDB, loading, categoriesFromDB }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
