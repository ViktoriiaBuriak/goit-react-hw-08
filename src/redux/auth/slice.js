import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      //register
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          _id: action.payload._id,
        };
        state.accessToken = action.payload.accessToken;
      })
      .addCase(register.rejected, handleRejected)
      //login
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          _id: action.payload._id,
        };
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, handleRejected)
      //logout
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logout.rejected, handleRejected)
      //refresh
      .addCase(refreshUser.pending, handlePending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          _id: action.payload._id,
        };
        state.accessToken = action.payload.accessToken; 
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, handleRejected, (state) => {
        state.isRefreshing = true;
      }),
});

export const authReducer = authSlice.reducer;
