import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    admin: false,
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
    setAdmin: (state) => {
      state.isFetching = false;
      state.admin = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutUser, setAdmin } =
  userSlice.actions;
export default userSlice.reducer;
