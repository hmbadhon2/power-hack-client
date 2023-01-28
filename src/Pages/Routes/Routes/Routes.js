import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../../BillingPage/BillingPage";
import MainBillingPage from "../../BillingPage/MainBillingPage";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/billing-page',
                element:<MainBillingPage/>
            },
        ]

    }
])