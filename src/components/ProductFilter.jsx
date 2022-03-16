import "./component-css/productFilter.css";

export const ProductFilter = () => {
  return (
    <aside className="products-filter-aside">
      <div className="filter filter-heading">
        <h3>Filter</h3>
        <span>
          <a href="/" className="filter-clear">
            Clear
          </a>
        </span>
      </div>

      <div className="filter filter-sort-by">
        <h3>Sort by</h3>
        <div className="filter-sort-by-wrapper">
          <label>
            <input type="radio" name="sort-by" />
            Price : High to Low
          </label>
        </div>
        <div className="filter-sort-by-wrapper">
          <label>
            <input type="radio" name="sort-by" />
            Price : Low to High
          </label>
        </div>
      </div>

      <div className="filter filter-category">
        <h3>Category</h3>
        <div className="filter-category-wrapper">
          <label>
            <input type="checkbox" name="category" />
            Fiction
          </label>
        </div>
        <div className="filter-category-wrapper">
          <label>
            <input type="checkbox" name="category" />
            Romance
          </label>
        </div>
        <div className="filter-category-wrapper">
          <label>
            <input type="checkbox" name="category" />
            Self Help
          </label>
        </div>
        <div className="filter-category-wrapper">
          <label>
            <input type="checkbox" name="category" />
            Mystery
          </label>
        </div>
      </div>

      <div className="filter filter-price">
        <h3>Price</h3>
        <div className="filter-price-range">
          <div className="price-min">₹100</div>
          <div className="price-max">Max</div>
        </div>
        <input
          type="range"
          name="filter-price-range"
          min={100}
          max={1000}
          step={100}
        />
      </div>

      <div className="filter filter-rating">
        <h3>Rating</h3>
        <div className="filter-rating-wrapper">
          <label>
            <input type="radio" name="rating" />4 Stars & above
          </label>
        </div>
        <div className="filter-rating-wrapper">
          <label>
            <input type="radio" name="rating" />3 Stars & above
          </label>
        </div>
        <div className="filter-rating-wrapper">
          <label>
            <input type="radio" name="rating" />2 Stars & above
          </label>
        </div>
        <div className="filter-rating-wrapper">
          <label>
            <input type="radio" name="rating" />1 Stars & above
          </label>
        </div>
      </div>
    </aside>
  );
};
