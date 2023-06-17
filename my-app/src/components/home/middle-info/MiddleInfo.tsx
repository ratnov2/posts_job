import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getComments } from "../../../store/comments/actionCreators";
import Post from "../../../ui/post/Post";
import style from "./MiddleInfo.module.scss";
import Spinner from "react-bootstrap/Spinner";

const MiddleInfo = () => {
 const { posts, error, isLoading } = useAppSelector((store) => store.post);
 const { comments, loadingIdPost } = useAppSelector(
  (state) => state.comments
 );

 const dispatch = useAppDispatch();
 const getPostHandler = (postId: string) => {
  dispatch(getComments(postId));
 };
 return (
  <div className={style.middleInfo}>
   <div className={style.header}>
    <h1>Blog for the curious</h1>
    <p>
     There are always fresh and interesting posts for your leisure and
     development
    </p>
   </div>
   {isLoading && <Spinner animation="border" variant="success" />}
   {posts.length !== 0 &&
    posts.map((post) => (
     <Post
      getPost={() => getPostHandler(post.id)}
      {...post}
      key={post.id}
      // comments={comments[userId]}
     />
    ))}
  </div>
 );
};
export default MiddleInfo;
