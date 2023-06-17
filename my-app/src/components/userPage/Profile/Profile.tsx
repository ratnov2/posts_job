import Image from "react-bootstrap/esm/Image";
import style from "./Profile.module.scss";
import userImg from "@/assets/img/user-comment.png";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../../store/user/actionCreators";
import Spinner from "react-bootstrap/esm/Spinner";
import { useLocation, useSearchParams } from "react-router-dom";
import ProfileItem from "../../../ui/profile-item/ProfileItem";
import useProfileShare from "./useProfileShare";
import { getComments } from "../../../store/comments/actionCreators";
import Post from "../../../ui/post/Post";
import { getPosts, getPostsByUser } from "../../../store/posts/actionCreators";
import { getParam } from "../../../utils/getParam";
const Profile = () => {
 const { pathname } = useLocation();
 const { isLoading, userField } = useProfileShare();
 const {
  posts,
  error,
  isLoading: isLoadingPost,
 } = useAppSelector((store) => store.post);

 const dispatch = useAppDispatch();
 const getPostHandler = (postId: string) => {
  dispatch(getComments(postId));
 };

 useEffect(() => {
  dispatch(getPostsByUser(getParam(pathname)));
 }, []);

 return (
  <div className={style.profile}>
   <h1 className={style.h1}>Profile </h1>
   <div className={style.profileInfo}>
    <Image src={userImg} width={150} height={150} />
    {isLoading && (
     <div className={style.spinner}>
      <Spinner animation="border" variant="success" />
     </div>
    )}
    <div className={style.userInfo}>
     {!!userField &&
      Object.keys(userField[0]).map((el) => (
       <ProfileItem
        title={userField[1][el as keyof (typeof userField)[1]]}
        text={userField[0][el as keyof (typeof userField)[0]]}
       />
      ))}
    </div>
   </div>
   {!isLoading && isLoadingPost && (
    <div className={style.spinner}>
     <Spinner animation="border" variant="success" />{" "}
    </div>
   )}
   {posts.length !== 0 &&
    posts.map((post) => (
     <Post getPost={() => getPostHandler(post.id)} {...post} key={post.id} />
    ))}
  </div>
 );
};
export default Profile;
