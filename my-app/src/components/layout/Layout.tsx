import { FC, PropsWithChildren } from "react";

import Meta from "./meta/Meta";
import { ISeo } from "./meta/meta.interface";
import Sidebar from "./sidebar/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
 return (
  <>
   <Meta {...rest} />

   <main>
    <Row>
     <Col xs={4}>
      <Sidebar />
     </Col>
     <Col>
      <section>{children}</section>
     </Col>
    </Row>
   </main>
  </>
 );
};

export default Layout;
