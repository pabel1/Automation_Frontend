import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.access_token = undefined;
      state.user = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
