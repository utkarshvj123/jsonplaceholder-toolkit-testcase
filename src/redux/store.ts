import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import detailPostReducer from "../features/posts/detailPostSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    singlePostDetail: detailPostReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
