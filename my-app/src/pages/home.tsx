import { FC, useEffect } from "react";
import HomePage from "../components/home/HomePage";
import { getPosts } from "../store/posts/actionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const Home: FC = () => {
 const count = useAppSelector((state) => state.post);
 const dispatch = useAppDispatch();
 useEffect(() => {
  dispatch(getPosts());
 }, []);

 return <HomePage />;
};
export default Home;
