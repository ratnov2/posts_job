import { PostService } from "../../services/post.service";
import { AppDispatch } from "../store";
import postSlice, {
 commentsFetching,
 commentsFetchingError,
 commentsFetchingSuccess,
} from "./commentsSlice";

export const getComments =
 (searchTerm: string) => async (dispatch: AppDispatch) => {
  try {
   dispatch(commentsFetching(searchTerm));
   const response = await PostService.getCommentsByPost(searchTerm);
   setTimeout(() => {
    dispatch(commentsFetchingSuccess(response.data));
   }, 500);
  } catch (error: any) {
   dispatch(commentsFetchingError({error,searchTerm}));
  }
 };

export type ErrorComments ={
  error:any,
  searchTerm:string
}