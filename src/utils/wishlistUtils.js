export const addToWishlist = (apiCall, product) => {
  apiCall({
    method: "POST",
    url: "/api/user/wishlist",
    headers: {
      accept: "*/*",
      authorization: localStorage.getItem("cobraToken"),
    },
    body: { product: product },
  });
};

export const removeFromWishlist = (apiCall, product) => {
  apiCall({
    method: "DELETE",
    url: `/api/user/wishlist/${product._id}`,
    headers: {
      accept: "*/*",
      authorization: localStorage.getItem("cobraToken"),
    },
    body: {},
  });
};
