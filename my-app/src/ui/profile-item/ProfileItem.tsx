import { FC } from "react";
import style from "./ProfileItem.module.scss";
import { IProfileItem } from "./profile-item.interface";

const ProfileItem: FC<IProfileItem> = ({ text, title, children }) => {
 return (
  <div className={style.profileItem}>
   <h1>{title}</h1>
   <p>{text || children}</p>
  </div>
 );
};
export default ProfileItem;
