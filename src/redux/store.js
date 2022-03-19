import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/User';
import moviesReducer from './Movies/Movies';

const store = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesReducer,
  }
});

export default store;