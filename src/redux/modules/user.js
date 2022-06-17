import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../shared/axios";
import { saveToken } from "../../shared/localStorage";

export const carrotLogin = (users) => {
  return async function (dispatch) {
    const response = await login(users);

    try {
      const accessToken = response.data.token;
      if (accessToken) {
        dispatch(updateLogin(true));
        saveToken(accessToken);
        window.location.replace("/");
      } else {
        window.alert("로그인에 실패 했습니다.");
      }
    } catch (err) {
      console.alert(err, "에러 발생");
    }

  };
};

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
  },
  reducers: {
    updateLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const { updateLogin } = userSlice.actions;
export default userSlice.reducer;
