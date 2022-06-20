import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  loggedIn: false,
  jwtToken: null,
  loggedInPlayer: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.jwtToken = action.payload.jwtToken;
      state.loggedInPlayer = action.payload.player;
    },
    logout(state) {
      state.loggedIn = false;
      state.jwtToken = null;
      state.loggedInPlayer = null;
    },
  },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;
