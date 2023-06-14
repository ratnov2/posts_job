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
  dispatch(postsFetchingSuccess(response.data));
 } catch (error: any) {
  dispatch(postsFetchingError(error));
 }
};
