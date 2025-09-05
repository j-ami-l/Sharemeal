import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import PrivateRouter from "./PrivateRouter";
import AddFood from "../Pages/AddFood/AddFood";
import Availablefoods from "../Pages/Availablefoods/Availablefoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import MyRequests from "../Pages/MyRequests/MyRequests";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
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
                element: <Availablefoods></Availablefoods>
            },
            {
                path: '/availablefood/:id',
                element: <PrivateRouter>
                    <FoodDetails></FoodDetails>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/fooddetails/${params.id}`)
            }, 
            {
                path: "/managemyfood",
                element: <PrivateRouter>
                    <ManageFoods></ManageFoods>
                </PrivateRouter>
            },
            {
                path: '/myrequestfood',
                element: <PrivateRouter>
                    <MyRequests></MyRequests>
                </PrivateRouter>
            }

        ]
    }
])