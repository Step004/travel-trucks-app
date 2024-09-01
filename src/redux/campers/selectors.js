import { createSelector } from "@reduxjs/toolkit";
import { selectLocationFilter } from "../filters/selectors.js";

export const selectCampers = (state) => state.camper.items.items;
export const selectCamper = (state) => state.camper.item;

export const selectTotal = (state) => state.camper.items.total;
export const selectLoading = (state) => state.camper.loading;
export const selectError = (state) => state.camper.error;

export const selectUniversalFilter = createSelector(
  [selectLocationFilter],
  (locationFilter) => locationFilter
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectUniversalFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);