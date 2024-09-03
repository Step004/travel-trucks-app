import { createSelector } from "@reduxjs/toolkit";
import { selectEquipmentFilter, selectLocationFilter, selectVehicleTypeFilter } from "../filters/selectors.js";

export const selectCampers = (state) => state.camper.items.items;
export const selectCamper = (state) => state.camper.item;

export const selectTotal = (state) => state.camper.items.total;
export const selectLoading = (state) => state.camper.loading;
export const selectError = (state) => state.camper.error;

// export const selectUniversalFilter = createSelector(
//   [selectLocationFilter],
//   (locationFilter) => locationFilter
// );

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectUniversalFilter],
//   (contacts, filter) => {
//     if (!filter) {
//       return contacts;
//     }
//     return contacts.filter((contact) =>
//       contact.location.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const selectUniversalFilter = createSelector(
  [selectLocationFilter, selectEquipmentFilter, selectVehicleTypeFilter],
  (locationFilter, equipmentFilter, vehicleTypeFilter) => {
    return {
      location: locationFilter,
      equipment: equipmentFilter,
      vehicleType: vehicleTypeFilter,
    };
  }
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectUniversalFilter],
  (campers, filters) => {
    if (!filters) {
      return campers;
    }

    return campers.filter((camper) => {
      const locationMatch = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const equipmentMatch = filters.equipment.length
        ? filters.equipment.every((item) => camper[item] === true)
        : true;

      const vehicleTypeMatch = filters.vehicleType.length
        ? filters.vehicleType.includes(camper.form)
        : true;

      return locationMatch && equipmentMatch && vehicleTypeMatch;
    });
  }
);