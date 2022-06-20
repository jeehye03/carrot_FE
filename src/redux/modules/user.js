import { createSlice } from "@reduxjs/toolkit";

export const carrotLoginStatus = (status) => {
  return async function (dispatch) {
    dispatch(updateLogin(status));
  }
};

//Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    profileImage: "",
    nickname: "",
    location: ""
  },
  reducers: {
    updateLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const { updateLogin } = userSlice.actions;
export default userSlice.reducer;