import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadMainposts = () =>{
    return async function (dispatch) {
        await axios.get("http://localhost:5001/posts").then(re=>{
            dispatch(roadPosts(re.data));
        })
    }
}


const mainPosts = createSlice({
    name : "posts",
    initialState: {list : []},
    reducers : {
        roadPosts : (state, action) =>{
            state.list = action.payload;
        }
    }
})

const { roadPosts } = mainPosts.actions;
export default mainPosts.reducer;