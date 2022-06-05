import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  isloggedIn: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state) {
      state.isloggedIn = true;
    },
    logout(state) {
      state.isloggedIn = false;
    },
  },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;
