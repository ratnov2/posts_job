import style from "./Footer.module.scss";

const Footer = () => {
 return (
  <div className={style.footer}>
   <span>2023 © All Rights Reserved.</span>
   <span>
    Build with <b>♡</b> by Anton Ratnov
   </span>
   <span>Say Hello</span>
  </div>
 );
};
export default Footer;
