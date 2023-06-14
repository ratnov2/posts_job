import style from "./Sidebar.module.scss";
import logo from "@/assets/img/logo.png";
import Image from "react-bootstrap/Image";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Sidebar = () => {
 return (
  <div className={style.sidebar} >
   <h1>Posts</h1>
   <div>
    <Image src={logo} roundedCircle className={style.img}/>
   </div>
   <p>
    Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also
    provide a link to the about page
   </p>
   <div className={style.icons}>
    <AiFillGithub />
    <AiFillTwitterCircle />
    <BsStackOverflow />
   </div>
  </div>
 );
};
export default Sidebar;
