import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/axios";

// 게시물 등록
export const carrotPost = (newPost) => {
  return async function (dispatch) {
    axios
      .post("http://localhost:5001/posts", newPost)
      .then((res) => {
        console.log(res);
        dispatch(uploadPost(newPost));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 게시물 조회
export const carrotGetPost = () => {
  return async function (dispatch) {
    axios
      .get("http://localhost:5001/posts/1")
      .then((res) => {
        //console.log(res);
        dispatch(getLoadPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 메인화면 포스트 
export const loadMainposts = () =>{
  return async function (dispatch) {
      await axios.get("http://54.180.121.151/api/post").then(re=>{
          dispatch(roadPosts(re.data));
      })
  }
}



//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    postList: [],
    post: {},
  },
  reducers: {
    uploadPost: (state, action) => {
      const title = action.payload.title;
      const postImg = action.payload.postImg;
      const category = action.payload.category;
      const price = action.payload.price;
      state.postList.push({ title, postImg, category, price });
    },
    getLoadPost: (state, action) => {
      state.post = action.payload;
      //console.log(state.post);
    },
    roadPosts : (state, action) =>{
      state.postList = action.payload;
    }
  },
});

const { uploadPost, getLoadPost, roadPosts} = postSlice.actions;
export default postSlice.reducer;
