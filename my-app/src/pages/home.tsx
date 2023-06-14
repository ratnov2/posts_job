

import { FC } from "react"
import HomePage from "../components/home/HomePage"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { PostService } from "../services/post.service"

const Home:FC= () => {

  // const count = useSelector((state:RootState)=>state.post)
  // const dispatch = useDispatch(PostService.getAllPosts())

  // console.log(count);
  
  return <HomePage />
}
export default Home