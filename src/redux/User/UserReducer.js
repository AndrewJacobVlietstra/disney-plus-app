import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: { userName: '', loggedIn: false },
  reducers: {
    logUserIn: (state, action) => {
      return {...state, userName: 'Guest', loggedIn: true};
    },
    logUserOut: (state, action) => {
      return {...state, userName: '', loggedIn: false};
    },
  }
});




export const { logUserIn, logUserOut } = userSlice.actions;
export default userSlice.reducer;