import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])