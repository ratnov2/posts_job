import Image from "react-bootstrap/esm/Image";
import style from "./Profile.module.scss";
import userImg from "@/assets/img/user-comment.png";
import { useAppSelector } from "../../../hooks/redux";
import useProfileShare from "./useProfileShare";
import Post from "../../../ui/post/Post";
import ProfileScopeItems from "./ProfileScopeItems/ProfileScopeItems";
import CustomSpinner from "../../../ui/custom-spinner/CustomSpinner";
const Profile = () => {
 const {
  posts,
  error,
  isLoading: isLoadingPost,
 } = useAppSelector((store) => store.post);

 const { isLoading, userField, getPostHandler } = useProfileShare();

 return (
  <div className={style.profile}>
   <h1 className={style.h1Profile}>Profile </h1>
   <div className={style.profileInfo}>
    <Image src={userImg} width={150} height={150} />
    {isLoading && <CustomSpinner />}
    <div className={style.userInfo}>
     {!!userField && <ProfileScopeItems userField={userField} />}
    </div>
   </div>
   <h1 className={style.h1Posts}>Posts </h1>
   {!isLoading && isLoadingPost && <CustomSpinner />}
   {!isLoading &&
    posts.length !== 0 &&
    posts.map((post) => (
     <Post getPost={() => getPostHandler(post.id)} {...post} key={post.id} />
    ))}
  </div>
 );
};
export default Profile;
