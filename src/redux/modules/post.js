import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/axios";

// 찜하기
export const postLike = (postId) => {
  return async function (dispatch) {
    instance
      .post(`api/like/${postId}`)
      .then((res) => {
        console.log(res);
        dispatch(likeNum(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 찜하기 취소
export const postUnLike = (postId) => {
  return function (dispatch) {
    instance
      .delete(`api/like/${postId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 게시물 등록
export const carrotPost = (newPost) => {
  return async function (dispatch) {
    await instance
      .post("api/post", newPost)
      .then((res) => {
        dispatch(uploadPost(newPost));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 게시물 수정
export const modyfyPost = (modifyPostInfo) => {
  return async function (dispatch) {
    console.log(modifyPostInfo);
    await instance
      .put(`/api/post/${modifyPostInfo.postId}`, modifyPostInfo)
      .then((re) => {
        console.log(re);
      });
  };
};

// 게시물 상세 조회
export const carrotGetPost = (postId) => {
  return async function (dispatch) {
    await instance
      .get(`api/post/${postId}`)
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
export const loadMainposts = () => {
  return async function (dispatch) {
    await instance
      .get("/api/post")
      .then((re) => {
        dispatch(roadPosts(re.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 판매목록 리드
export const loadSalseposts = () => {
  return async function (dispatch) {
    await instance
      .get("/api/user")
      .then((re) => {
        dispatch(roadPosts(re.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 관심목록 리드
export const loadConcernsposts = () => {
  return async function (dispatch) {
    await instance
      .get("/api/user/likeList")
      .then((re) => {
        dispatch(roadPosts(re.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
    roadPosts: (state, action) => {
      state.postList = action.payload;
    },
    likeNum: (state, action) => {
      state.likeNum = action.payload;
      //console.log(state.likeNum);
    },
  },
});

const { uploadPost, getLoadPost, roadPosts, likeNum } = postSlice.actions;
export default postSlice.reducer;
