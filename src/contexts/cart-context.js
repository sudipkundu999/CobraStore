import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";
import { useAuth } from "./auth-context";

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

  const { isUserLoggedIn } = useAuth();
  useEffect(() => {
    isUserLoggedIn ? fetchCart() : setCartToShow([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

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

  let priceDetails = cartToShow.reduce(
    (acc, curr) => ({
      ...acc,
      totalCount: acc.totalCount + curr.qty,
      totalActualPrice: acc.totalActualPrice + curr.price.actual * curr.qty,
      totalDiscount:
        acc.totalDiscount + (curr.price.actual - curr.price.current) * curr.qty,
    }),
    {
      totalCount: 0,
      totalActualPrice: 0,
      totalDiscount: 0,
    }
  );

  const beforeAddingDeliveryAmount =
    priceDetails.totalActualPrice - priceDetails.totalDiscount;
  const deliveryAmount = beforeAddingDeliveryAmount < 500 ? 40 : 0;
  const afterAddingDeliveryAmount = beforeAddingDeliveryAmount + deliveryAmount;

  priceDetails = {
    ...priceDetails,
    beforeAddingDeliveryAmount: beforeAddingDeliveryAmount,
    deliveryAmount: deliveryAmount,
    afterAddingDeliveryAmount: afterAddingDeliveryAmount,
  };

  return (
    <CartContext.Provider
      value={{
        loadingCart,
        cartToShow,
        addToCart,
        removeFromCart,
        updateCountCart,
        placeOrder,
        priceDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
