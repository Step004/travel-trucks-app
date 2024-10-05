import { createSlice } from "@reduxjs/toolkit";

const camperInitialState = {
  filters: {
    location: "",
    equipment: [],
    vehicleType: [],
  },
};

const slice = createSlice({
  name: "filters",
  initialState: camperInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.location = action.payload.location;
      state.filters.equipment = action.payload.equipment;
      state.filters.vehicleType = action.payload.vehicleType;
    },
  },
});
export const { changeFilter } = slice.actions;

export default slice.reducer;
