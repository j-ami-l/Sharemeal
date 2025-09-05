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
import ERROR from "../Pages/ERROR/ERROR";
import Loading from "../Components/Loading";


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
                loader: async ({ params }) => {
                    const res = await fetch(`${import.meta.env.VITE_URL}/fooddetails/${params.id}`);
                    // Check for non-successful responses
                    if (!res.ok) {
                        // Handle based on status code
                        if (res.status === 404) {
                            throw new Response('Food item not found', { status: 404 });
                        } else if (res.status === 400) {
                            throw new Response('Invalid ID format', { status: 400 });
                        } else {
                            throw new Response('Server error occurred', { status: 500 });
                        }
                    }

                    return res.json();
                },
                errorElement: <ERROR></ERROR>,
                hydrateFallbackElement: <Loading></Loading>
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
            },
            {
                path: "/*",
                element: <ERROR></ERROR>
            }

        ]
    }, {
        path: "/*",
        element: <ERROR></ERROR>
    }
])