import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: { userName: `Guest#${Math.floor(Math.random() * 1000)}`, userImage: 'images/astronaut.png', loggedIn: false },
  reducers: {
    logUserIn: (state, action) => {
      return {...state, loggedIn: true};
    },
    logUserOut: (state, action) => {
      return {...state, loggedIn: false};
    },
    updateUserName: (state, action) => {
      return {...state, userName: action.payload};
    },
    updateUserImage: (state, action) => {
      return {...state, userImage: action.payload};
    },
  }
});




export const { logUserIn, logUserOut, updateUserName, updateUserImage } = userSlice.actions;
export default userSlice.reducer;