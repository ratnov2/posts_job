import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypePost, TypeUser } from "../../api/tapi-types/api.types";

export interface IUserState {
 user: TypeUser | null;
 isLoading: boolean;
 error: string;
}

const initialState: IUserState = {
 user: null,
 isLoading: true,
 error: "",
};

export const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  postsFetching: (state) => {
   state.isLoading = true;
  },
  postsFetchingSuccess: (state, action: PayloadAction<TypeUser>) => {
   state.isLoading = false;
   state.user = action.payload;
   state.error = "";
  },
  postsFetchingError: (state, action: PayloadAction<string>) => {
   state.isLoading = false;
   state.error = action.payload;
  },
 },
});

export const { postsFetching, postsFetchingSuccess, postsFetchingError } =
 userSlice.actions;

export default userSlice.reducer;
