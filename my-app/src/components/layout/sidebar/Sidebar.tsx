import style from "./Sidebar.module.scss";
import logo from "@/assets/img/logo.png";
import Image from "react-bootstrap/Image";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { DataSidebarRoute } from "./sidebar-route.data";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let {pathname} = useLocation();
  
 return (
  <div className={style.sidebar}>
   <h1>Posts</h1>
   <div>
    <Image src={logo} roundedCircle className={style.img} />
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
   <div className={style.routes}>
    {DataSidebarRoute.map((route) => {
     return (
      <a href={route.route} className={pathname===route.route ? style.active:''} key={route.route}>
       {route.componentIcon}
       <span>{route.title}</span>
      </a>
     );
    })}
   </div>
  </div>
 );
};
export default Sidebar;
