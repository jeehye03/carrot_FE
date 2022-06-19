import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import posts from "./modules/mainPosts"
import post from './modules/post'

const store = configureStore({
  reducer: { user , post, posts}

});

export default store;
