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
      <div className="filters">
        <h3 className="heading">Vehicle equipment</h3>
        <div className="equipmentOptions">
          <button
            className={`filterBtn ${selectedFilters.ac ? "active" : ""}`}
            onClick={() => toggleFilter("ac")}
          >
            AC
          </button>
          <button
            className={`filterBtn ${selectedFilters.automatic ? "active" : ""}`}
            onClick={() => toggleFilter("automatic")}
          >
            Automatic
          </button>
          <button
            className={`filterBtn ${selectedFilters.kitchen ? "active" : ""}`}
            onClick={() => toggleFilter("kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`filterBtn ${selectedFilters.tv ? "active" : ""}`}
            onClick={() => toggleFilter("tv")}
          >
            TV
          </button>
          <button
            className={`filterBtn ${selectedFilters.bathroom ? "active" : ""}`}
            onClick={() => toggleFilter("bathroom")}
          >
            Bathroom
          </button>
        </div>

        <h3 className="heading">Vehicle type</h3>
        <div className="vehicleOptions">
          <button
            className={`filterBtn ${selectedFilters.van ? "active" : ""}`}
            onClick={() => toggleFilter("van")}
          >
            Van
          </button>
          <button
            className={`filterBtn ${
              selectedFilters.fullyIntegrated ? "active" : ""
            }`}
            onClick={() => toggleFilter("fullyIntegrated")}
          >
            Fully Integrated
          </button>
          <button
            className={`filterBtn ${selectedFilters.alcove ? "active" : ""}`}
            onClick={() => toggleFilter("alcove")}
          >
            Alcove
          </button>
        </div>

        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
