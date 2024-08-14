import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
  phoneNumber: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
