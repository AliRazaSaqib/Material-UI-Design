/** @format */

import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

const initialState = {
  myProfile: {
    name: "",
    email: "",
    password: "",
  },
  isAuthenticated: false,
};

const slice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loadInitialState(state) {
      state = initialState;
    },

    saveProfile(state, action) {
      state.myProfile = action.payload;
      state.isAuthenticated = true;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function saveUser(data) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.saveProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
}
