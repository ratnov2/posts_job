import { FC, memo, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { TypeComment } from "../../api/tapi-types/api.types";
import Card from "react-bootstrap/Card";
import style from "./Comments.module.scss";
import user from "@/assets/img/user-comment.png";
import Image from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

const Comments: FC<IComments> = ({ isOpen, comments, loading, userId }) => {
 return (
  <Collapse in={isOpen && loading === -1}>
   <div>
    <Card className={style.card}>
     {comments !== undefined &&
      comments.map((comment) => (
       <Card.Body key={comment.id}>
        <Card.Title className={style.title}>
         <Image width={30} height={30} src={user} alt="user-comment" />
         <div className={style.titleText}>
          <span>{comment.name}</span>
          <a href={`mailto:${comment.email}`}>{comment.email}</a>
         </div>
        </Card.Title>
        <Card.Text className={style.text}>{comment.body}</Card.Text>
       </Card.Body>
      ))}
    </Card>
   </div>
  </Collapse>
 );
};

interface IComments {
 isOpen: boolean;
 comments: TypeComment[];
 loading: number;
 userId: string;
}

export default Comments;
