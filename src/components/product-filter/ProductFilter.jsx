import { useProducts } from "../../contexts";
import "./productFilter.css";

export const ProductFilter = ({ toggleSidebarVisible, isFilterVisible }) => {
  const {
    categoriesFromDB,
    productReducerState: state,
    productReducerDispatch: dispatch,
  } = useProducts();

  const {
    filterTillPriceRange,
    sortByPrice,
    filterByRating,
    filterByCategory,
  } = state;

  return (
    <aside
      className={`products-filter-aside ${isFilterVisible && "filter-mobile"}`}
    >
      <div className="filter filter-heading">
        <i
          className="fas fa-times close-filter-btn"
          onClick={() => toggleSidebarVisible()}
        />
        <h3>Filter</h3>
        <span>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="btn btn-link filter-clear"
          >
            Clear
          </button>
        </span>
      </div>

      <div className="filter filter-sort-by">
        <h3>Sort by</h3>
        <div className="filter-sort-by-wrapper">
          <label>
            <input
              type="radio"
              name="sort-by"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_HIGH_TO_LOW",
                })
              }
              checked={sortByPrice === "PRICE_HIGH_TO_LOW" ? true : false}
            />
            Price : High to Low
          </label>
        </div>
        <div className="filter-sort-by-wrapper">
          <label>
            <input
              type="radio"
              name="sort-by"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_LOW_TO_HIGH",
                })
              }
              checked={sortByPrice === "PRICE_LOW_TO_HIGH" ? true : false}
            />
            Price : Low to High
          </label>
        </div>
      </div>

      <div className="filter filter-category">
        <h3>Category</h3>
        {categoriesFromDB.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="category"
              value={item}
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: e.target.value,
                });
              }}
              checked={filterByCategory.includes(item) ? true : false}
            />
            {item}
          </label>
        ))}
      </div>

      <div className="filter filter-price">
        <h3>Price</h3>
        <div className="filter-price-range">
          <div className="price-min">Min</div>
          <div className="price-max">Max</div>
        </div>
        <input
          type="range"
          name="filter-price-range"
          min={150}
          max={600}
          step={50}
          value={filterTillPriceRange}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_PRICE_RANGE", range: e.target.value })
          }
        />
      </div>

      <div className="filter filter-rating">
        <h3>Rating</h3>
        {[4.8, 4.6, 4.4, 4.2, 4.0].map((r) => (
          <label key={r}>
            <input
              type="radio"
              name="rating"
              value={r}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_RATING",
                  payload: e.target.value,
                })
              }
              checked={filterByRating === r ? true : false}
            />
            {r.toFixed(1)} Stars & above
          </label>
        ))}
      </div>
    </aside>
  );
};
