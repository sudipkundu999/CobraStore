export const initialStateOfProductsFilter = {
  filterTillPriceRange: 600,
  filterByRating: 4.0,
  filterByCategory: [],
  sortByPrice: null,
  filterBySearch: "",
};

export const sortByPriceFunc = (howToSort) => {
  switch (howToSort) {
    case "PRICE_LOW_TO_HIGH":
      return (a, b) => a.price.current - b.price.current;
    case "PRICE_HIGH_TO_LOW":
      return (a, b) => b.price.current - a.price.current;
    default:
      return (a, b) => a === b;
  }
};
