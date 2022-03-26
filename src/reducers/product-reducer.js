import { initialStateOfProductsFilter } from "../utils";

export const productReducerFunc = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE_RANGE":
      return { ...state, filterTillPriceRange: Number(action.range) };
    case "FILTER_BY_RATING":
      return { ...state, filterByRating: Number(action.payload) };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterByCategory: state.filterByCategory.includes(action.payload)
          ? state.filterByCategory.filter((x) => x !== action.payload)
          : [...state.filterByCategory, action.payload],
      };
    case "FILTER_BY_CATEGORY_FROM_HOMEPAGE":
      return {
        ...state,
        filterByCategory: [action.payload],
      };
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: action.payload };
    default:
      return initialStateOfProductsFilter;
  }
};
