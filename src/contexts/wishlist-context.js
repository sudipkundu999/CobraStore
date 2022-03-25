import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { addToWishlist, removeFromWishlist, useAxios } from "../utils";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  //Initial Fetching of Wishlist from DB
  const [wishlistFromDB, setWishlistFromDB] = useState([]);
  const {
    response: responseWishlist,
    loading: loadingWishlist,
    operation: fetchWishlist,
  } = useAxios();

  useEffect(() => {
    fetchWishlist({
      method: "get",
      url: "/api/user/wishlist",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      responseWishlist !== undefined &&
      setWishlistFromDB(responseWishlist.wishList),
    [responseWishlist]
  );

  //Update wishlist
  const initialStateOfWishlist = { wishlistToShow: wishlistFromDB };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST": {
        addToWishlist(action.payload);
        return { wishlistToShow: [...state.wishlistToShow, action.payload] };
      }
      case "REMOVE_FROM_WISHLIST": {
        removeFromWishlist(action.payload);
        return {
          wishlistToShow: state.wishlistToShow.filter(
            (x) => x !== action.payload
          ),
        };
      }
      default:
        return state;
    }
  }, initialStateOfWishlist);

  return (
    <WishlistContext.Provider
      value={{
        wishlistFromDB,
        loadingWishlist,
        wishlistReducerState: state,
        wishlistReducerDispatch: dispatch,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
