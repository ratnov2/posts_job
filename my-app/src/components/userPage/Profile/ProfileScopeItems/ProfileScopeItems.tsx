import { FC } from "react";
import ProfileItem from "../../../../ui/profile-item/ProfileItem";
import { IUserField } from "../useProfileShare";

const ProfileScopeItems: FC<IProfileScopeItemsItems> = ({ userField }) => {
 return (
  <>
   <ProfileItem title={userField[1].userName} text={userField[0].userName} />
   <ProfileItem title={userField[1].name} text={userField[0].name} />
   <ProfileItem title={userField[1].email}>
    <a href={`mailto:${userField[0].email}`}>{userField[0].email}</a>
   </ProfileItem>
   <ProfileItem title={userField[1].phone}>
    <a href={`tel:${userField[0].phone}`}>{userField[0].phone}</a>
   </ProfileItem>
   <ProfileItem title={userField[1].website}>
    <a href={`${userField[0].website}`}>{userField[0].website}</a>
   </ProfileItem>
  </>
 );
};
export default ProfileScopeItems;

interface IProfileScopeItemsItems {
 userField: IUserField[];
}
