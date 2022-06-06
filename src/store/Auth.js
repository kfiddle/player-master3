import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  loggedIn: false,
  jwtToken: null,
  loggedInUser: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.jwtToken = action.payload;
      state.loggedInUser = action.payload.user;
    },
    logout(state) {
      state.loggedIn = false;
      state.jwtToken = '';
    },
  },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;
