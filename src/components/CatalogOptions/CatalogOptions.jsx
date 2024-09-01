import { useState } from "react";
import css from "./CatalogOptions.module.css"
import SearchBox from "../SearchBox/SearchBox.jsx";


export default function CatalogOptions() {
    
    const [selectedFilters, setSelectedFilters] = useState({
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      van: false,
      fullyIntegrated: false,
      alcove: false,
    });

    const toggleFilter = (filter) => {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filter]: !prevFilters[filter],
      }));
    };

    const handleSearch = () => {
      const activeFilters = Object.entries(selectedFilters)
        .filter(([key, value]) => value)
        .map(([key]) => key);

      console.log("Активні фільтри:", activeFilters);
    };

  return (
    <div>
      <SearchBox />
      <p className={css.pFilt}>Filters</p>
      <div className={css.filters}>
        <h3 className={css.heading}>Vehicle equipment</h3>
        <div className={css.equipmentOptions}>
          <button className={css.filterBtn} onClick={() => toggleFilter("ac")}>
            AC
          </button>
          <button
            className={css.filterBtn}
            onClick={() => toggleFilter("automatic")}
          >
            Automatic
          </button>
          <button
            className={css.filterBtn}
            onClick={() => toggleFilter("kitchen")}
          >
            Kitchen
          </button>
          <button className={css.filterBtn} onClick={() => toggleFilter("tv")}>
            TV
          </button>
          <button
            className={css.filterBtn}
            onClick={() => toggleFilter("bathroom")}
          >
            Bathroom
          </button>
        </div>

        <h3 className="heading">Vehicle type</h3>
        <div className="vehicleOptions">
          <button className={css.filterBtn} onClick={() => toggleFilter("van")}>
            Van
          </button>
          <button
            className={css.filterBtn}
            onClick={() => toggleFilter("fullyIntegrated")}
          >
            Fully Integrated
          </button>
          <button
            className={css.filterBtn}
            onClick={() => toggleFilter("alcove")}
          >
            Alcove
          </button>
        </div>

        <button className={css.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
