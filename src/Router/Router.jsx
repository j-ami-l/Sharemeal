import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import PrivateRouter from "./PrivateRouter";
import AddFood from "../Pages/AddFood/AddFood";
import Availablefoods from "../Pages/Availablefoods/Availablefoods";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addfood',
                element: <PrivateRouter>
                    <AddFood></AddFood>
                </PrivateRouter>
            },
            {
                path: '/availablefoods',
                element:<Availablefoods></Availablefoods>,
                loader : ()=> fetch('http://localhost:5000/allfoodpost'),
            }

        ]
    }
])