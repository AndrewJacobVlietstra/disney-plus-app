import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "Movies",
  initialState: [],
  reducers: {
    updateMoviesList: (state, action) => {
      return {...state, movies: action.payload};
    },
  }
});

export const { updateMoviesList } = moviesSlice.actions;
export default moviesSlice.reducer;

