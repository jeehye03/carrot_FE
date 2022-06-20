import { createSlice } from "@reduxjs/toolkit";
import { loadProfile } from "../../shared/axios";
import axios from "axios";

export const carrotLoginStatus = (status) => {
  return async function (dispatch) {
    dispatch(updateLogin(status));
  }
};

export const carrotLogin = (token) => {
  return async function (dispatch) {
    dispatch(updateLogin(true));
    const response = await axios.get("http://54.180.121.151/api/user/me", { headers : {"Authorization": `Bearer ${token}`} });
    dispatch(setUser(response.data.user));
  }
}

export const getCarrotUserInfo = () => {
  return async function (dispatch) {
    const response = await loadProfile();
    console.log(response);
    dispatch(setUser(response.data.user));
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