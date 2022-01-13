/** @format */

import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

const initialState = {
  myProfile: {
    name: "",
    email: "",
    password: "",
  },
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

// ----------------------------------------------------------------------

// export function createNewProfile(data) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const accessToken = window.localStorage.getItem('accessToken');

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': accessToken
//         }
//       };

//       const response = await axios.post('/api/profile', data, config);
//       dispatch(slice.actions.saveProfile(response.data));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
