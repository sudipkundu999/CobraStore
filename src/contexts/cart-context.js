import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addToCart,
  increaseOrDecreaseCountFromCart,
  removeFromCart,
  useAxios,
} from "../utils";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  //Initial Fetching of Cart from DB
  const [cartFromDB, setCartFromDB] = useState([]);
  const {
    response: responseCart,
    loading: loadingCart,
    operation: fetchCart,
  } = useAxios();

  useEffect(() => {
    fetchCart({
      method: "get",
      url: "/api/user/cart",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => responseCart !== undefined && setCartFromDB(responseCart.cart),
    [responseCart]
  );

  //Update cart
  const { operation: cartReducerOperation } = useAxios();
  const initialStateOfCart = { cartToShow: cartFromDB };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        addToCart(cartReducerOperation, action.payload);
        return {
          cartToShow: [...state.cartToShow, { ...action.payload, qty: 1 }],
        };
      }
      case "REMOVE_FROM_CART": {
        removeFromCart(cartReducerOperation, action.payload._id);
        return {
          cartToShow: state.cartToShow.filter((x) => x !== action.payload),
        };
      }
      case "INCREASE_OR_DECREASE_COUNT_FROM_CART": {
        increaseOrDecreaseCountFromCart(
          cartReducerOperation,
          action.payload.product._id,
          action.payload.type
        );
        if (action.payload.type === "increment") {
          return {
            cartToShow: state.cartToShow.map((x) =>
              x._id === action.payload.product._id
                ? { ...x, qty: x.qty + 1 }
                : { ...x }
            ),
          };
        } else
          return {
            cartToShow: state.cartToShow.map((x) =>
              x._id === action.payload.product._id
                ? { ...x, qty: x.qty - 1 }
                : { ...x }
            ),
          };
      }
      default:
        return { cartToShow: [] };
    }
  }, initialStateOfCart);

  return (
    <CartContext.Provider
      value={{
        cartFromDB,
        loadingCart,
        cartReducerState: state,
        cartReducerDispatch: dispatch,
        cartToShow: state.cartToShow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
