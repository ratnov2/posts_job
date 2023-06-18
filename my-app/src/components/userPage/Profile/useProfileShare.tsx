import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getUser } from "../../../store/user/actionCreators";
import { getComments } from "../../../store/comments/actionCreators";
import { getPostsByUser } from "../../../store/posts/actionCreators";
import { getParam } from "../../../utils/getParam";

const useProfileShare = () => {
 const { pathname } = useLocation();
 const { users, isLoading } = useAppSelector((state) => state.user);
 const dispatch = useAppDispatch();

 const [userField, setUserField] = useState<IUserField[] | null>();

 const path = getParam(pathname) - 1;

 useEffect(() => {
  if (users !== null && userField !== null) {
   const user = {
    userName: users[path].username,
    name: users[path].name,
    email: users[path].email,
    phone: users[path].phone,
    website: users[path].website,
   };
   const userTitle = {
    userName: "Display Name",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    website: "Website",
   };
   setUserField([user, userTitle]);
  }
 }, [users]);

 useEffect(() => {
  dispatch(getUser());
 }, []);

 //// for post

 const getPostHandler = (postId: string) => {
  dispatch(getComments(postId));
 };

 useEffect(() => {
  dispatch(getPostsByUser(getParam(pathname)));
 }, []);

 return { userField, isLoading, getPostHandler };
};

export default useProfileShare;

export interface IUserField {
 userName: string;
 name: string;
 email: string;
 phone: string;
 website: string;
}
