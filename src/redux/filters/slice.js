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
      state.filters.location = action.payload;
    },
  },
});
export const { changeFilter } = slice.actions;

export default slice.reducer;
