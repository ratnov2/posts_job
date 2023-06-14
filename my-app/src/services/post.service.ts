import { $host } from "../api/api";
import { TypeComment, TypePost } from "../api/tapi-types/api.types";

export const PostService = {
 async getAllPosts() {
  const response = await $host.get<TypePost[]>("/posts");
  return response;
 },
 async getPost(searchTerm: string) {
  const response = await $host.get<TypePost>(`/posts/${searchTerm}`);
  return response;
 },
 async getCommentsByPost(searchTerm: string) {
  const response = await $host.get<TypeComment[]>(`/posts/${searchTerm}/comments`);
  return response;
 },
};
