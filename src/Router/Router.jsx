import { createBrowserRouter } from "react-router-dom";
import AddUser from "../Component/AddUser/AddUser";
import Main from "../Layout/Main";

 
 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
    },
    {
        path:'/adduser',
        element:<AddUser />
    }
 ])

 export default router;