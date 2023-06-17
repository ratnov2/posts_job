import { $host } from "../api/api";
import { TypeComment, TypePost, TypeUsers } from "../api/tapi-types/api.types";

export const PostService = {
 async getAllPosts() {
  const response = await $host.get<TypePost[]>("/posts");
  return response;
 },
 async getPostsUser(userId: string) {
  const response = await $host.get<TypePost>(`/posts/${userId}`);
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
 async getUsers() {
  const response = await $host.get<TypeUsers[]>("/users");
  return response;
 },
};
