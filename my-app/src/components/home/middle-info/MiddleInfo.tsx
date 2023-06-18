import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getComments } from "../../../store/comments/actionCreators";
import Post from "../../../ui/post/Post";
import style from "./MiddleInfo.module.scss";
import Spinner from "react-bootstrap/Spinner";
import PaginationScope from "./pagination/PaginationScope";
import usePaginationShare from "./usePaginationShare";

const MiddleInfo = () => {
 const { posts, error, isLoading } = useAppSelector((store) => store.post);

 const dispatch = useAppDispatch();
 const getPostHandler = (postId: string) => {
  dispatch(getComments(postId));
 };

 const { nextPage, prevPage, setPage, pageIndex } = usePaginationShare(posts);

 return (
  <div className={`${style.middleInfo} scroll-top-pagination`}>
   <div className={style.header}>
    <h1>Blog for the curious</h1>
    <p>
     There are always fresh and interesting posts for your leisure and
     development
    </p>
   </div>
   {isLoading && <Spinner animation="border" variant="success" />}
   {posts.length !== 0 &&
    posts
     .slice((pageIndex.currentPage - 1) * 10, pageIndex.currentPage * 10)
     .map((post) => (
      <Post getPost={() => getPostHandler(post.id)} {...post} key={post.id} />
     ))}
   {pageIndex.pages && (
    <PaginationScope
     activeIndex={pageIndex.currentPage}
     lastIndex={pageIndex.pages}
     nextPage={nextPage}
     prevPage={prevPage}
     setPage={setPage}
    />
   )}
  </div>
 );
};
export default MiddleInfo;
