import { useAppSelector } from "../../../hooks/redux";
import style from "./MiddleInfo.module.scss";
import Spinner from 'react-bootstrap/Spinner';

const MiddleInfo = () => {
 const { posts, error, isLoading } = useAppSelector((store) => store.post);
 return (
  <div>
   <h1></h1>
   <p></p>
   {isLoading && <Spinner animation="border" variant="success" />}
   <div></div>
  </div>
 );
};
export default MiddleInfo;
