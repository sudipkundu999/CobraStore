import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistToShow, setWishlistToShow] = useState([]);
  const {
    response: responseWishlist,
    loading: loadingWishlist,
    operation: operationWishlist,
  } = useAxios();

  const fetchWishlist = () => {
    operationWishlist({
      method: "get",
      url: "/api/user/wishlist",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  const { isUserLoggedIn } = useAuth();
  useEffect(() => {
    isUserLoggedIn ? fetchWishlist() : setWishlistToShow([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const addToWishlist = (product) => {
    operationWishlist({
      method: "POST",
      url: "/api/user/wishlist",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { product: product },
    });
  };

  const removeFromWishlist = (product) => {
    operationWishlist({
      method: "DELETE",
      url: `/api/user/wishlist/${product._id}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  useEffect(
    () =>
      responseWishlist !== undefined &&
      setWishlistToShow(responseWishlist.wishlist),
    [responseWishlist]
  );

  return (
    <WishlistContext.Provider
      value={{
        loadingWishlist,
        wishlistToShow,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
