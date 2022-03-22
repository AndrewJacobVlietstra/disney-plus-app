import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: { userName: `Guest#${Math.floor(Math.random() * 1000)}`, userImage: 'images/astronaut.png', loggedIn: false },
  reducers: {
    logUserIn: (state, action) => {
      if (localStorage.getItem('currentDisneyCloneUser') === null) return {...state, loggedIn: true};

      const { userName, userImage } = JSON.parse(localStorage.getItem('currentDisneyCloneUser'));
      return {...state, userName, userImage, loggedIn: true};
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
    updateLocalStorageUser: (state, action) => {
      const { userName, userImage } = state;
      return localStorage.setItem('currentDisneyCloneUser', JSON.stringify({userName, userImage}));
    }
  }
});




export const { logUserIn, logUserOut, updateUserName, updateUserImage, updateLocalStorageUser, } = userSlice.actions;
export default userSlice.reducer;