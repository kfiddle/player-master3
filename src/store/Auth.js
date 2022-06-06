import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  randomTruth: true,
  loggedIn: false,
  jwtToken: 'Fank the Tank',
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.jwtToken = action.payload;
    },
    logout(state) {
      state.loggedIn = false;
      state.jwtToken = '';
    },
  },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;
