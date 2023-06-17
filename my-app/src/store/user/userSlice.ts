import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypePost, TypeUsers } from "../../api/tapi-types/api.types";

export interface IUserState {
 users: TypeUsers[] | null;
 isLoading: boolean;
 error: string;
}

const initialState: IUserState = {
 users: null,
 isLoading: true,
 error: "",
};

export const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  userFetching: (state) => {
   state.isLoading = true;
  },
  userFetchingSuccess: (state, action: PayloadAction<TypeUsers[]>) => {
   state.isLoading = false;
   state.users = action.payload;
   state.error = "";
  },
  userFetchingError: (state, action: PayloadAction<string>) => {
   state.isLoading = false;
   state.error = action.payload;
  },
 },
});

export const { userFetching, userFetchingSuccess, userFetchingError } =
 userSlice.actions;

export default userSlice.reducer;
