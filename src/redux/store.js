import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/User';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

export default store;