import { $host } from "../api/api";
import { TypeComment, TypePost, TypeUser } from "../api/tapi-types/api.types";

export const PostService = {
 async getAllPosts() {
  const response = await $host.get<TypePost[]>("/posts");
  return response;
 },
 async getPost(postId: string) {
  const response = await $host.get<TypePost>(`/posts`);
  return response;
 },
 async getCommentsByPost(postId: string) {
  const response = await $host.get<TypeComment[]>(`/comments/`, {
   params: postId
    ? {
       postId,
      }
    : {},
  });
  return response;
 },
 async getUser() {
  const response = await $host.get<TypeUser>("/user");
  return response;
 },
};
