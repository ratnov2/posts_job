import { FC, useEffect, useState } from "react";
import style from "./usePaginationShare.module.scss";
import { TypePost } from "../../../api/tapi-types/api.types";

interface IPagination {
 length: number | null;
 currentPage: number;
 pages: number | null;
}

const usePaginationShare = (posts: TypePost[]) => {
 const [pageIndex, setPageIndex] = useState<IPagination>({
  currentPage: 1,
  pages: null,
  length: null,
 });
 useEffect(() => {
  if (pageIndex.length === null && posts.length) {
   setPageIndex((state) => ({
    ...state,
    length: posts.length,
    pages: Math.ceil(posts.length / 10),
   }));
  }
 }, [posts]);
 const nextPage = () => {
  let currentPage = pageIndex.currentPage;
  if (pageIndex.pages !== null && currentPage++ >= pageIndex.pages) return;
  setPageIndex((state) => ({ ...state, currentPage: state.currentPage++ }));
 };
 const prevPage = () => {
  let currentPage = pageIndex.currentPage;
  if (pageIndex.pages !== null && currentPage-- <= 1) return;
  setPageIndex((state) => ({ ...state, currentPage: state.currentPage-- }));
 };
 const setPage = (page: number) => {
  setPageIndex((state) => ({ ...state, currentPage: page }));
 };
 return { nextPage, prevPage, setPage,pageIndex };
};
export default usePaginationShare;
