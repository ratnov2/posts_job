import UserPage from "../components/userPage/UserPage";
import Home from "../pages/home";





export const routes = [
 {
  path: "/",
  element: <Home />,
 },
 {
  path: "user/:userId",
  element:<UserPage />
 }
];
