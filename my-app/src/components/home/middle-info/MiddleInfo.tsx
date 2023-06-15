import { useAppSelector } from "../../../hooks/redux";
import Post from "../../../ui/post/Post";
import style from "./MiddleInfo.module.scss";
import Spinner from "react-bootstrap/Spinner";

const MiddleInfo = () => {
 const { posts, error, isLoading } = useAppSelector((store) => store.post);
 //console.log(posts);

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

   {posts.length !== 0 && posts.map((post) => <Post {...post} />)}
  </div>
 );
};
export default MiddleInfo;
