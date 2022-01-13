/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },

  payment: {
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  },
};

const slice = createSlice({
  name: "Payment",
  initialState,
  reducers: {
    loadInitialState(state) {
      state = initialState;
    },

    saveAddress(state, action) {
      state.address = action.payload;
    },

    savePaymentInfo(state, action) {
      state.payment = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------- Actions -----------------------------

export function saveAddress(data) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.saveAddress(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function savePaymentInfo(data) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.savePaymentInfo(data));
    } catch (error) {
      console.log(error);
    }
  };
}
