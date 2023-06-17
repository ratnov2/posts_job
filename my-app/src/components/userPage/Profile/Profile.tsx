import Image from "react-bootstrap/esm/Image";
import style from "./Profile.module.scss";
import userImg from "@/assets/img/user-comment.png";
const Profile = () => {
  
 return (
  <div className={style.profile}>
   <h1>Profile </h1>
   <div>
    <Image src={userImg} width={150} />
    <div>

    </div>
   </div>
  </div>
 );
};
export default Profile;
