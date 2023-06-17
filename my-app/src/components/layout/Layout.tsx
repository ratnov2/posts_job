import { FC, PropsWithChildren } from "react";

import Meta from "./meta/Meta";
import { ISeo } from "./meta/meta.interface";
import Sidebar from "./sidebar/Sidebar";
import style from './Layout.module.scss'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
 return (
  <>
   <Meta {...rest} />
   <main>
    <div className={style.main}>
     <div className={style.sidebar}>
      <Sidebar />
     </div>
     <div className={style.children}>
      <section>{children}</section>
     </div>
    </div>
   </main>
  </>
 );
};

export default Layout;
