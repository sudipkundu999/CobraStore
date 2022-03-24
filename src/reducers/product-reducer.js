import { useReducer } from "react";
import { useProducts } from "../contexts";

export const useProductReducer = () => {
  const { productsFromDB } = useProducts();

  const initialState = {
    filterTillPriceRange: 600,
    filterByRating: 4.0,
    filterByCategory: [],
    sortByPrice: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
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
          filterByCategory: [...state.filterByCategory, action.payload],
        };
      case "SORT_BY_PRICE":
        return { ...state, sortByPrice: action.payload };
      default:
        return initialState;
    }
  }, initialState);

  const sortByPriceFunc = () => {
    switch (state.sortByPrice) {
      case "PRICE_LOW_TO_HIGH":
        return (a, b) => a.price.current - b.price.current;
      case "PRICE_HIGH_TO_LOW":
        return (a, b) => b.price.current - a.price.current;
      default:
        return (a, b) => a === b;
    }
  };

  const productsToShow = productsFromDB
    .filter((x) => x.price.current <= state.filterTillPriceRange)
    .filter((x) => x.rating >= state.filterByRating)
    .filter((x) =>
      state.filterByCategory.length === 0
        ? true
        : state.filterByCategory.includes(x.category)
    )
    .sort(sortByPriceFunc());

  return { state, dispatch, productsToShow };
};
