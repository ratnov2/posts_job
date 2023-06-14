import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypePost } from "../../api/tapi-types/api.types";

export interface IPostState {
 posts: TypePost[];
 isLoading: boolean;
 error: string;
}

const initialState: IPostState = {
 posts: [],
 isLoading: true,
 error: "",
};

export const postSlice = createSlice({
 name: "posts",
 initialState,
 reducers: {
  postsFetching: (state) => {
   state.isLoading = true;
  },
  postsFetchingSuccess: (state, action: PayloadAction<TypePost[]>) => {
    state.isLoading = false;
    state.posts = action.payload;
    state.error = "";
   },
   postsFetchingError: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
   },
 },
});

export const { postsFetching,postsFetchingSuccess, postsFetchingError} = postSlice.actions;

export default postSlice.reducer;
