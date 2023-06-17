import { FC, memo, useEffect, useState } from "react";
import { TypePost } from "../../api/tapi-types/api.types";
import Image from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/Card";
import user from "@/assets/img/user.png";
import style from "./Post.module.scss";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useAppSelector } from "../../hooks/redux";
import Spinner from "react-bootstrap/esm/Spinner";

interface Post extends TypePost {
 getPost: () => void;
}

const Post: FC<Post> = memo(({ body, id, title, userId, getPost }) => {
 const [isOpen, setIsOpen] = useState(false);
 const { loadingIdPost, comments } = useAppSelector((state) => state.comments);
 //console.log(loadingIdPost);

 //  useEffect(()=>{
 //   if(loadingIdPost.indexOf()){

 //   }
 //  },[loadingIdPost])

 return (
  <li className={style.post}>
   <Link to={`/user/${userId}`}>
    <Image src={user} width={40} className={style.img}/>
   </Link>
   <Card>
    <Card.Body>
     <Card.Title>{title}</Card.Title>
     <Card.Text>{body}</Card.Text>
     <span
      className={style.openComments}
      onClick={() => {
       if (!isOpen) getPost();
       setIsOpen(!isOpen);
      }}
     >
      Comments
     </span>
    </Card.Body>
    <Card.Footer>wef</Card.Footer>
   </Card>
   {loadingIdPost.indexOf(id) !== -1 && (
    <div className={style.spinner}>
     <Spinner animation="border" variant="success" />
    </div>
   )}
   <Comments
    isOpen={isOpen}
    comments={comments[id]}
    userId={userId}
    loading={loadingIdPost.indexOf(id)}
   />
  </li>
 );
});

export default Post;
