import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations.js";


const camperInitialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: " campers",
  initialState: camperInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCampersById.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (camper) => camper.id === action.payload.id
        );
        state.loading = false;
      })
      .addCase(fetchCampersById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
