import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://nodejs-hw-mongodb-aub4.onrender.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/auth/register", formData);
      setToken(data.data.token);

      return data.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/auth/login", formData);     
      setToken(data.data.accessToken);

      return data.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (formData, thunkApi) => {
    try {
     await instance.post("/auth/logout", formData);
      clearToken();

    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.accessToken;

      if (!token) {
        return thunkApi.rejectWithValue("No token available.");
      }
      
      setToken(token);
      const { data } = await instance.post("/auth/refresh");

      return data.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
