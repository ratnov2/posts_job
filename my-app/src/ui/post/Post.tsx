import { FC } from "react";
import { TypePost } from "../../api/tapi-types/api.types";
import Image from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/Card";
import user from "@/assets/img/user.png";
import style from "./Post.module.scss";
import { Link } from "react-router-dom";

const Post: FC<TypePost> = ({ body, id, title, userId }) => {
 return (
  <li className={style.post}>
   <Link to={userId}>
    <Image src={user} width={40} />
   </Link>
   <Card>
    <Card.Body>
     <Card.Title>{title}</Card.Title>
     <Card.Text>{body}</Card.Text>
     <span className={style.openComments}>Comments</span>
    </Card.Body>
    {/* <Card.Footer>wef</Card.Footer> */}
   </Card>
  </li>
 );
};

export default Post;
