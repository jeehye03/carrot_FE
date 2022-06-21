import { createSlice } from "@reduxjs/toolkit";
import { instance, loadProfile } from "../../shared/axios";
import axios from "axios";

export const carrotLoginStatus = (status) => {
  return async function (dispatch) {
    dispatch(updateLogin(status));
  }
};

export const getCarrotUserInfo = () => {
  return async function (dispatch) {
    try {
      const response = await loadProfile();
      dispatch(setUser(response.data.user));
    } catch (err) {
      console.log(err);
    }
  }
}

//Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    nickname: "",
    userLocation: "",
    userImg: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload.nickname;
      state.userLocation = action.payload.userLocation;
      state.userImg = action.payload.userImg;
    },
    updateLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const { updateLogin, setUser } = userSlice.actions;
export default userSlice.reducer;