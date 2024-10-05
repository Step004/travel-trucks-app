// import { useState } from "react";
// import clsx from "clsx";
// import css from "./CatalogOptions.module.css";
// import SearchBox from "../SearchBox/SearchBox.jsx";
// import { useDispatch } from "react-redux";
// import { changeFilter } from "../../redux/filters/slice.js";

// export default function CatalogOptions() {
//   const dispatch = useDispatch();
//   const [selectedFilters, setSelectedFilters] = useState({
//     ac: false,
//     automatic: false,
//     kitchen: false,
//     tv: false,
//     bathroom: false,
//     van: false,
//     fullyIntegrated: false,
//     alcove: false,
//   });

//   const toggleFilter = (filter) => {
//     setSelectedFilters((prevFilters) => ({
//       ...prevFilters,
//       [filter]: !prevFilters[filter],
//     }));
//   };

//   const handleSearch = () => {
//     const activeFilters = Object.entries(selectedFilters)
//       .filter(([key, value]) => value)
//       .map(([key]) => key);

//     console.log("Активні фільтри:", activeFilters);
//   };
// // const handleSearch = () => {
// //   const activeFilters = Object.entries(selectedFilters).reduce(
// //     (acc, [key, value]) => {
// //       if (value) {
// //         if (["ac", "automatic", "kitchen", "tv", "bathroom"].includes(key)) {
// //           acc.equipment.push(key);
// //         } else if (["van", "fullyIntegrated", "alcove"].includes(key)) {
// //           acc.vehicleType.push(key);
// //         }
// //       }
// //       return acc;
// //     },
// //     { equipment: [], vehicleType: [] }
// //   );

// //   dispatch(changeFilter(activeFilters));
// // };

//   return (
//     <div className={css.container}>
      // <SearchBox />
//       <p className={css.pFilt}>Filters</p>
//       <div className={css.filters}>
//         <h3 className={css.heading}>Vehicle equipment</h3>
//         <div className={css.equipmentOptions}>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.ac,
//             })}
//             onClick={() => toggleFilter("ac")}
//           >
//             AC
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.automatic,
//             })}
//             onClick={() => toggleFilter("automatic")}
//           >
//             Automatic
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.kitchen,
//             })}
//             onClick={() => toggleFilter("kitchen")}
//           >
//             Kitchen
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.tv,
//             })}
//             onClick={() => toggleFilter("tv")}
//           >
//             TV
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.bathroom,
//             })}
//             onClick={() => toggleFilter("bathroom")}
//           >
//             Bathroom
//           </button>
//         </div>

//         <h3 className={css.heading}>Vehicle type</h3>
//         <div className={css.vehicleOptions}>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.van,
//             })}
//             onClick={() => toggleFilter("van")}
//           >
//             Van
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.fullyIntegrated,
//             })}
//             onClick={() => toggleFilter("fullyIntegrated")}
//           >
//             Fully Integrated
//           </button>
//           <button
//             className={clsx(css.filterBtn, {
//               [css.active]: selectedFilters.alcove,
//             })}
//             onClick={() => toggleFilter("alcove")}
//           >
//             Alcove
//           </button>
//         </div>

//         <button className={css.searchBtn} onClick={handleSearch}>
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import LocationInput from "../LocationInput/LocationInput.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import { selectFilters } from "../../redux/filters/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";
import css from "./CatalogOptions.module.css";
import SearchBox from "../SearchBox/SearchBox.jsx";


const filterSchema = Yup.object().shape({
  location: Yup.string(),
  form: Yup.string(),
  features: Yup.array(),
});

export default function FilterForm() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  console.log(filters);
  

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          location: filters.location,
          form: filters.form,
          features: filters.features,
        }}
        validationSchema={filterSchema}
        onSubmit={(values) => {
          dispatch(changeFilter(values));
        }}
      >
        <Form className={css.filterForm}>
          {/* <LocationInput /> */}
           <SearchBox />
          <VehicleEquipment />
          <VehicleType />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}