import { PostService } from "../../services/post.service";
import { AppDispatch } from "../store";
import postSlice, {
 postsFetching,
 postsFetchingError,
 postsFetchingSuccess,
} from "./postSlice";

export const getPosts = () => async (dispatch: AppDispatch) => {
 try {
  dispatch(postsFetching());
  const response = await PostService.getAllPosts();
  setTimeout(() => {
   dispatch(postsFetchingSuccess(response.data));
  }, 500);
 } catch (error: any) {
  dispatch(postsFetchingError(error));
 }
};
