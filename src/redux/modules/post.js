import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../../shared/axios";

// 찜하기
export const postLike = (postId) => {
  return function (dispatch) {
    instance
      .post(`api/like/${postId}`)
      .then((res) => {
        //console.log(res);
        dispatch(setLike({ userLike: true, likeNum: res.data.likeNum }));
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
        //console.log(res.data);
        dispatch(setLike({ userLike: false, likeNum: res.data.likeNum }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 게시물 등록
export const carrotPost = (newPost, navigate) => {
  return async function (dispatch) {
    try {
      const res = await instance.post("api/post", newPost);
      dispatch(uploadPost(newPost));
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };
};

// 게시물 수정
export const modyfyPost = (modifyPostInfo, navigate) => {
  return async function (dispatch) {
    await instance
      .put(`/api/post/${modifyPostInfo.postId}`, modifyPostInfo)
      .then((re) => {
        dispatch(getLoadPost(re.data));
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//게시물 삭제

export const deletePost = (postId, navigate) => {
  return async function (dispatch) {
    await instance
      .delete(`/api/post/${postId}`)
      .then((re) => {
        dispatch(roadPosts(re.data));
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 게시물 상세 조회
export const carrotGetPost = (postId) => {
  return async function (dispatch) {
    await instance
      .get(`api/post/${postId}`)
      .then((res) => {
        // console.log(res.data);
        dispatch(getLoadPost(res.data.detailPost));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 메인화면 포스트 리드
export const loadMainposts = () => {
  return async function (dispatch) {
    await instance
      .get("/api/post")
      .then((re) => {
        dispatch(roadPosts(re.data));
        /*
        re.data = {
          result: true,
          posts: [{}, {}, {}]
        }
        */
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
      .get("/api/user/sellList")
      .then((re) => {
        dispatch(loadSalesPosts(re.data));
      })
      .catch((err) => {
        console.log("판매목록" + err);
      });
  };
};

// 관심목록 리드
export const loadConcernsposts = () => {
  return async function (dispatch) {
    await instance
      .get("/api/user/likeList")
      .then((re) => {
        console.log(re);
        dispatch(roadPosts(re.data));
      })
      .catch((err) => {
        console.log("관심목록" + err);
      });
  };
};

export const changeTradeStateDB = (postId, state) => {
  return async function (dispatch) {
    const response = await instance.patch(`/api/post/tradeState/${postId}`, {
      tradeState: state,
    });
    console.log(response);
    dispatch(changeTradeState({ id: postId, tradeState: state }));
  };
};

// 객체는 map, reduce, filter라는 함수가 없음
// SalesList에서는 postList를 map을 돌리고 있고
// MainItemList에선은 postList.posts를 맵을 돌리고 있음

//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    postList: [],
    post: {},
  },
  reducers: {
    uploadPost: (state, action) => {
      state.postList.posts.push(action.payload);
    },
    getLoadPost: (state, action) => {
      state.post = action.payload;
    },
    roadPosts: (state, action) => {
      state.postList = action.payload.posts;
    },
    loadSalesPosts: (state, action) => {
      state.postList = action.payload;
    },
    setLike: (state, action) => {
      state.post.likeNum = action.payload.likeNum;
      state.post.userLike = action.payload.userLike;
    },
    changeTradeState: (state, action) => {
      state.postList = state.postList.map((post) => {
        if (post.postId === action.payload.id) {
          post.tradeState = action.payload.tradeState;
        }
        return post;
      });
    },
  },
});

const { uploadPost, getLoadPost, roadPosts, loadSalesPosts, changeTradeState, setLike } =
  postSlice.actions;
export default postSlice.reducer;
