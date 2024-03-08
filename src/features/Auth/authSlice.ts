import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "./authApi";
import { RootState } from "../../app/store";

export interface AuthUserParams {
  token: string | undefined;
  success: boolean;
  name: string
}

export interface AuthUser {
  data: AuthUserParams;
}
export interface User {
  username: string,
  password: string,
}
const initialState: AuthUser = {
  data: {
    token: '',
    success: false,
    name: '' 
  }
}

export const apiLogin = createAsyncThunk(
  'auth/login',
  async (user: User) => {
    const response = await login(user.username, user.password);
    console.log('res', response)
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;  
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data.token = undefined;
      localStorage.removeItem('token');
      window.location.reload();
    },
    loadAllToken: (state, action) => {
      state.data = action.payload 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiLogin.fulfilled, (state, action) => {
        console.log("Api fullfilled ", action.payload);
        if (action.payload.success) {
          state.data = action.payload;
        }
      });
  }
});

export const { logout, loadAllToken } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;