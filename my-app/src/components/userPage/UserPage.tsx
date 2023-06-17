import Image from "react-bootstrap/esm/Image"
import Layout from "../layout/Layout"
import bg from '@/assets/img/user-bg.jpeg'
import style from './UserPage.module.scss'
import Profile from "./Profile/Profile"

const UserPage = () => {
  return (
    <Layout title="user page">
      <Image src={bg} className={style.img}/>
      <Profile />
    </Layout>
  )
}

export default UserPage