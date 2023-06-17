import { PostService } from "../../services/post.service";
import { AppDispatch } from "../store";
import {
 userFetching,
 userFetchingError,
 userFetchingSuccess,
} from "./userSlice";

export const getUser = () => async (dispatch: AppDispatch) => {
 try {
  dispatch(userFetching());
  const response = await PostService.getUsers();
  setTimeout(() => {
   dispatch(userFetchingSuccess(response.data));
  }, 500);
 } catch (error: any) {
  dispatch(userFetchingError(error));
 }
};
