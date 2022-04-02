import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartToShow, setCartToShow] = useState([]);
  const {
    response: responseCart,
    loading: loadingCart,
    operation: operationCart,
  } = useAxios();

  const fetchCart = () => {
    operationCart({
      method: "get",
      url: "/api/user/cart",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  //TODO:to be fetched after isLoggedIn changes to true
  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (product) => {
    operationCart({
      method: "POST",
      url: "/api/user/cart",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { product: product },
    });
  };

  const removeFromCart = (product) => {
    operationCart({
      method: "DELETE",
      url: `/api/user/cart/${product._id}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  const updateCountCart = (product, type) => {
    operationCart({
      method: "POST",
      url: `/api/user/cart/${product._id}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { action: { type: type } },
    });
  };

  //This is a function that mocks the behaviour of clearing the cart on placing an order
  const placeOrder = () => {
    cartToShow.map((product) =>
      operationCart({
        method: "DELETE",
        url: `/api/user/cart/${product._id}`,
        headers: {
          accept: "*/*",
          authorization: localStorage.getItem("cobraToken"),
        },
        data: {},
      })
    );
  };

  useEffect(
    () => responseCart !== undefined && setCartToShow(responseCart.cart),
    [responseCart]
  );

  return (
    <CartContext.Provider
      value={{
        loadingCart,
        cartToShow,
        addToCart,
        removeFromCart,
        updateCountCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
