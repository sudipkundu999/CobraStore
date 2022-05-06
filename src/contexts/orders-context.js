import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";
import { useAuth } from "./auth-context";

const OrdersContext = createContext();

const useOrders = () => useContext(OrdersContext);

const OrdersProvider = ({ children }) => {
  const [ordersToShow, setOrdersToShow] = useState([]);
  const {
    response: responseOrders,
    loading: loadingOrders,
    operation: operationOrders,
  } = useAxios();

  const fetchOrders = () => {
    operationOrders({
      method: "get",
      url: "/api/user/orders",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  const { isUserLoggedIn } = useAuth();
  useEffect(() => {
    isUserLoggedIn ? fetchOrders() : setOrdersToShow([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const placeOrder = (items) => {
    operationOrders({
      method: "POST",
      url: "/api/user/orders",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { items: items },
    });
  };

  useEffect(
    () =>
      responseOrders !== undefined && setOrdersToShow(responseOrders.orders),
    [responseOrders]
  );

  return (
    <OrdersContext.Provider
      value={{
        loadingOrders,
        ordersToShow,
        placeOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export { useOrders, OrdersProvider };
