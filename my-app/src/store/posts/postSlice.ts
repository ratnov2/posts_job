import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypePost } from "../../api/tapi-types/api.types";

export interface PostState extends TypePost {
 loading: boolean;
}

const initialState: PostState = {
 body: "",
 id: "",
 userId: "",
 title: "",
 loading: true,
};

export const postSlice = createSlice({
 name: "post",
 initialState,
 reducers: {
  savePost: (state, action: PayloadAction<TypePost>) => {
   state = { ...state, ...action.payload };
  },
 },
});

export const { savePost } = postSlice.actions;

export default postSlice.reducer