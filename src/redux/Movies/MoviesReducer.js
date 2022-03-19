import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "Movies",
  initialState: [],
  reducers: {
    popularMovies: (state, action) => {
      return {...state, popularMovies: action.payload};
    },
  }
});

export const { popularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

