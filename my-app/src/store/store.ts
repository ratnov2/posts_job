import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";
import commentsSlice from "./comments/commentsSlice";

export const store = configureStore({
 reducer: {
  post: postSlice,
  comments: commentsSlice,
 },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
