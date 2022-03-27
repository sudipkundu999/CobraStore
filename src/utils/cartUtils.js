export const addToCart = (apiCall, product) => {
  apiCall({
    method: "POST",
    url: "/api/user/cart",
    headers: {
      accept: "*/*",
      authorization: localStorage.getItem("cobraToken"),
    },
    data: { product: product },
  });
};

export const removeFromCart = (apiCall, productID) => {
  apiCall({
    method: "DELETE",
    url: `/api/user/cart/${productID}`,
    headers: {
      accept: "*/*",
      authorization: localStorage.getItem("cobraToken"),
    },
    data: {},
  });
};

export const increaseOrDecreaseCountFromCart = (apiCall, productID, type) => {
  apiCall({
    method: "POST",
    url: `/api/user/cart/${productID}`,
    headers: {
      accept: "*/*",
      authorization: localStorage.getItem("cobraToken"),
    },
    data: { action: { type: type } },
  });
};
