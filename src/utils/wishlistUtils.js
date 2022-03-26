import axios from "axios";
import { notifyInfo, notifySuccess } from "./useNotifyUser";

export const addToWishlist = async (product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product: product },
      {
        headers: {
          accept: "*/*",
          authorization: localStorage.getItem("cobraToken"),
        },
      }
    );
    response !== undefined && notifySuccess("Item added to wishlist");
  } catch (error) {
    notifyInfo("Please Login to sync wishlist");
  }
};

export const removeFromWishlist = async (product) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
    });
    response !== undefined && notifySuccess("Item deleted from wishlist");
  } catch (error) {
    notifyInfo("Please Login to sync wishlist");
  }
};
