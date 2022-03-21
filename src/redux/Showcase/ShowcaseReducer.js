import { createSlice } from "@reduxjs/toolkit";

export const showCaseSlice = createSlice({
  name: "Showcase",
  initialState: { showCase: ''},
  reducers: {
    updateShowcase: (state, action) => {
      return {...state, showCase: action.payload};
    },
  }
});

export const { updateShowcase, } = showCaseSlice.actions;
export default showCaseSlice.reducer;

