import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getUser } from "../../../store/user/actionCreators";

const useProfileShare = () => {
 const { pathname } = useLocation();
 const { users, isLoading } = useAppSelector((state) => state.user);
 const dispatch = useAppDispatch();

 const [userField, setUserField] = useState<IUserField[] | null>();

 const path = Number(pathname.split("/")[2]);

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

 return { userField, isLoading };
};

export default useProfileShare;

interface IUserField {
 userName: string;
 name: string;
 email: string;
 phone: string;
 website: string;
}
