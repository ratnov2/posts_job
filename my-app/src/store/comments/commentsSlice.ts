import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeComment, TypePost } from "../../api/tapi-types/api.types";
import { ErrorComments } from "./actionCreators";

export interface ICommentState {
 comments: {
  [userId: string]: TypeComment[];
 };
 loadingIdPost: string[];
 error: string;
}

const initialState: ICommentState = {
 comments: {},
 loadingIdPost: [],
 error: "",
};

export const commentsSlice = createSlice({
 name: "comments",
 initialState,
 reducers: {
  commentsFetching: (state, action: PayloadAction<string>) => {
   state.loadingIdPost.push(action.payload);
  },
  commentsFetchingSuccess: (state, action: PayloadAction<TypeComment[]>) => {
   const index = state.loadingIdPost.indexOf(action.payload[0].id);
   state.loadingIdPost.splice(index, 1);
   state.comments[action.payload[0].postId] = action.payload;
   state.error = "";
  },
  commentsFetchingError: (state, action: PayloadAction<ErrorComments>) => {
   const index = state.loadingIdPost.indexOf(action.payload.searchTerm);
   state.loadingIdPost.splice(index, 1);
   state.error = action.payload.error;
  },
 },
});

export const {
 commentsFetching,
 commentsFetchingSuccess,
 commentsFetchingError,
} = commentsSlice.actions;

export default commentsSlice.reducer;
