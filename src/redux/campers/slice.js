import { createSlice } from "@reduxjs/toolkit";

const camperInitialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: " campers",
  initialState: camperInitialState,
  extraReducers: (builder) => builder.addCase(),
});

export default slice.reducer;
