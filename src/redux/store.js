import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/UserReducer';
import moviesReducer from './Movies/MoviesReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  }
});

export default store;